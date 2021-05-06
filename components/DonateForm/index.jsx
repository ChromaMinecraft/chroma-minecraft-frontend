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
import { useEffect, useState } from 'react';
import DonateAlert from '../DonateAlert';
import RupiahFormat from '../RupiahFormat';

export default function DonateForm(props) {
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertStatus, setAlertStatus] = useState('');
  const [paymentList, setPaymentList] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState({});
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [donationAmount, setDonationAmount] = useState(1);
  const [donationPrice, setDonationPrice] = useState(1000);
  const [subTotal, setSubTotal] = useState(0);
  const [totalFee, setTotalFee] = useState(0);
  const [totalPrice, setTotalPrice] = useState(1000);

  const payDonation = async (e) => {
    setIsAlertShown(false);
    e.preventDefault();
    let result;
    try {
      const res = await Axios({
        url: '/api/donate',
        method: 'POST',
        data: JSON.stringify({
          quantity: donationAmount,
          username,
          email,
          payment_method: selectedPayment.method,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      result = res.data;
      window.location.href = result.data.checkout_url;
      console.log(result);
      setAlertStatus('success');
      setAlertMessage(res.data.message);
    } catch (error) {
      console.log(error.response.data);
      result = error.response.data;
      setAlertMessage(error.response.data.message);
      setAlertStatus('error');
    }
    setIsAlertShown(true);
  };

  const checkUsername = async (e) => {
    setIsAlertShown(false);
    if (!username) {
      setAlertStatus('error');
      setAlertMessage('Username tidak boleh kosong.');
      setIsAlertShown(true);
      return;
    }
    let result;
    try {
      const res = await Axios({
        url: '/api/users',
        method: 'GET',
        params: {
          username: username,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      result = res.data;
      console.log(res.status);
      if (res.status == 203) {
        setAlertStatus('error');
      } else {
        setAlertStatus('success');
      }
      setAlertMessage(result.message);
    } catch (error) {
      setAlertStatus('error');
      setAlertMessage(error.response.data.message);
    }
    setIsAlertShown(true);
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
    });
  };

  useEffect(() => {
    const getPaymentList = async () => {
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
        setAlertMessage('Terjadi error saat mengambil aftar Metode Pembayaran');
        setAlertStatus('error');
        setIsAlertShown(true);
      }
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
        <DonateAlert status={alertStatus} message={alertMessage} mb='1' />
      )}
      <form onSubmit={payDonation}>
        <FormControl isRequired>
          <FormLabel>Username Minecraft</FormLabel>
          <Flex direction='row'>
            <Input
              type='text'
              placeholder='Masukkan username minecraft.'
              marginRight='1'
              name='username'
              value={username}
              onChange={handleUsernameChange}
            />
            <Button colorScheme='blue' onClick={checkUsername}>
              Check
            </Button>
          </Flex>
        </FormControl>
        <FormControl isRequired mt='2'>
          <FormLabel>Email</FormLabel>
          <Flex direction='row'>
            <Input
              type='email'
              placeholder='Masukkan emailmu'
              name='email'
              value={email}
              onChange={handleEmailChange}
            />
          </Flex>
        </FormControl>
        <FormControl id='amount' isRequired mt='2'>
          <FormLabel>Jumlah Chroma Cash</FormLabel>
          <NumberInput defaultValue={1} min={1} onChange={handleAmountChange}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl id='amount' isRequired mt='2'>
          <FormLabel>Pilih Metode Pembayaran</FormLabel>
          <Select onChange={handlePaymentChange}>
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
        <Flex
          w='100%'
          bgColor='yellow.200'
          color='yellow.800'
          fontWeight='semibold'
          fontSize='lg'
          px='4'
          py='2'
          mt='3'
          borderRadius='sm'
          direction='column'
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
          bgColor='green.200'
          color='green.800'
          fontWeight='semibold'
          fontSize='lg'
          px='4'
          py='2'
          mt='3'
          borderRadius='sm'
        >
          <Text>Total</Text>
          <Spacer />
          <RupiahFormat value={totalPrice} />
        </Flex>
        <Button
          mt='4'
          colorScheme='blue'
          w='100%'
          type='submit'
          leftIcon={<FaMoneyBillWave />}
          fontSize='lg'
        >
          Bayar
        </Button>
      </form>
    </>
  );
}
