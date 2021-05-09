import {
  FormControl,
  FormLabel,
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
} from '@chakra-ui/react';
import { FaMoneyBillWave } from 'react-icons/fa';
import Axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import DonateAlert from '../DonateAlert';
import RupiahFormat from '../RupiahFormat';

import * as gtag from '../../lib/gtag';

export default function DonateForm(props) {
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [showFirstAlert, setShowFirstAlert] = useState(true);
  const [isSubmitButtonLoading, setIsSubmitButtonLoading] = useState(false);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
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

  const offlinePayment = ['Alfamart', 'Alfamidi'];
  const maxDonationAmount = 2000;
  const minDonationAmount = 10;

  const onFormDonationSubmit = (e) => {
    e.preventDefault();
    recaptchaRef.current.execute();
  };

  const payDonation = async (captchaCode) => {
    setIsAlertShown(false);
    setIsSubmitButtonLoading(true);
    setIsSubmitButtonDisabled(true);
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
      setIsSubmitButtonDisabled(false);
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
        setIsSubmitButtonDisabled(true);
      } else {
        setIsSubmitButtonDisabled(false);
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
    setIsSubmitButtonDisabled(true);
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
      setIsSubmitButtonDisabled(true);
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
      {showFirstAlert && (
        <DonateAlert
          status='warning'
          message='Periksa username terlebih dahulu sebelum melakukan pembayaran'
        />
      )}
      <form onSubmit={(e) => onFormDonationSubmit(e)}>
        <FormControl isRequired>
          <FormLabel fontSize={['sm', 'md']}>Username Minecraft</FormLabel>
          <Flex direction='row'>
            <Input
              type='text'
              placeholder='Masukkan username minecraft.'
              marginRight='1'
              name='username'
              value={username}
              onChange={handleUsernameChange}
              fontSize={['sm', 'md']}
            />
            <Button
              colorScheme='blue'
              onClick={checkUsername}
              isLoading={isCheckButtonLoading}
              fontSize={['sm', 'md']}
            >
              Cek
            </Button>
          </Flex>
        </FormControl>
        <FormControl isRequired mt='2'>
          <FormLabel fontSize={['sm', 'md']}>Email</FormLabel>
          <Flex direction='row'>
            <Input
              type='email'
              placeholder='Masukkan emailmu'
              name='email'
              value={email}
              onChange={handleEmailChange}
              fontSize={['sm', 'md']}
            />
          </Flex>
        </FormControl>
        <FormControl id='amount' isRequired mt='2'>
          <FormLabel fontSize={['sm', 'md']}>Jumlah Chroma Cash</FormLabel>
          <NumberInput
            defaultValue={donationAmount}
            min={minDonationAmount}
            max={maxDonationAmount}
            onChange={handleAmountChange}
            fontSize={['sm', 'md']}
          >
            <NumberInputField fontSize={['sm', 'md']} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl id='paymentMethod' isRequired mt='2'>
          <FormLabel fontSize={['sm', 'md']}>Pilih Metode Pembayaran</FormLabel>
          <Select
            onChange={(e) => handlePaymentChange(e)}
            fontSize={['sm', 'md']}
          >
            {paymentList.map((payment, i) => (
              <option
                key={i}
                value={payment.code}
                data-fee-flat={payment.fee_customer.flat}
                data-fee-percent={payment.fee_customer.percent}
              >
                {payment.name}
              </option>
            ))}
          </Select>
        </FormControl>
        {offlinePayment.includes(selectedPayment.name) && (
          <Flex w='100%' mt='2' fontSize='sm' direction='column'>
            <Flex>
              <Text>
                * Terdapat biaya administrasi tambahan untuk Alfamart / Alfamidi
              </Text>
            </Flex>
          </Flex>
        )}
        <Flex
          w='100%'
          fontWeight='semibold'
          px='4'
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
        <Flex
          w='100%'
          bgColor='gray.200'
          color='black'
          fontWeight='semibold'
          px='4'
          py='2'
          mt='3'
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
        <Button
          mt='4'
          colorScheme='blue'
          w='100%'
          type='submit'
          leftIcon={<FaMoneyBillWave />}
          fontSize='lg'
          disabled={isSubmitButtonDisabled}
          isLoading={isSubmitButtonLoading}
          fontSize={['sm', 'md']}
        >
          Bayar
        </Button>
      </form>
    </>
  );
}
