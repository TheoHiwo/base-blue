import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Center, useColorModeValue } from "@chakra-ui/react";
import ScrollToTop from "react-scroll-up";

export default function ScrollTopButton() {
  const arrowColor = useColorModeValue("brand.800", "brand.100");
  const arrowBgColor = useColorModeValue("brand.100", "brand.800");

  return (
      <ScrollToTop
        showUnder={100}
        easing="easeOutBack"
        duration={200}
        // onShow={() => console.log("show")}}
        // onHide={() => console.log("show")}}
        style={{
          position: "fixed",
          bottom: "3%",
          right: "5%",
          opacity: 0.6,
          rounded: "full",
          cursor: "pointer",
          transitionDuration: "0.2s",
          transitionTimingFunction: "linear",
          transitionDelay: "0s",
          // zindex: 1000,
        }}
      >
        <Center
          maxWidth={"4rem"}
          maxHeight="4rem"
          rounded={"full"}
          border={".2rem solid"}
          bg={arrowBgColor}
          borderColor={arrowColor}
          color={arrowColor}
          _hover={{ borderColor: "brand.action", color: "brand.action" }}
          _active={{
            borderColor: "brand.action",
            color: "brand.action",
            opacity: "0.5",
            bg: "transparent",
          }}
        >
          <ArrowUpIcon rounded={"full"} boxSize={{base:'1.5rem', md:'1.5rem', lg:'2rem'}} m={{base:'.25rem', md:'.5rem', lg:'.8rem'}}/>
        </Center>
      </ScrollToTop>
  );
}
