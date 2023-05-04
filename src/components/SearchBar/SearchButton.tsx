import { SearchIcon } from "@chakra-ui/icons";
import { IconButton, useColorModeValue } from "@chakra-ui/react";

export default function SearchButton({ isFetching }) {
  return (
    <IconButton
      pointerEvents="auto"
      type="submit"
      isLoading={isFetching}
      aria-label="Search database"
      icon={<SearchIcon />}
      position="absolute"
      marginY={"auto"}
      top="0"
      bottom="0"
      left="0"
      fontSize='1.5rem'
      color='brand.action'
      pr={"1.75rem"}
      pl={"1.75rem"}
      bg="transparent"
      _hover={{ bg: "transparent", opacity: 0.8 }}
    />
  );
}
