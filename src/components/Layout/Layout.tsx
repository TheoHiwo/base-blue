import React from "react";
import Navbar from "../Navbar/Navbar";
import {
  Container,
  ScaleFade,
  useDisclosure,
} from "@chakra-ui/react";
import ScrollTopButton from "../utils/ScrollTopButton";
import Footer from "../Footer/Footer";
import {
  motion,
  Variant,
  Variants,
} from "framer-motion";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({
  children,
}) => {
  const router = useRouter();

  return (
    <>
      <Container
        maxWidth={[
          "95%",
          "95%",
          "70%",
          "60%",
          "50%",
        ]}
      >
        <Navbar />
      </Container>
      <main>{children}</main>

      <ScrollTopButton />
      <Footer />
    </>
  );
};

export default Layout;
