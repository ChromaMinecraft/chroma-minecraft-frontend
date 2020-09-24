import React, { useEffect, useState } from 'react';

const Donate = (props) => {
  return (
    <>
      <div className="justify-center items-center flex-none overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-12 mx-auto max-w-xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between py-4 px-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-3xl font-semibold">Donate Information</h3>
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
              <div className="flex flex-col">
                <p className="font-light">
                  Untuk saat ini, donatur tidak akan mendapat benefit apapun
                  dari server minecraft ini. Donasi ini bersifat sukarela supaya
                  server tetap hidup. Jika di kemudian hari, donatur akan
                  mendapatkan benefit, maka anda juga akan mendapat benefit
                  tersebut.
                </p>
                <p className="font-light my-3">
                  Mohon maaf sebelumnya dan terima kasih.
                </p>
                <a
                  className="text-center min-w-full border-1 border-solid rounded-lg bg-gray-800 hover:border-1 text-white font-semibold p-3"
                  href="https://saweria.co/chromamc"
                  target="_blank"
                >
                  Donasi Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
