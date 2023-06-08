import { Box, Input, useColorModeValue, Text } from "@chakra-ui/react";
import { useAnimationControls, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import MotionBox from "../Motion/MotionBox";

export default function SearchInput({ query, handleChange }) {

  

  const bgInputFocus = useColorModeValue("brand.150", "brand.800");
  const bgInput = useColorModeValue("brand.100", "brand.900");

  const focus = {
    bg: bgInputFocus,
    opacity: 0.7,
  };

  return (
    <>
      <Input
        value={query}
        onChange={(e) => {
          handleChange(e);
        }}
        placeholder="Search blue art"
        type="search"
        variant="filled"
        focusBorderColor="brand.950"
        rounded={'full'}
        paddingX={5}
        paddingY={5}
        width='100%'
        paddingLeft='2rem'
        h="100%"
        // width={placeHolderWidth}
        textAlign='center'
        bg={bgInput}
        color="brand.action"
        fontFamily={"Space Grotesk, sans-serif"}
        fontSize={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
        fontWeight="bold"
        letterSpacing={".1rem"}
        _placeholder={{ color: "brand.action", opacity: 1 }}
        _hover={focus}
        _focus={focus}
        // _active={focus}
        // _selected={focus}
        
      />

    </>
  );
}
