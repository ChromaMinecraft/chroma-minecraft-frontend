import React from 'react';
import { contents, icons } from './index.config';

const Introduction = () => {
  return (
    <>
      <div
        className="z-0 min-h-screen bg-cover bg-center static "
        style={{
          backgroundImage: 'url("img/bg.png")',
        }}
      ></div>
      <div
        className="z-10 absolute text-center text-white top-50 left-50 w-screen align-middle"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className="min-h-screen"
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
          }}
        ></div>
      </div>
      <div
        className="z-20 absolute text-center text-white top-50 left-50 w-screen align-middle sm:px-16"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <h4 className="font-semibold xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          {contents.title}
        </h4>
        <h4 className="font-medium xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          {contents.subTitle[0]}
        </h4>
        <h4 className="font-hairline xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          {contents.subTitle[1]}
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
    </>
  );
};

export default Introduction;
