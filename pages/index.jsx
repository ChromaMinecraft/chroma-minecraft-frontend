import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import copy from 'copy-to-clipboard';

import { icons } from '../config/index.pages';
import { LIST_URL } from '../config/links';

import Reward from '../components/Reward';
import Donate from '../components/Donate';
import CircleButton from '../components/CircleButton';
import Header from '../components/Header';
import Toast from '../components/Toast';

export default function Home() {
  const [playerCount, setPlayerCount] = useState(0);
  const [isRewardShown, setIsRewardShown] = useState(false);
  const [isDonateShown, setIsDonateShown] = useState(false);
  const [isLeaderboardShown, setIsLeaderboardShown] = useState(false);

  const requestTimeout = 1000;
  const leaderboardTimeout = 2000;

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
  const onLeaderboardClosed = () => setIsLeaderboardShown(false);

  setupIconEvents();

  useEffect(() => {
    const getPlayers = async () => {
      const {
        data: { players = {} },
      } = await Axios.get(LIST_URL.STATUS);
      const { online = 0 } = players;

      setPlayerCount(online);
    };

    getPlayers();

    const interval = setInterval(() => {
      getPlayers();
    }, requestTimeout);

    setTimeout(() => {
      setIsLeaderboardShown(true);
    }, leaderboardTimeout);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
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
          <h4 className="font-light xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-5 mb-2">
            <span className="font-bold">{playerCount} Pemain</span> sedang
            bermain.
          </h4>
          <span className="font-light">
            Gunakan tombol dibawah ini untuk memulai
          </span>
        </div>
        <div className="flex flex-wrap justify-center md:px-16 mt-12">
          {icons.map((icon, i) => (
            <CircleButton
              key={`circle-btn-${i}`}
              icon={icon}
              onClick={(e) => icon.events.onClick(e, icon.url)}
            />
          ))}
        </div>
      </section>

      {isRewardShown && <Reward onClose={onRewardClosed} />}
      {isDonateShown && <Donate onClose={onDonateClosed} />}
      {isLeaderboardShown && <Toast onClose={onLeaderboardClosed} />}
    </>
  );
}
