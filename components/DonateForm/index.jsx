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
} from "@chakra-ui/react";
import { FaMoneyBillWave } from "react-icons/fa";
import Axios from "axios";
import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import DonateAlert from "../DonateAlert";

export default function DonateForm(props) {
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertStatus, setAlertStatus] = useState("");
  const [paymentList, setPaymentList] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [donationAmount, setDonationAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(1000);

  const payDonation = async (e) => {
    e.preventDefault();
    let result;
    try {
      const res = await Axios({
        url: "/api/donate",
        method: "POST",
        data: JSON.stringify({
          username: e.target.username.value,
          amount: e.target.amount.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = res.data;
      console.log(result);
      setAlertStatus("success");
    } catch (error) {
      result = error.response.data;
      setAlertStatus("error");
    }
    setAlertMessage(result.message);
    setIsAlertShown(true);
  };

  const handleAmountChange = (e) => {
    setDonationAmount(e);
    setTotalPrice(e * 1000);
  };

  const handlePaymentChange = (e) => {
    const fee = parseInt(
      e.target[event.target.selectedIndex].getAttribute("data-fee")
    );
    console.log(donationAmount * 1000 + fee);
    setTotalPrice(donationAmount * 1000 + fee);
  };

  useEffect(() => {
    const getPaymentList = async () => {
      try {
        const result = await Axios({
          url: "/api/payment",
          method: "GET",
        });
        setPaymentList(result.data.data);
      } catch (error) {
        setAlertMessage("Terjadi error saat mengambil aftar Metode Pembayaran");
        setAlertStatus("error");
        setIsAlertShown(true);
      }
    };

    getPaymentList();
  }, []);

  return (
    <>
      {isAlertShown && (
        <DonateAlert status={alertStatus} message={alertMessage} mb="1" />
      )}
      <form onSubmit={payDonation}>
        <FormControl id="username" isRequired>
          <FormLabel>Username Minecraft</FormLabel>
          <Input type="text" placeholder="Masukkan username minecraft." />
        </FormControl>
        <FormControl id="amount" isRequired mt="2">
          <FormLabel>Jumlah Chroma Cash</FormLabel>
          <NumberInput defaultValue={1} min={1} onChange={handleAmountChange}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl id="amount" isRequired mt="2">
          <FormLabel>Pilih Metode Pembayaran</FormLabel>
          <Select placeholder="Pilih salah satu" onChange={handlePaymentChange}>
            {paymentList.map((payment, i) => (
              <option key={i} value={payment.id} data-fee={payment.fee}>
                {payment.name}
              </option>
            ))}
          </Select>
        </FormControl>
        <Flex
          w="100%"
          bgColor="blue.200"
          color="blue.800"
          fontWeight="semibold"
          fontSize="lg"
          px="4"
          py="2"
          mt="3"
          borderRadius="sm"
        >
          <Text>Total</Text>
          <Spacer />
          <NumberFormat
            value={totalPrice}
            displayType={"text"}
            thousandSeparator={"."}
            prefix={"Rp "}
            decimalSeparator={","}
            decimalScale={2}
            fixedDecimalScale={true}
          />
        </Flex>
        <Button
          mt="4"
          colorScheme="blue"
          w="100%"
          type="submit"
          leftIcon={<FaMoneyBillWave />}
          fontSize="lg"
        >
          Bayar
        </Button>
      </form>
    </>
  );
}
