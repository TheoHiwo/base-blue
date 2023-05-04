import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import {theme} from "../chakra/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body id="scrollableDiv">
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
