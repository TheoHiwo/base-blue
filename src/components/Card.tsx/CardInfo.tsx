import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Details from "./Details";

export default function CardInfo({ data, isExpanded, setIsExpanded }): JSX.Element {
  const { id, title, alt_titles, date_display, thumbnail, colorfulness, color } = data;

  const h1FontSize = 28;

  return (
    <Box
      width={"full"}
      // px={{ base: "1.7rem", md: "2.2rem" }}
    >
        <Link href={`https://api.artic.edu/api/v1/artworks/${id}?`} target='_blank'>ID: {id}</Link>
      <Text>
      colorfulness {colorfulness}
      </Text>
      <Text>
      percentage{color.percentage}
      </Text>
      <Text>
      population{color.population}
      </Text>
      {(title || thumbnail.alt_text) && (
        <Text fontSize={28} fontWeight="bold" lineHeight={10} letterSpacing={1.25} py={{ base: "1.2rem", md: "2rem" }}>
          {title ? title : alt_titles ? alt_titles : thumbnail.alt_text}
        </Text>
      )}
      <Details data={data} />
    </Box>
  );
}
