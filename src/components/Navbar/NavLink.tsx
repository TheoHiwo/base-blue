import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { NextRouter, useRouter } from "next/router";
import { ReactNode } from "react";

export default function NavLink({
  children,
  link,
}: {
  children: ReactNode;
  link: string;
}) {
  const linkLowerCase = link.toLowerCase();
  const href = linkLowerCase === "home" ? "/" : `/${linkLowerCase}`;

  const router = useRouter();
  const pathName = router.pathname;
  const isLinkActive = pathName === href;
  // const isLinkActive = true;

  const linkActiveTextColor = useColorModeValue("brand.100", "brand.100");
  const linkActiveBgColor = useColorModeValue("brand.action", "brand.action");

  const linkInactiveTextColor = useColorModeValue("brand.900", "brand.100");
  const linkInactiveBgColor = "transparent";

  const linkTextColor = isLinkActive ? linkActiveTextColor : linkInactiveTextColor;
  const linkBgColor = isLinkActive ? linkActiveBgColor : linkInactiveBgColor;

  const linkHoverActiveTextColor = "brand.100";
  const linkHoverInactiveTextColor = useColorModeValue("brand.action", "brand.action");
  const linkHoverTextColor = isLinkActive
    ? linkHoverActiveTextColor
    : linkHoverInactiveTextColor;

  return (
    <>
      <Link
        as={NextLink}
        href={href}
        px={"1.25rem"}
        py={"0.5rem"}
        rounded={15}
        fontWeight={"bold"}
        backgroundColor={linkBgColor}
        color={linkTextColor}
        _hover={{
          textDecoration: "none",
          color: linkHoverTextColor,
        }}
      >
        {children}
      </Link>
    </>
  );
}
