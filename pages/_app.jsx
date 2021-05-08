import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { DokzProvider, ColorModeSwitch, GithubLink, Link } from 'dokz';
import { ChakraProvider } from '@chakra-ui/react';
import { GoogleFonts } from 'next-google-fonts';
import { useEffect } from 'react';

import DiscordLink from '../components/DiscordLink';

import theme from '../chakra.config';
import * as gtag from '../lib/gtag';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  if (router.pathname.startsWith('/wiki')) {
    return (
      <ChakraProvider>
        <Head>
          <title>Chroma Minecraft</title>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            property="og:title"
            content="Chroma Minecraft"
            key="meta-title"
          />
          <meta
            property="og:description"
            content="Server minecraft survival yang mendukung berbagai platform (Java / Bedrock / Pocket Edition)."
            key="meta-description"
          />
          <meta property="og:image" content="/img/logo.png" />
          <meta property="og:locale" content="id_ID" key="meta-locale" />
          <meta
            property="og:locale:alternate"
            content="en_US"
            key="meta-locale-alt"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Fira+Code"
            rel="stylesheet"
            key="google-font-Fira"
          />
        </Head>
        <DokzProvider
          animate
          docsRootPath="pages/wiki"
          headTitlePrefix="Chroma Minecraft Wiki - "
          headerLogo={
            <img
              src="/img/logo.png"
              style={{ opacity: 1 }}
              width="50px"
              height="50px"
            />
          }
          headerItems={[
            <DiscordLink url="https://discord.chroma-gaming.xyz" />,
            <GithubLink url="https://github.com/ChromaMinecraft" />,
            <ColorModeSwitch key="1" />,
          ]}
          sidebarOrdering={{
            'index.mdx': true,
            wiki: {
              'index.mdx': true,
              rules: true,
              tutorial: true,
            },
            more: true,
          }}
        >
          <Component {...pageProps} />
        </DokzProvider>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Chroma Minecraft</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta property="og:title" content="Chroma Minecraft" key="meta-title" />
        <meta
          property="og:description"
          content="Server minecraft survival yang mendukung berbagai platform (Java / Bedrock / Pocket Edition)."
          key="meta-description"
        />
        <meta property="og:image" content="/img/logo.png" />
        <meta property="og:locale" content="id_ID" key="meta-locale" />
        <meta
          property="og:locale:alternate"
          content="en_US"
          key="meta-locale-alt"
        />
      </Head>
      <GoogleFonts
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
