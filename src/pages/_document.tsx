import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import {theme} from "../chakra/theme";

export default function Document() {
  return (
    <Html lang="en">
      {/* <Head /> */}
      <Head>
        {/* <title>BaseBlue</title> */}
        {/* <meta name="description" content="Gallery of blue Art" /> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/* <link rel="icon" href="/favicon-32x32.png" /> */}
      </Head>
      <body id="scrollableDiv">
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
