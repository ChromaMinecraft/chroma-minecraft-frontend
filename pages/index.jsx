import Head from 'next/head';

export default function Home() {
  const icons = [{ value: 'Discord' }];

  return (
    <>
      <Head>
        <title>Chroma Minecraft</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div
        className="z-0 min-h-screen bg-cover bg-center static "
        style={{
          backgroundImage:
            'url(https://images5.alphacoders.com/108/thumb-1920-1081389.png)',
        }}
      ></div>
      <div
        className="z-10 absolute text-center text-white top-50 left-50 w-screen align-middle"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div
          className="min-h-screen"
          style={{
            background: 'rgba(0,0,0,0.4)',
          }}
        ></div>
      </div>
      <div
        className="z-20 absolute text-center text-white top-50 left-50 w-screen align-middle sm:px-16"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <h4 className="font-semibold xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Chroma Minecraft
        </h4>
        <h4 className="font-medium xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Server minecraft survival yang mendukung berbagai platform
          (Java/Bedrock/Pocket Edition).
        </h4>
        <h4 className="font-light xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Temukan keseruan sensasi berpetualang di dunia minecraft yang penuh
          dengan misteri, harta karun, village, dan lainnya.
        </h4>
        <div className="my-16"></div>
        <div className="flex flex-column justify-center sm:px-16">
          {icons.map(({ value }) => (
            <a
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              href="tes"
            >
              {value}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
