import Link from 'next/link';
import React from 'react';

const Toast = (props) => {
  return (
    <div className="px-2 justify-end place-items-end flex overflow-x-hidden overflow-y-auto fixed inset-0 z-10 outline-none focus:outline-none">
      <div className="relative w-auto m-6 lg:ml-auto xs:mx-auto md:mx-auto">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between pt-3 px-5 rounded-t">
            <p className="text-base font-semibold">Leaderboard</p>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-xl leading-none font-semibold outline-none focus:outline-none"
              onClick={props.onClose}
            >
              <span className="bg-transparent text-black opacity-5 h-3 w-2 text-xl block outline-none focus:outline-none">
                ×
                </span>
            </button>
          </div>
          <div className="flex flex-wrap justify-start pl-5 pr-24 pb-3">
            <div className="flex flex-col">
              <p className="text-sm font-light">Eitss jangan lupa cek leaderboard <Link href="/leaderboard" ><a className="text-blue-500 font-semibold" target="_blank">di sini</a></Link> ya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;