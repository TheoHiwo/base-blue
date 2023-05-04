// 1. Import `extendTheme`
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

// Component style overrides
import fonts from "./fonts";

import "@fontsource/gowun-dodum";
import brand from "./brand";
import components from './components';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  components,
  colors: {
    brand,
  },
  fonts,
  styles,
  config,
});
