import React, { useEffect, useState } from "react";
import { contents, icons, tableRow } from "./index.config";
import Axios from "axios";
import ReactTooltip from "react-tooltip";

const Introduction = () => {
  const [playerCount, setPlayerCount] = useState(0);
  const [playerList, setPlayerList] = useState(0);
  const [showModal, setShowModal] = useState(true);
  const [leftRow, setLeftRow] = useState(0);
  const [midRow, setMidRow] = useState(0);
  const [rightRow, setRightRow] = useState(0);
  let leftRowData = [];
  let midRowData = [];
  let rightRowData = [];
  useEffect(() => {
    const getPlayersCount = async () => {
      const { data } = await Axios.get(
        "https://api.mcsrvstat.us/2/mc.chroma-gaming.xyz"
      );
      let playerArr = [];
      if (data.players.online > 0) {
        data.players.list.map(e => {
          playerArr.push(e);
        });
      }
      setPlayerCount(data.players.online);
      setPlayerList(playerArr.join("<br>"));
      ReactTooltip.rebuild();
    };
    getPlayersCount();
    for (let i = 0; i < tableRow.length; i++) {
      if (i < 10) {
        leftRowData.push(
          <tr>
            <td class="border px-4 py-2">{tableRow[i].jumlahVote}</td>
            <td class="border px-4 py-2">{tableRow[i].reward}</td>
          </tr>
        );
      } else if(i < 20){
        midRowData.push(
          <tr>
            <td class="border px-4 py-2">{tableRow[i].jumlahVote}</td>
            <td class="border px-4 py-2">{tableRow[i].reward}</td>
          </tr>
        );
      } else {
        rightRowData.push(
          <tr>
            <td class="border px-4 py-2">{tableRow[i].jumlahVote}</td>
            <td class="border px-4 py-2">{tableRow[i].reward}</td>
          </tr>
        );
      }
    }
    setLeftRow(leftRowData)
    setMidRow(midRowData)
    setRightRow(rightRowData)
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
        <h4 className="font-light xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-5">
          <a
            className="font-bold"
            data-tip={playerList}
            data-class="font-bold"
            data-for="playerTooltip"
            data-multiline="true"
          >
            {playerCount} Pemain
          </a>{" "}
          sedang bermain saat ini <br></br>
          <span className="xs:text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base">
            (Arahkan mouse ke jumlah pemain untuk melihat daftar pemain)
          </span>
          <ReactTooltip
            id="playerTooltip"
            type="light"
            effect="solid"
            place="bottom"
          ></ReactTooltip>
        </h4>
        <div className="flex flex-row justify-center sm:px-16 my-12">
          {icons.map(
            ({ text, id, url, key, target, content, events: { onClick } }) => (
              <div
                key={key}
                className="mx-12 xs:mx-6 flex flex-col justify-center"
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
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">Vote Reward</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                {/* <div className="relative p-6 flex-auto"> */}
                <div className="flex flex-auto p-6">
                  <div className="mx-2">
                    <table class="table-auto">
                      <thead>
                        <tr>
                          <th class="px-4 py-2">Jumlah Vote</th>
                          <th class="px-4 py-2">Reward</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leftRow}
                      </tbody>
                    </table>
                  </div>
                  <div className="mx-2">
                    <table class="table-auto">
                      <thead>
                        <tr>
                          <th class="px-4 py-2">Jumlah Vote</th>
                          <th class="px-4 py-2">Reward</th>
                        </tr>
                      </thead>
                      <tbody>
                        {midRow}
                      </tbody>
                    </table>
                  </div>
                  <div className="mx-2">
                    <table class="table-auto">
                      <thead>
                        <tr>
                          <th class="px-4 py-2">Jumlah Vote</th>
                          <th class="px-4 py-2">Reward</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rightRow}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Introduction;
