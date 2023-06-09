import {
  AspectRatio,
  AspectRatioProps,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  IconProps,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import "@fontsource/space-grotesk";
import Hokusai from "public/images/Tsunami_by_hokusai.jpg"
import Image from "next/image";
import { useSpring } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
export default function CallToActionWithIllustration() {
  const spring = useSpring(0, { stiffness: 700, damping: 100 });

  useLayoutEffect(() => {
    spring.onChange((latest) => {
      window.scrollTo(0, latest);
    });
  }, [spring]);

  function handleClickScroll(e) {
    spring.set(window.pageYOffset, false);
    const goToElement = e.target.name;
    const to = document.getElementById(goToElement).offsetTop;
    setTimeout(() => {
      spring.set(to);
    }, 50);
  }

  return (
    <Container maxWidth={[
      "95%",
      "95%",
      "70%",
      "60%",
      "50%",
    ]}
    pb='2rem'>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Explore a Stunning Online Gallery of Artworks in{" "}
          <Text as={"span"} color={"brand.action"}>
            Shades of Blue
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Immerse Yourself in Shades of Blue: Discover Art that Inspires and Calms.
        </Text>
        <Stack spacing={6} direction={"row"}>
          {/* <Link as={NextLink} href={"#search-art"} style={{ textDecoration: 'none' }}> */}
          <Button
            name="get-started"
            rounded={"full"}
            px={6}
            colorScheme={"brand"}
            bg={"brand.action"}
            textDecoration="none"
            _hover={{ bg: "brand.500", textDecoration: "none" }}
            onClick={handleClickScroll}
          >
            Get started
          </Button>
          {/* </Link> */}
          <Link as={NextLink} href={"/about"} style={{ textDecoration: "none" }}>
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"Gray"}
              bg={useColorModeValue("gray.400", "gray.600")}
            >
              Learn more
            </Button>
          </Link>
        </Stack>
          <HokusaiImg />
      </Stack>
    </Container>
  );
}

export const Illustration = (props: IconProps) => {
  return (
    <Icon
      width="100%"
      viewBox="0 0 702 448"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    ></Icon>
  );
};

const HokusaiImg = (props: AspectRatioProps) => (
  <>
    <Stack w={'100%'}>
      <AspectRatio ratio={1071 / 720} position={"relative"} {...props}>
        <Box rounded="md">
          <Image
            src={Hokusai}
            alt="The Great Wave off Kanagawa, Katsushika Hokusai, 1831"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            sizes="100%"
            fill
            priority
          />
        </Box>
      </AspectRatio>
      <Text opacity="0.5" fontSize="1.2rem" alignSelf='center'>
      The Great Wave off Kanagawa, Katsushika Hokusai, 1831
      </Text>
    </Stack>
  </>
);

