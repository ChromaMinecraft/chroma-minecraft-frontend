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
} from "@chakra-ui/react";
import { FaMoneyBillWave } from "react-icons/fa";
import Axios from "axios";
import { useState } from "react";
import DonateAlert from "../DonateAlert";

export default function DonateForm(props) {
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertStatus, setAlertStatus] = useState("");

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
  return (
    <>
      {isAlertShown && (
        <DonateAlert status={alertStatus} message={alertMessage} />
      )}
      <form onSubmit={payDonation}>
        <FormControl id="username" isRequired>
          <FormLabel>Minecraft Username</FormLabel>
          <Input type="text" placeholder="Type here your minecraft username." />
        </FormControl>
        <FormControl id="amount" isRequired mt="2">
          <FormLabel>ChromaCash Amount</FormLabel>
          <NumberInput defaultValue={1} min={1}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <Button
          mt="4"
          colorScheme="blue"
          w="100%"
          type="submit"
          leftIcon={<FaMoneyBillWave />}
        >
          Buy
        </Button>
      </form>
    </>
  );
}
