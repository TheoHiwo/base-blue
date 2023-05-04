import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, IconButton, useColorModeValue } from "@chakra-ui/react";

export default function HamburgerButton({ isOpen, onOpen, onClose }) {
  const haf = {
    bg: useColorModeValue("brand.300", "brand.700"),
    color: useColorModeValue("brand.100", "brand.200"),
  };
  return (
    <Box onClick={isOpen ? onClose : onOpen}>
      <IconButton
        size={"md"}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label={"Open Menu"}
        display={{ md: "none" }}
        justifySelf={{ base: "flex-start" }}
        
        rounded={"md"}
        bg={useColorModeValue("brand.200", "brand.900")}
        color={useColorModeValue("brand.900", "brand.100")}
        _hover={haf}
        _focus={haf}
        _active={haf}
        p={2}
        m="0"
      />
    </Box>
  );
}
