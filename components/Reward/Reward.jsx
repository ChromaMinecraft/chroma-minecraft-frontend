import React, { useEffect, useState } from 'react';
import { reward, rewardByRarity } from './index.config';

const Reward = (props) => {
  const [leftRow, setLeftRow] = useState(0);
  const [midRow, setMidRow] = useState(0);
  const [rightRow, setRightRow] = useState(0);

  const tableRow = [];

  let leftRowData = [];
  let midRowData = [];
  let rightRowData = [];

  const setupTableRow = () => {
    let day = 1;
    for (let i = 0; i < 31; i++) {
      if (day > 7) day = 1;
      tableRow.push({ jumlahVote: i + 1, reward: reward[day - 1] });
      day++;
    }
  };

  const setupRowData = () => {
    for (let i = 0; i < tableRow.length; i++) {
      if (i < 10) {
        leftRowData.push(
          <tr key={'left-row-data-' + i}>
            <td className="border px-4 py-2 text-center">
              {tableRow[i].jumlahVote}
            </td>
            <td className="border px-4 py-2">{tableRow[i].reward}</td>
          </tr>
        );
      } else if (i < 20) {
        midRowData.push(
          <tr key={'mid-row-data-' + i}>
            <td className="border px-4 py-2 text-center">
              {tableRow[i].jumlahVote}
            </td>
            <td className="border px-4 py-2">{tableRow[i].reward}</td>
          </tr>
        );
      } else {
        rightRowData.push(
          <tr key={'right-row-data-' + i}>
            <td className="border px-4 py-2 text-center">
              {tableRow[i].jumlahVote}
            </td>
            <td className="border px-4 py-2">{tableRow[i].reward}</td>
          </tr>
        );
      }
    }
  };

  useEffect(() => {
    setupTableRow();
    setupRowData();

    setLeftRow(leftRowData);
    setMidRow(midRowData);
    setRightRow(rightRowData);
  }, []);

  return (
    <>
      <div className="justify-center items-center flex-none overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between py-4 px-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-3xl font-semibold">Vote Reward</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={props.onClose}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="flex flex-wrap justify-center p-6">
              {[1, 2, 3].map((value) => {
                let row;
                switch (value) {
                  case 1:
                    row = leftRow;
                    break;
                  case 2:
                    row = midRow;
                    break;
                  default:
                    row = rightRow;
                    break;
                }

                return (
                  <div key={'heading-reward-' + value} className="mx-1">
                    <table className="table-auto">
                      <thead>
                        <tr>
                          <th className="px-4 py-2">Jumlah Vote</th>
                          <th className="px-4 py-2">Reward</th>
                        </tr>
                      </thead>
                      <tbody>{row}</tbody>
                    </table>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col justify-center px-6">
              <div>
                <p>Keterangan:</p>
                <p>
                  1. Jumlah vote akan <b>direset tiap bulan</b>.
                </p>
                <p>
                  2. Enchanted Book yang didapat adalah acak dari semua
                  enchancment.
                </p>
                <p>
                  3. Random Item berisi <b>salah satu item</b> dari 5 kategori
                  berikut ini, yaitu:
                </p>
                <div className="ml-5 flex flex-wrap">
                  {Object.keys(rewardByRarity).map((key) => (
                    <div
                      key={key}
                      className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3"
                    >
                      <p>
                        {key}. {rewardByRarity[key].type} (Drop rate{' '}
                        {rewardByRarity[key].rate})
                      </p>
                      <div className="ml-4">
                        {rewardByRarity[key].list.map((reward, idx) => {
                          const listKey = `${key}-${idx}-${reward.name}`;
                          return (
                            <ol key={listKey}>
                              {++idx}. {reward.name} x{reward.amount}
                            </ol>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end py-4 px-6 border-t border-solid border-gray-300 rounded-b">
              <button
                className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: 'all .15s ease' }}
                onClick={props.onClose}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Reward;
