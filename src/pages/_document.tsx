import { Head, Html, Main, NextScript } from 'next/document';
import { ColorSchemeScript } from '@mantine/core';

import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </Head>

      <body>
        <div className="starry-sky" id="sky">
          <Main />
          <NextScript />
        </div>

        <Script src="/starry-sky.js" strategy="beforeInteractive" />
      </body>
    </Html >
  );
}