import { RepeatIcon } from "@chakra-ui/icons";
import { Flex, IconButton, useColorModeValue } from "@chakra-ui/react";

export default function ResetButton({
    isFetching,
    resetSlider,
  }: {
    isFetching: boolean;
    resetSlider: () => void;
  }) {
    return (
      <Flex flexGrow={1} justifyContent='flex-end'>
        <IconButton
          pointerEvents="auto"
          type="button"
          isLoading={isFetching}
          aria-label="Reset search"
          onClick={resetSlider}
          icon={<RepeatIcon />}
          color={useColorModeValue("brand.400", "brand.100")}
          size={"1em"}
          bg="transparent"
          _hover={{ bg: "transparent", color: "brand.action" }}
          _active={{ bg: "transparent" }}
          _focus={{ bg: "transparent" }}
          
        />
      </Flex>
    );
  }