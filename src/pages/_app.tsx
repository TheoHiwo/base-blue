import Layout from "../components/Layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "../chakra/theme";
import { AnimatePresence, motion, Variants } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {

  const variants: Variants = {
    initialState: { opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' },
    animateState: { opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' },
    exitState: { clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' },
  };
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.asPath}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{ duration: 0.75 }}
        variants={variants}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </motion.div>
      </AnimatePresence>
    </ChakraProvider>
  );
}
