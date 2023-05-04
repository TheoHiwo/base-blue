import { Box, Flex, useColorModeValue, Text, AspectRatio } from "@chakra-ui/react";
import react from "react";
import "@fontsource/space-grotesk";
import Image from "next/image";
import SearchBar from "../SearchBar/SearchBar";

export default function Header({
  handleSearchInputChange,
  query,
  getPostsFromSearch,
  getPostsFromSlider,
  isFetching,
}) {
  return (
    <Flex
      minHeight="calc(100vh - 6rem)"
      direction={"column"}
      justifyContent="center"
      alignItems="center"
      px="1rem"
      flex="1 1 auto"
    >
      <Flex direction={{ base: 'column', md: 'row'}}>
        <Flex direction="column"
        minWidth={{ base: '100%', md: '60%'}}>
          <Title />
          <SearchBar
            handleChange={handleSearchInputChange}
            query={query}
            getPostsFromSearch={getPostsFromSearch}
            getPostsFromSlider={getPostsFromSlider}
            isFetching={isFetching}
          />
        </Flex>
        <MonetImg />
      </Flex>
    </Flex>
  );
}

const Title = () => {
  return (
    <Flex
      //   direction="column"
      //   justifyContent="start"
      //   alignItems="start"
      fontFamily={"Space Grotesk, sans-serif"}
      fontSize="3rem"
      fontWeight="bold"
      letterSpacing={".1rem"}
      color={useColorModeValue("brand.950", "brand.50")}
      
    >
      <Text>
        Explore a Stunning  Gallery of Artworks in
      </Text>
    </Flex>
  );
};

const HeaderSpan = () => (
  <Text as="span" color="brand.action">
    Shades of Blue
  </Text>
);

const MonetImg = () => (
  <>
    <AspectRatio w="100%" ratio={1 / 1} position={"relative"}>
      <Box rounded="md">
        <Image
          src={"/../public/images/Water_Lilies.jpg"}
          alt=""
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          sizes="100%"
          fill
        />
      </Box>
    </AspectRatio>
  </>
);
