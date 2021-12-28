import {
  Box,
  Container,
  keyframes,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const fadeIn = keyframes`
  0% { opacity:0; }
  100% { opacity:1; }
`;

const GameCardMapValue = [
  {
    image: '/img/landing-page-skyblock.png',
    title: 'Sky Block',
    subtitle: 'Semi RPG',
    description:
      'Sudah hebat dengan pola mining yang gitu-gitu aja? Coba uji skillmu dengan resouce terbatas di pulau kecil yang menantang',
  },
  {
    image: '/img/landing-page-survival.png',
    title: 'Survival',
    subtitle: 'Semi Vanilla',
    description:
      'Klaim tanah kekuasaanmu, ambil semua diamond yang ada, jual dipasar untuk modal berpetualang di dunia minecraft 1.17',
  },
  {
    image: '/img/landing-page-minigame.png',
    title: 'Minigames',
    subtitle: 'Mechanic Based',
    description:
      'Ketika grinding mulai terasa membosankan uji mekanik permainanmu melalui beragam minigames yang seru',
  },
];

const GameCardItem = (props) => {
  return (
    <>
      <Box>
        <Box flexShrink={0}>
          <Image
            src={props.image}
            width='100%'
            css={{ filter: 'saturate(0%)' }}
            _hover={{ filter: 'saturate(100%)' }}
          />
        </Box>
        <Text
          fontSize={['md']}
          fontWeight='light'
          marginTop='8'
          marginBottom='4'
        >
          <strong>{props.title}</strong> | {props.subtitle}
        </Text>
        <Text
          fontSize={['md']}
          fontWeight='light'
          noOfLines={{ base: '5', sm: '4' }}
        >
          {props.description}
        </Text>
      </Box>
    </>
  );
};

const GameModeSection = () => {
  const [serverRank, setServerRank] = useState(0);
  const [vote, setVote] = useState(0);
  const [playerOnline, setPlayerOnline] = useState(0);
  const [maxPlayer, setMaxPlayer] = useState(0);
  const [changeContent, setChangeContent] = useState(false);

  const { isOpen, onToggle } = useDisclosure();

  const fetchData = async () => {
    const result = await Axios({
      url: '/api/server',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setServerRank(result.data.rank);
    setVote(result.data.votes);
    setPlayerOnline(result.data.players);
    setMaxPlayer(result.data.maxplayers);
  };

  useEffect(() => {
    fetchData();

    setInterval(() => {
      fetchData();
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setChangeContent(!changeContent);
    }, 3000);
  }, [changeContent]);

  return (
    <Flex color='white' bg='#15151F' id='nav-gamemode'>
      <Container maxW='container.lg'>
        <Box marginX='auto' paddingY={{ base: '40px', md: '80px' }}>
          <Text
            fontSize={['sm', 'md', 'md', 'lg']}
            fontWeight='light'
            textTransform='uppercase'
            letterSpacing='4.5px'
          >
            Mode Permainan
          </Text>
          <Flex
            marginTop='4'
            alignItems='center'
            flexWrap='wrap'
            justifyContent='space-between'
          >
            <Box>
              <Text
                fontSize={['2xl', '2xl', '3xl', '4xl']}
                fontWeight='light'
                lineHeight={{ base: '24px', sm: '32px', md: '48px' }}
              >
                <strong>Beragam mode permainan</strong>
                <br />
                bye-bye rasa bosan
              </Text>
            </Box>
            <Box
              w={{ base: '100%', md: 'fit-content' }}
              mt={{ base: 6, md: 0 }}
            >
              <Flex
                justifyContent={{ base: 'flex-end', md: 'flex-start' }}
                animation={`${fadeIn} 3s infinite`}
                flexDirection={{ base: 'row-reverse', sm: 'row' }}
              >
                <Box>
                  <Text
                    fontSize={['sm', 'md']}
                    fontWeight='semibold'
                    textAlign={{ base: 'left', md: 'right' }}
                  >
                    {changeContent
                      ? `Peringkat server ${serverRank}`
                      : `${playerOnline} Player Online`}
                  </Text>
                  <Text
                    fontSize={['sm']}
                    fontWeight='light'
                    textAlign={{ base: 'left', md: 'right' }}
                  >
                    {changeContent
                      ? `${vote} Total Vote`
                      : `Maximum ${maxPlayer} Player`}
                  </Text>
                </Box>
                <Box flexShrink={0}>
                  <Image
                    src={
                      changeContent
                        ? '/img/ic-arrow-up.svg'
                        : 'img/ic-peoples.svg'
                    }
                    ml={{ base: '0', md: '4' }}
                    mr={{ base: '4', md: '0' }}
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
          <SimpleGrid marginTop='14' columns={{ base: 1, md: 3 }} spacing='7'>
            {GameCardMapValue.map((item, index) => (
              <GameCardItem key={index} {...item} />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Flex>
  );
};

export default GameModeSection;
