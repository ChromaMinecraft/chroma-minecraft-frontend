import Head from 'next/head';
import Introduction from '../components/Introduction';

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
      <Introduction />
    </>
  );
}
