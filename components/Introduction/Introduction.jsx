import React, { useEffect, useState } from "react";
import { contents, icons } from "./index.config";
import Axios from "axios";
import ReactTooltip from "react-tooltip";

const Introduction = () => {
  const [playerCount, setPlayerCount] = useState(0);
  const [playerList, setPlayerList] = useState(0);

  useEffect(() => {
    const getPlayersCount = async () => {
      const { data } = await Axios.get(
        "https://api.mcsrvstat.us/2/mc.chroma-gaming.xyz"
      );
      let playerArr = [];
      data.players.list.map(e => {
        playerArr.push(e);
      });
      setPlayerCount(data.players.online);
      setPlayerList(playerArr.join("<br>"));
      ReactTooltip.rebuild();
    };
    getPlayersCount();
  }, []);

  return (
    <>
      <div
        className="z-0 min-h-screen bg-cover bg-center static "
        style={{
          backgroundImage: 'url("img/bg.png")'
        }}
      ></div>
      <div
        className="z-10 absolute text-center text-white top-50 left-50 w-screen align-middle"
        style={{
          transform: "translate(-50%, -50%)"
        }}
      >
        <div
          className="min-h-screen"
          style={{
            background: "rgba(0, 0, 0, 0.4)"
          }}
        ></div>
      </div>
      <div
        className="z-20 absolute text-center text-white top-50 left-50 w-screen align-middle sm:px-16"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <h4 className="font-semibold xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          {contents.title}
        </h4>
        <h4 className="font-medium xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          {contents.subTitle[0]}
        </h4>
        <h4 className="font-light xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          {contents.subTitle[1]}
        </h4>
        <h4 className="font-light xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-5">
          <a className="font-bold" data-tip={playerList} data-class="font-bold" data-for="playerTooltip" data-multiline="true">
            {playerCount} Pemain
          </a>{" "}
          sedang bermain saat ini <br></br>
          <span className="xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            (Arahkan mouse ke jumlah pemain untuk melihat daftar pemain)
          </span>
          <ReactTooltip
            id="playerTooltip"
            type="light"
            effect="solid"
            place="bottom"
          >
          </ReactTooltip>
        </h4>
        <div className="flex flex-row justify-center sm:px-16 my-12">
          {icons.map(
            ({ text, id, url, key, target, content, events: { onClick } }) => (
              <div
                key={key}
                className="mx-10 xs:mx-6 flex flex-col justify-center"
              >
                <div className="flex flex-row justify-center">
                  <a
                    className="border border-solid rounded-full hover:bg-white hover:text-gray-800 text-white font-bold p-5"
                    id={id}
                    href={url}
                    target={target}
                    onClick={e => onClick(e, url)}
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
    </>
  );
};

export default Introduction;
