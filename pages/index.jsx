import Head from 'next/head';
<script src="https://kit.fontawesome.com/a6da6b3a40.js" crossorigin="anonymous"></script>

export default function Home() {
  const icons = [
    { text: 'Discord', id: 'discord', src: 'icon/discord.svg', url: 'http://discord.chroma-gaming.xyz', target: '_blank'},
    { text: 'Play', id: 'play', src: 'icon/play-button.svg', url: '#', target: '_self' },
    { text: 'Vote', id: 'vote', src: 'icon/vote.svg', url: 'https://minecraft-mp.com/server/268502/vote/', target: '_blank' },

  ];

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
            'url("img/bg.png")',
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
        <div className="flex flex-row justify-center sm:px-16">
          {icons.map(({ text, id, src, url, target }) => (
            <div className="mx-10 xs:mx-6 flex flex-col justify-center">
              <div className="flex flex-row justify-center">
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-5 rounded-full h-20 w-20"
                  href={url}
                  target={target}
                >
                  <div className="w-full">
                    <img src={src} alt="" />
                  </div>
                </a>
              </div>
              <div>
                <h1 className="xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">{text}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
