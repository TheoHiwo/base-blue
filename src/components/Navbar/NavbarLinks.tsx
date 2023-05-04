import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Link,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import NavLink from "./NavLink";
import { BsHeartFill } from "react-icons/bs";

export default function NavbarLinks() {
  const Links = ["Home", "About"];
  // const Links = ["Home", "About", "Contact"];
  const { colorMode, toggleColorMode } = useColorMode();

  const labelDonate = "Donate to the Art Institute of Chicago";
  return (
    <>
      {Links.map((link) => (
        <NavLink key={link} link={link}>
          {link}
        </NavLink>
      ))}
      <IconButton
        aria-label="Toggle Dark Mode Button"
        onClick={toggleColorMode}
        // bg={useColorModeValue("brand.100", "brand.900")}
        // color={useColorModeValue("brand.600", "brand.300")}
        _hover={{
          bg:"brand.500",
        }}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        variant='ghost'
      />
      <Tooltip label={labelDonate} colorScheme="brand">
        <Link href="https://sales.artic.edu/donate" target={"_blank"}>
          <IconButton
            aria-label={labelDonate}
            colorScheme={"pink"}
            icon={<BsHeartFill />}
            variant='ghost'
          />
        </Link>
      </Tooltip>
    </>
  );
}
