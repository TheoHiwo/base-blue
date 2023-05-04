import { useColorModeValue, Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function BrandButton({ isLinkActive }) {
  return (
    <Box  >
      <Link
        as={NextLink}
        href={`/`}
        fontSize="2rem"
        fontWeight="600"
        mt={-2}
        p={0}
        bg={"none"}
        color="brand.action"
        _hover={{
          color: isLinkActive
            ? "brand.action"
            : useColorModeValue("brand.actionLight", "brand.actionLight"),
        }}
        _active={{   bg: 'transparent' }}
      >
        baseBlue
      </Link>
    </Box>
  );
}
