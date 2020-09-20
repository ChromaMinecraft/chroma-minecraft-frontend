import React, { useEffect, useState } from "react";
import { contents, tableRow } from "./index.config";
import Axios from "axios";
import ReactTooltip from "react-tooltip";
import { FaDiscord, FaPlay, FaPoll, FaAward } from "react-icons/fa";

const Introduction = () => {
  const [playerCount, setPlayerCount] = useState(0);
  const [playerList, setPlayerList] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [leftRow, setLeftRow] = useState(0);
  const [midRow, setMidRow] = useState(0);
  const [rightRow, setRightRow] = useState(0);
  let leftRowData = [];
  let midRowData = [];
  let rightRowData = [];
  const icons = [
    {
      text: "Discord",
      id: "discord",
      url: "http://discord.chroma-gaming.xyz",
      target: "_blank",
      key: "link-introduction-discord",
      content: <FaDiscord />,
      events: {
        onClick: (e, url) => {}
      }
    },
    {
      text: "Play",
      id: "play",
      url: "mc.chroma-gaming.xyz",
      target: "_self",
      key: "link-introduction-play",
      content: <FaPlay />,
      events: {
        onClick: (e, url) => {
          e.preventDefault();
          const isCopied = copy(url);
          if (isCopied) alert("Link telah berhasil dicopy");
        }
      }
    },
    {
      text: "Vote",
      id: "vote",
      url: "https://minecraft-mp.com/server/268676/vote/",
      target: "_blank",
      key: "link-introduction-vote",
      content: <FaPoll />,
      events: {
        onClick: (e, url) => {}
      }
    },
    {
      text: "Vote Reward",
      id: "vote-reward",
      url: "#",
      target: "_self",
      key: "link-introduction-vote-reward",
      content: <FaAward />,
      events: {
        onClick: (e, url) => {
          // Iconnya aku bawa kesini karena aku butuh ngatur state showModal
          setShowModal(true)
        }
      }
    }
  ];
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
            <td className="border px-4 py-2 text-center">
              {tableRow[i].jumlahVote}
            </td>
            <td className="border px-4 py-2">{tableRow[i].reward}</td>
          </tr>
        );
      } else if (i < 20) {
        midRowData.push(
          <tr>
            <td className="border px-4 py-2 text-center">
              {tableRow[i].jumlahVote}
            </td>
            <td className="border px-4 py-2">{tableRow[i].reward}</td>
          </tr>
        );
      } else {
        rightRowData.push(
          <tr>
            <td className="border px-4 py-2 text-center">
              {tableRow[i].jumlahVote}
            </td>
            <td className="border px-4 py-2">{tableRow[i].reward}</td>
          </tr>
        );
      }
    }
    setLeftRow(leftRowData);
    setMidRow(midRowData);
    setRightRow(rightRowData);
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
            // className="justify-center items-center flex fixed top-0 inset-x-0 z-50 outline-none focus:outline-none"
            className="justify-center items-center flex-none overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            // onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between py-4 px-5 border-b border-solid border-gray-300 rounded-t">
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
                <div className="flex flex-wrap justify-center p-6">
                  <div className="mx-1">
                    <table className="table-auto">
                      <thead>
                        <tr>
                          <th className="px-4 py-2">Jumlah Vote</th>
                          <th className="px-4 py-2">Reward</th>
                        </tr>
                      </thead>
                      <tbody>{leftRow}</tbody>
                    </table>
                  </div>
                  <div className="mx-1">
                    <table className="table-auto">
                      <thead>
                        <tr>
                          <th className="px-4 py-2">Jumlah Vote</th>
                          <th className="px-4 py-2">Reward</th>
                        </tr>
                      </thead>
                      <tbody>{midRow}</tbody>
                    </table>
                  </div>
                  <div className="mx-1">
                    <table className="table-auto">
                      <thead>
                        <tr>
                          <th className="px-4 py-2">Jumlah Vote</th>
                          <th className="px-4 py-2">Reward</th>
                        </tr>
                      </thead>
                      <tbody>{rightRow}</tbody>
                    </table>
                  </div>
                </div>
                <div className="flex flex-col justify-center px-6">
                  <div>
                    <p className="font-semibold">Keterangan:</p>
                    <p>
                      <b>1.</b> Jumlah vote akan <b>direset tiap bulan</b>
                    </p>
                    <p>
                      <b>2.</b> Enchanted Book yang didapat adalah acak dari
                      semua enchancment
                    </p>
                    <p>
                      <b>3.</b> Random Item berisi <b>salah satu item</b> dari 5
                      kategori berikut ini, yaitu :
                    </p>
                    <div className="ml-5 flex flex-wrap">
                      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
                        <p>
                          <b>A.</b> Common Item (Drop rate 34,667%)
                        </p>
                        <div className="ml-4">
                          <p>
                            <b>1.</b> Cobblestone x50
                          </p>
                          <p>
                            <b>2.</b> Coal x20
                          </p>
                          <p>
                            <b>3.</b> Wheat x20
                          </p>
                          <p>
                            <b>4.</b> Clay x20
                          </p>
                          <p>
                            <b>5.</b> Spruce Log x20
                          </p>
                          <p>
                            <b>6.</b> Jungle Log x20
                          </p>
                          <b>7.</b> Cooked Salmon x10
                          <p>
                            <b>8.</b> Steak x10
                          </p>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
                        <p>
                          <b>B.</b> Uncommon Item (Drop rate 28,667%)
                        </p>
                        <div className="ml-4">
                          <p>
                            <b>1.</b> Pufferfish x5
                          </p>
                          <p>
                            <b>2.</b> TNT x5
                          </p>
                          <p>
                            <b>3.</b> Iron Ingot x5
                          </p>
                          <p>
                            <b>4.</b> Iron Ingot x10
                          </p>
                          <p>
                            <b>5.</b> Gold Ingot x10
                          </p>
                          <p>
                            <b>6.</b> Iron Horse Armour x1
                          </p>
                          <p>
                            <b>7.</b> Book x10
                          </p>
                          <p>
                            <b>8.</b> Bee Nest x1
                          </p>
                          <p>
                            <b>9.</b> Melon Seeds x5
                          </p>
                          <p>
                            <b>10.</b> Fermented Spider Eye x1
                          </p>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
                        <p>
                          <b>C.</b> Rare Item (Drop rate 21,333%)
                        </p>
                        <div className="ml-4">
                          <p>
                            <b>1.</b> Obsidian x5
                          </p>
                          <p>
                            <b>2.</b> Honey Block x1
                          </p>
                          <p>
                            <b>3.</b> Diamond x3
                          </p>
                          <p>
                            <b>4.</b> Emerald x5
                          </p>
                          <p>
                            <b>5.</b> Golden Horse Armoud x1
                          </p>
                          <p>
                            <b>6.</b> Bottle o' Enchanting x3
                          </p>
                          <p>
                            <b>7.</b> Splash Potion of Weakness x
                          </p>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
                        <p>
                          <b>D.</b> Epic Item (Drop rate 10%)
                        </p>
                        <div className="ml-4">
                          <p>
                            <b>1.</b> Mycelium x5
                          </p>
                          <p>
                            <b>2.</b> Diamond x5
                          </p>
                          <p>
                            <b>3.</b> Diamond x10
                          </p>
                          <p>
                            <b>4.</b> Emerald x10
                          </p>
                          <p>
                            <b>5.</b> Golden Apple x1
                          </p>
                          <p>
                            <b>6.</b> Crying Obsidian x2
                          </p>
                          <p>
                            <b>7.</b> Bucket of Tropical Fish x1
                          </p>
                          <p>
                            <b>8.</b> Diamond Horse Armour x1
                          </p>
                          <p>
                            <b>9.</b> Ender Eye x3
                          </p>
                          <p>
                            <b>10.</b> Saddle x1
                          </p>
                          <p>
                            <b>11.</b> Flower Banner Pattern x1
                          </p>
                          <p>
                            <b>12.</b> Creeper Banner Pattern x1
                          </p>
                          <p>
                            <b>13.</b> Piglin Banner Pattern x1
                          </p>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
                        <p>
                          <b>E.</b> Legendary Item (Drop rate 5.333%)
                        </p>
                        <div className="ml-4">
                          <p>
                            <b>1.</b> Enchanted Golden Apple x1
                          </p>
                          <p>
                            <b>2.</b> Heart of the Sea x1
                          </p>
                          <p>
                            <b>3.</b> Ancient Debris x1
                          </p>
                          <p>
                            <b>4.</b> Shulker Shell x2
                          </p>
                          <p>
                            <b>5.</b> Totem of Undying x1
                          </p>
                          <p>
                            <b>6.</b> Elytra x1
                          </p>
                          <p>
                            <b>7.</b> Music Disc No 11 x1
                          </p>
                          <p>
                            <b>8.</b> Name Tag x1
                          </p>
                          <p>
                            <b>9.</b> Sea Lantern x2
                          </p>
                          <p>
                            <b>10.</b> Ghast Tear x1
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end py-4 px-6 border-t border-solid border-gray-300 rounded-b">
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
