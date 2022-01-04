import {
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { ChromaButton, typesList } from '../../BaseComponents/ChromaButton';
import DonateAlert from '../DonateAlert';
import InnerChildHTML from '../../BaseComponents/InnerChildHtml';

import * as gtag from '../../../lib/gtag';
import Axios from 'axios';
import { DonateContext } from '../../../context/donate';

const stateMessages = {
  info: {
    color: 'blue.500',
    message:
      'Cek akun  yang kamu gunakan di chroma minecraft, sebelum berdonasi atau melakukan pengecekan transaksi',
  },
  success: {
    color: 'green.500',
    message: 'Username ditemukan',
  },
  warning: {
    color: 'yellow.500',
    message: 'Username tidak ditemukan',
  },
  error: {
    color: 'red.500',
    message: 'Terjadi kesalahan',
  },
};

const stateTypes = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
};

const DonateModalUsername = ({ parentTake, ...props }) => {
  const [alertMessage, setAlertMessage] = useState(stateMessages.info.message);
  const [alertType, setAlertType] = useState(stateTypes.info);
  const [isModalShown, setIsModalShown] = useState(true);
  const { username, setUsername } = useContext(DonateContext);

  const handleOnChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleOnClickCheckUsername = (e = null) => {
    if (e) e.preventDefault();
    checkUsername(username);
  };

  const checkUsername = async (username) => {
    gtag.event({
      action: 'Donate Check Username',
      category: 'Donate',
      label: 'Donate Label',
    });

    if (!username) {
      setAlertType(stateTypes.warning);
      setAlertMessage('Username tidak boleh kosong.');
      return;
    }

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
        setAlertType(stateTypes.warning);
        setAlertMessage(
          <InnerChildHTML
            text={`Username <b>${username}</b> tidak ditemukan`}
          />
        );
      } else {
        setAlertType(stateTypes.warning);
        setAlertMessage(result.data.message);
        setIsModalShown(false);
        setUsername(username);
      }
    } catch (error) {
      setAlertType(stateTypes.error);
      setAlertMessage(error.response.data.message);
    }
  };

  return (
    <>
      <Modal
        size='xl'
        isOpen={isModalShown}
        isCentered
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent bg='#2D2D36' color='white'>
          <Flex flex='1' padding='2'>
            <DonateAlert status={alertType}>{alertMessage}</DonateAlert>
          </Flex>
          <Divider
            borderColor={stateMessages[alertType].color}
            width='inherit'
            borderBottomWidth='2px'
          />
          <form onSubmit={handleOnClickCheckUsername}>
            <ModalBody pb={6} mt='4'>
              <FormControl>
                <FormLabel
                  fontSize={['sm', 'md']}
                  color='#ADADAD'
                  fontWeight='light'
                >
                  Username Minecraftmu
                </FormLabel>
                <Input
                  required
                  backgroundColor='#24242980'
                  placeholder='Pakai yang terdaftar di Chroma Minecraft'
                  _focus={{ outline: 'none' }}
                  onChange={handleOnChangeUsername}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter mt='-4'>
              <ChromaButton
                width='100%'
                types={typesList.primary}
                onClick={handleOnClickCheckUsername}
              >
                Cek Username
              </ChromaButton>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DonateModalUsername;
