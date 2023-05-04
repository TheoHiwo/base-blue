import { HStack } from "@chakra-ui/react";
import React from "react";
import NavbarLinks from "./NavbarLinks";

export default function FullNavBarLinks() {
  return (
    <HStack
      as={"nav"}
      display={{ base: "none", md: "flex" }}
      justifyContent="space-between"
      maxWidth={{md: '80%', '2xl': '50%'}}
      // maxWidth={'0%'}
    >
      <NavbarLinks />
    </HStack>
  );
}
