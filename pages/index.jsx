import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import Head from 'next/head';
import GoogleFonts from 'next-google-fonts';

import { icons, URL_SERVER } from '../config/index.pages';
import Reward from '../components/Reward';
import Donate from '../components/Donate';

import copy from 'copy-to-clipboard';

export default function Home() {
  const [playerCount, setPlayerCount] = useState(0);

  const [isRewardShown, setIsRewardShown] = useState(false);
  const [isDonateShown, setIsDonateShown] = useState(false);

  const getPlayers = async () => {
    const {
      data: { players },
    } = await Axios.get(URL_SERVER);

    setPlayerCount(players.online);
  };

  const setupIconEvents = () => {
    icons.map((icon) => {
      icon.events.onClick = (e, url) => {
        switch (icon.id) {
          case 'play':
            e.preventDefault();
            const isCopied = copy('mc.chroma-gaming.xyz');
            if (isCopied) alert('Link telah berhasil dicopy');
            break;
          case 'donate':
            e.preventDefault();
            setIsDonateShown(true);
            break;
          case 'vote-reward':
            e.preventDefault();
            setIsRewardShown(true);
            break;
          default:
            break;
        }
      };
    });
  };

  const onRewardClosed = () => setIsRewardShown(false);
  const onDonateClosed = () => setIsDonateShown(false);

  setupIconEvents();

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <>
      <Head>
        <title>Chroma Minecraft</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta property="og:title" content="Chroma Minecraft" key="meta-title" />
        <meta
          property="og:description"
          content="Server minecraft survival yang mendukung berbagai platform (Java / Bedrock / Pocket Edition)."
          key="meta-description"
        />
        <meta property="og:image" content="/img/logo.png" />
        <meta property="og:locale" content="id_ID" key="meta-locale" />
        <meta
          property="og:locale:alternate"
          content="en_US"
          key="meta-locale-alt"
        />
      </Head>
      <GoogleFonts
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <section className="z-0 min-h-screen bg-cover bg-center static bg-introduction" />
      <section className="transform z-10 absolute text-center text-white top-50 left-50 w-screen align-middle -translate-x-1/2 -translate-y-1/2">
        <div className="min-h-screen bg-gray-900 bg-opacity-50" />
      </section>
      <section className="transform z-20 absolute text-center text-white top-50 left-50 w-screen align-middle xs:px-10 sm:px-16 -translate-x-1/2 -translate-y-1/2">
        <h4 className="font-semibold xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Chroma Minecraft
        </h4>
        <h4 className="font-medium xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Server minecraft survival yang mendukung berbagai platform (Java /
          Bedrock / Pocket Edition).
        </h4>
        <h4 className="font-light xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Temukan keseruan sensasi berpetualang di dunia minecraft yang penuh
          dengan misteri, harta karun, village, dan lainnya.
        </h4>
        <div className="flex flex-col mt-3">
          <h4 className="font-light xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-5">
            <span className="font-bold">{playerCount} Pemain</span> sedang
            bermain.
          </h4>
          <span className="xs:text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base font-light">
            Arahkan mouse ke jumlah pemain untuk melihat daftar pemain
          </span>
        </div>
        <div className="flex flex-wrap justify-center  md:px-16 mt-12">
          {icons.map(
            ({ text, id, url, key, target, content, events: { onClick } }) => (
              <div
                key={key}
                className="mx-6 xs:mx-3 w-auto flex flex-col justify-center"
              >
                <div className="flex flex-row justify-center">
                  <a
                    className="border border-solid rounded-full hover:bg-white hover:text-gray-800 text-white font-bold p-5"
                    id={id}
                    href={url}
                    target={target}
                    onClick={(e) => onClick(e, url)}
                  >
                    {content}
                  </a>
                </div>
                <div>
                  <h1 className="mt-1 xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    {text}
                  </h1>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {isRewardShown && <Reward onClose={onRewardClosed} />}
      {isDonateShown && <Donate onClose={onDonateClosed} />}
    </>
  );
}
