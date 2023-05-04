import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue("brand.200", "brand.900")}
      color={useColorModeValue("brand.900", "brand.200")}
      borderTopWidth={".2rem"}
      borderTopColor={useColorModeValue("brand.800", "brand.100")}
      // position='absolute'
      // top='auto'
      // bottom='0'
      w='100%'
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        px={{ base: 0, md: '15%', lg: '15%', xl: '10%', '2xl': '0%' }}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2023 All rights reserved</Text>
        <Stack direction={"row"} spacing={6} >
          <SocialButton label={"Twitter"} href={"https://twitter.com/HiwoTheo"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"https://www.instagram.com/theo_berraboukh/"}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
