import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />

      <link rel="manifest" href="/manifest.json" />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/icon512_maskable.png"
      />
      <link rel="apple-touch-icon" sizes="512x512" href="icon512_rounded.png" />
      <meta name="theme-color" content="#8936FF" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
