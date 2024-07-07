import { Head, Html, Main, NextScript } from 'next/document';
import { ColorSchemeScript } from '@mantine/core';

import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript defaultColorScheme="dark" />
        <title>tanzak</title>
        <meta name="description" content="tanzakで短冊を投げよう" />
        {/* make it 50% smaller on smartphone */}
        <meta name="viewport" content="width=device-width, initial-scale=0.5" />
        {/* og image */}
        <meta property="og:image" content="https://tanzak.vercel.app/ogimage.png" />
        <meta property="og:title" content="tanzak" />
        <meta property="og:description" content="tanzakで短冊を投げよう" />
        <meta property="og:url" content="https://tanzak.vercel.app" />
        <meta property="og:type" content="website" />
        {/* twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@eutrilo" />
        <meta name="twitter:creator" content="@eutrilo" />
        <meta name="twitter:title" content="tanzak" />
        <meta name="twitter:description" content="tanzakで短冊を投げよう" />
        <meta name="twitter:image" content="https://tanzak.vercel.app/ogimage.png" />
        
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