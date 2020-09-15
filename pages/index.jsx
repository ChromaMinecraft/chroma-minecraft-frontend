import Head from 'next/head';
import GoogleFonts from 'next-google-fonts';
import Introduction from '../components/Introduction';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chroma Minecraft</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </Head>
      <GoogleFonts
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Introduction />
    </>
  );
}
