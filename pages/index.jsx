import Head from 'next/head';

export default function Home() {
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
        className="z-0 min-h-screen bg-cover bg-center static"
        style={{
          backgroundImage:
            'url(https://files.wallpaperpass.com/2019/10/minecraft%20wallpaper%2006%20-%201920x1080.jpg)',
          WebkitFilter: 'blur(5px)',
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
        >
          <h2 className="font-semibold text-5xl">Chroma Minecraft</h2>
          <h4 className="font-medium text-3xl">
            Server minecraft survival yang mendukung berbagai platform
            (Java/Bedrock/Pocket Edition).
          </h4>
          <h4 className="font-light text-2xl">
            Temukan keseruan sensasi berpetualang di dunia minecraft yang penuh
            dengan misteri, harta karun, village, dan lainnya.
          </h4>
        </div>
      </div>
    </>
  );
}
