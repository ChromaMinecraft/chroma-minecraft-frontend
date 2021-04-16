import React from 'react';
import Link from 'next/link';
import { DokzProvider, GithubLink, DokzBlogProvider, ColorModeSwitch } from 'dokz';
import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react';

import '../styles/tailwind.css';

const MyApp = ({ Component, pageProps }) => {
  const { pathname } = useRouter();

  if (pathname.startsWith('/blog')) {
    return (
      <ChakraProvider resetCSS>
        <DokzBlogProvider
          blogRootPath='pages/blog'
          headerLogo={
            <img
              src='/img/logo.png'
              style={{ opacity: 1 }}
              width='50px'
              height='50px'
            />
          }
          headTitlePrefix='Chroma Minecraft Blog - '
          headerItems={[
            <Link href='/docs'>Docs</Link>,
          ]}
          sidebarOrdering={{
            'index.mdx': true,
          }}>
          <Component {...pageProps} />
        </DokzBlogProvider>
      </ChakraProvider>
    );
  }

  if (pathname.startsWith('/docs')) {
    return (
      <ChakraProvider resetCSS>
        <DokzProvider
          animate
          docsRootPath="pages/docs"
          githubUrl='ChromaMinecraft/chroma-minecraft-frontend'
          branch='master'
          headTitlePrefix='Chroma Minecraft Docs - '
          headerLogo={
            <img
              src='/img/logo.png'
              style={{ opacity: 1 }}
              width='50px'
              height='50px'
            />
          }
          headerItems={[
            <Link href='/blog'>Blog</Link>,
            <ColorModeSwitch key='1' />,
          ]}
          sidebarOrdering={{
            'index.mdx': true,
            docs: {
              'index.mdx': true,
              rules: true,
              tutorial: true,
              'change log': {
                'version-1': true
              },
            }
          }}>
          <Component {...pageProps} />
        </DokzProvider>
      </ChakraProvider>
    );
  }

  return <Component {...pageProps} />;
};

export default MyApp;
