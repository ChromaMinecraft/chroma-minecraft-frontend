import React, { useEffect, useState } from 'react';
import { contents, icons, URL_SERVER } from './index.config';
import Axios from 'axios';
import ReactTooltip from 'react-tooltip';
import Reward from '../Reward';
import Donate from '../Donate';

import copy from 'copy-to-clipboard';

const Introduction = () => {
  const [playerCount, setPlayerCount] = useState(0);
  const [playerList, setPlayerList] = useState('');

  const [isRewardShown, setIsRewardShown] = useState(false);
  const [isDonateShown, setIsDonateShown] = useState(false);

  const getPlayers = async () => {
    const {
      data: { players },
    } = await Axios.get(URL_SERVER);

    players.list = !players.list ? [] : players.list;

    const result = players.list.join('<br>');

    setPlayerCount(players.list.length);
    setPlayerList(result);
  };

  const setupIconEvents = () => {
    icons.map((icon) => {
      icon.events.onClick = (e, url) => {
        switch (icon.id) {
          case 'play':
            e.preventDefault();
            const isCopied = copy(url);
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
      <div className="z-0 min-h-screen bg-cover bg-center static bg-introduction" />
      <div className="transform z-10 absolute text-center text-white top-50 left-50 w-screen align-middle -translate-x-1/2 -translate-y-1/2">
        <div className="min-h-screen bg-gray-900 bg-opacity-50" />
      </div>
      <div className="transform z-20 absolute text-center text-white top-50 left-50 w-screen align-middle xs:px-16 sm:px-16 -translate-x-1/2 -translate-y-1/2">
        <h4 className="font-semibold xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          {contents.title}{' '}
        </h4>
        <h4 className="font-medium xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          {contents.subTitle[0]}
        </h4>
        <h4 className="font-light xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          {contents.subTitle[1]}
        </h4>
        <div className="flex flex-col mt-3">
          <h4 className="font-light xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-5">
            <a
              className="font-bold"
              data-tip={playerList}
              data-class="font-bold"
              data-for="playerTooltip"
              data-multiline="true"
            >
              {playerCount} {contents.count.player}
            </a>
            {contents.count.title}
            <ReactTooltip
              id="playerTooltip"
              type="light"
              effect="solid"
              place="bottom"
            ></ReactTooltip>
          </h4>
          <span className="xs:text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base font-light">
            {contents.count.subInfo}
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
      </div>

      {isRewardShown && <Reward onClose={onRewardClosed} />}
      {isDonateShown && <Donate onClose={onDonateClosed} />}
    </>
  );
};

export default Introduction;
