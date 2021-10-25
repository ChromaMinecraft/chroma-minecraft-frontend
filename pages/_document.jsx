import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
              `,
            }}
          />
          <title>Chroma Minecraft</title>
          <meta charSet='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta
            property='og:title'
            content='Chroma Minecraft'
            key='meta-title'
          />
          <meta
            property='og:description'
            content='Server minecraft yang mendukung berbagai platform (Java / Bedrock / Pocket Edition).'
            key='meta-description'
          />
          <meta property='og:image' content='/img/logo.png' />
          <meta property='og:locale' content='id_ID' key='meta-locale' />
          <meta property='og:url' content='https://mc.chroma-gaming.xyz/' />
          <meta
            property='og:locale:alternate'
            content='en_US'
            key='meta-locale-alt'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
