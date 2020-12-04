import React from 'react';

const CircleButton = (props) => {
  return (
    <div
      key={props.icon.key}
      className="mx-6 xs:mx-3 w-auto flex flex-col justify-center"
    >
      <div className="flex flex-row justify-center">
        <a
          className="border border-solid rounded-full hover:bg-white hover:text-gray-800 text-white font-bold p-5"
          id={props.icon.id}
          href={props.icon.url}
          target={props.icon.target}
          onClick={props.onClick}
        >
          {props.icon.content}
        </a>
      </div>
      <div>
        <h1 className="mt-1 xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          {props.icon.text}
        </h1>
      </div>
    </div>
  );
};

export default CircleButton;
