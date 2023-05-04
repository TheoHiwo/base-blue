import useComponentVisible from "@/hooks/useComponentVisible";
import { Box, Container, Stack, useColorModeValue } from "@chakra-ui/react";
import NavbarLinks from "./NavbarLinks";

export default function DropDown({ onClose, router }) {
  const rgbaValue: string = useColorModeValue(
    "rgba(0, 0, 0, 0.8)",
    "rgba(255, 255, 255, 0.3)"
  );
  return (
    <Box
      pb={4}
      display={{ md: "none" }}
      position="absolute"
      top={"6rem"}
      zIndex={"1000"}
      background={useColorModeValue("brand.50", "brand.950")}
      opacity={0.95}
      right="0"
      padding="1rem"
      width={"full"}
      borderBottomWidth=".25rem"
      borderBottomColor={"brand.400"}
      boxShadow={"0px .7em 1.4em -.8em " + rgbaValue}
    >
      <Container
        maxWidth={"70%"}
        // pb="1em"
      >
        <Stack as={"nav"} spacing={4} textAlign="center">
          <NavbarLinks />
        </Stack>
      </Container>
    </Box>
  );
}
