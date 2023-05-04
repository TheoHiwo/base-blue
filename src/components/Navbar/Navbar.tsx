import useComponentVisible from "@/hooks/useComponentVisible";
import { Box, Flex, Input, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import BrandButton from "./BrandButton";
import DropDown from "./DropDown";
import FullNavBarLinks from "./FullNavBarLinks";
import HamburgerButton from "./HamburgerButton";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { ref } = useComponentVisible(onClose);

  const router = useRouter();
  const isLinkActive = router.pathname === "/";

  useEffect(() => {
    onClose();
  }, [router.pathname]);
  const focus = {
    border: "none",
    boxShadow: "none",
    // bg: "none",
  };
  return (
    <>
      <Box ref={ref}>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          h="6rem"
          boxShadow="0px 10px 20px -15px rgba(0, 0, 0, 0.2)"
        >
          <BrandButton isLinkActive={isLinkActive} />

          <HamburgerButton isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

          <FullNavBarLinks />
        </Flex>

        {isOpen && <DropDown onClose={onClose} router={router} />}
      </Box>
    </>
  );
}
