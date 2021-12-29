import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Select,
  Flex,
  Spacer,
  Text,
  Divider,
} from '@chakra-ui/react';
import { FaMoneyBillWave } from 'react-icons/fa';
import Axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import DonateAlert from '../DonateAlert';
import RupiahFormat from '../../BaseComponents/RupiahFormat';

import * as gtag from '../../../lib/gtag';
import { ChromaButton, typesList } from '../../BaseComponents/ChromaButton';

export default function DonateForm() {
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [showFirstAlert, setShowFirstAlert] = useState(true);
  const [isSubmitButtonLoading, setIsSubmitButtonLoading] = useState(false);
  const [isCheckButtonLoading, setIsCheckButtonLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertStatus, setAlertStatus] = useState('');
  const [paymentList, setPaymentList] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState({});
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [donationAmount, setDonationAmount] = useState(10);
  const [donationPrice, setDonationPrice] = useState(1000);
  const [subTotal, setSubTotal] = useState(0);
  const [totalFee, setTotalFee] = useState(0);
  const [totalPrice, setTotalPrice] = useState(1000);
  const recaptchaRef = useRef(null);

  const offlinePayment = ['Alfamart', 'Alfamidi', 'Indomaret'];
  const maxDonationAmount = 2000;
  const minDonationAmount = 10;

  const onFormDonationSubmit = (e) => {
    e.preventDefault();
    recaptchaRef.current.execute();
  };

  const payDonation = async (captchaCode) => {
    setIsAlertShown(false);
    setIsSubmitButtonLoading(true);
    gtag.event({
      action: 'Donate Buy',
      category: 'Donate',
      label: 'Donate Label',
    });
    try {
      const result = await Axios({
        url: '/api/donate',
        method: 'POST',
        data: JSON.stringify({
          quantity: donationAmount,
          username,
          email,
          payment_method: selectedPayment.method,
          captchaCode,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setAlertStatus('success');
      setAlertMessage('Kamu akan segera diarahkan ke halaman pembayaran');
      setTimeout(() => {
        window.location.href = result.data.data.checkout_url;
      }, 2000);
    } catch (error) {
      setAlertMessage(error.response.data.message);
      setAlertStatus('error');
      setIsSubmitButtonLoading(false);
    }
    recaptchaRef.current.reset();
    setIsAlertShown(true);
  };

  const onReCAPTCHAChange = async (captchaCode) => {
    if (!captchaCode) {
      return;
    }
    payDonation(captchaCode);
  };

  const checkUsername = async (e) => {
    setShowFirstAlert(false);
    setIsAlertShown(false);
    if (!username) {
      setAlertStatus('error');
      setAlertMessage('Username tidak boleh kosong.');
      setIsAlertShown(true);
      return;
    }
    setIsCheckButtonLoading(true);
    gtag.event({
      action: 'Donate Check Username',
      category: 'Donate',
      label: 'Donate Label',
    });
    try {
      const result = await Axios({
        url: '/api/users',
        method: 'GET',
        params: {
          username: username,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (result.status == 203) {
        setAlertStatus('error');
      } else {
        setAlertStatus('success');
      }
      setAlertMessage(result.data.message);
    } catch (error) {
      setAlertStatus('error');
      setAlertMessage(error.response.data.message);
    }
    setIsAlertShown(true);
    setIsCheckButtonLoading(false);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAmountChange = (e) => {
    setDonationAmount(parseFloat(e));
  };

  const handlePaymentChange = (e) => {
    const feeFlat = parseFloat(
      e.target[event.target.selectedIndex].getAttribute('data-fee-flat')
    );
    const feePercent = parseFloat(
      e.target[event.target.selectedIndex].getAttribute('data-fee-percent')
    );
    setSelectedPayment({
      feeFlat: feeFlat,
      feePercent: feePercent,
      method: e.target.value,
      name: e.target[event.target.selectedIndex].text,
    });
  };

  useEffect(() => {
    const getPaymentList = async () => {
      setIsSubmitButtonLoading(true);
      setIsCheckButtonLoading(true);
      try {
        const result = await Axios({
          url: '/api/payment',
          method: 'GET',
        });
        setPaymentList(result.data.data);
        const {
          code,
          fee_customer: { flat, percent },
        } = result.data.data[0];
        setSelectedPayment({
          feeFlat: flat,
          feePercent: percent,
          method: code,
        });
      } catch (error) {
        setAlertMessage(
          'Terjadi error saat mengambil daftar Metode Pembayaran. Silahkan muat ulang halaman ini'
        );
        setAlertStatus('error');
        setIsAlertShown(true);
      }
      console.log('finish');
      setIsSubmitButtonLoading(false);
      setIsCheckButtonLoading(false);
    };

    getPaymentList();
  }, []);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const feeFlat = parseFloat(selectedPayment.feeFlat);
      const feePercent = parseFloat(selectedPayment.feePercent);
      const subTotal = donationAmount * donationPrice;
      const totalFee = (subTotal * feePercent) / 100 + feeFlat;
      const totalPrice = subTotal + totalFee;
      setSubTotal(subTotal);
      setTotalFee(totalFee);
      setTotalPrice(totalPrice);
    };

    calculateTotalPrice();
  }, [selectedPayment, donationAmount]);

  return (
    <>
      {isAlertShown && (
        <DonateAlert status={alertStatus} message={alertMessage} />
      )}
      <form onSubmit={(e) => onFormDonationSubmit(e)}>
        <FormControl isRequired mt='2'>
          <FormLabel fontSize={['sm', 'md']} color='#ADADAD' fontWeight='light'>
            Alamat Email
          </FormLabel>
          <Flex direction='row'>
            <Input
              type='email'
              placeholder='Alamat email aktif'
              name='email'
              value={email}
              onChange={handleEmailChange}
              fontSize={['sm', 'md']}
              backgroundColor='#24242980'
            />
          </Flex>
        </FormControl>
        <FormControl id='amount' isRequired mt='2'>
          <FormLabel fontSize={['sm', 'md']} color='#ADADAD' fontWeight='light'>
            Jumlah Chroma Cash
          </FormLabel>
          <NumberInput
            defaultValue={donationAmount}
            min={minDonationAmount}
            max={maxDonationAmount}
            onChange={handleAmountChange}
            fontSize={['sm', 'md']}
            backgroundColor='#24242980'
          >
            <NumberInputField fontSize={['sm', 'md']} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormHelperText>
            * Jumlah pembelian minimum CC adalah 10
          </FormHelperText>
        </FormControl>
        <FormControl id='paymentMethod' isRequired mt='2'>
          <FormLabel fontSize={['sm', 'md']} color='#ADADAD' fontWeight='light'>
            Pilih Metode Pembayaran
          </FormLabel>
          <Select
            onChange={(e) => handlePaymentChange(e)}
            fontSize={['sm', 'md']}
            backgroundColor='#24242980'
          >
            {paymentList.map((payment, i) => (
              <option
                key={i}
                value={payment.code}
                data-fee-flat={payment.fee_customer.flat}
                data-fee-percent={payment.fee_customer.percent}
                style={{ backgroundColor: '#24242980' }}
              >
                {payment.name}
              </option>
            ))}
          </Select>
          <FormHelperText>
            * Metode pembayaran telah diurutkan berdasarkan biaya admin terendah
          </FormHelperText>
        </FormControl>
        {offlinePayment.includes(selectedPayment.name) && (
          <Flex w='100%' mt='2' fontSize='sm' direction='column'>
            <Flex>
              <Text color='whiteAlpha.600'>
                * Terdapat biaya administrasi tambahan untuk pembayaran ini.
              </Text>
            </Flex>
          </Flex>
        )}
        <Flex
          w='100%'
          fontWeight='semibold'
          py='2'
          mt='3'
          direction='column'
          fontSize={['md', 'lg']}
        >
          <Flex>
            <Text>Subtotal</Text>
            <Spacer />
            <RupiahFormat value={subTotal} />
          </Flex>
          <Flex>
            <Text>Fee</Text>
            <Spacer />
            <RupiahFormat value={totalFee} />
          </Flex>
        </Flex>
        <Divider mt='4' />
        <Flex
          w='100%'
          color='white'
          fontWeight='semibold'
          py='2'
          mt='3'
          mb='5'
          borderRadius='sm'
          fontSize='lg'
        >
          <Text>Total</Text>
          <Spacer />
          <RupiahFormat value={totalPrice} />
        </Flex>
        <ReCAPTCHA
          ref={recaptchaRef}
          size='invisible'
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={onReCAPTCHAChange}
        />
        <ChromaButton
          types={typesList.primary}
          width='100%'
          type='submit'
          isLoading={isSubmitButtonLoading}
          fontSize={['sm', 'md']}
          onClick={payDonation}
        >
          Bayar
        </ChromaButton>
        <ChromaButton
          types={typesList.link}
          as='a'
          href='/wiki/donasi/new'
          target='_blank'
          width='100%'
          mt='4'
        >
          Butuh Bantuan?
        </ChromaButton>
      </form>
    </>
  );
}
