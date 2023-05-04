import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

const TextDetail = ({ children }) => {
  return (
    <Flex direction="column" >
      <Text fontWeight={"bold"}>{children[0]}: </Text>
      <Text>{children[1]}</Text>
    </Flex>
  );
};

export default function Details({ data }) {
  const {
    id,
    date_display,
    title,
    alt_titles,
    artist_title,
    artist_display,
    place_of_origin,
    dimensions,
    medium_display,
    thumbnail,
    artwork_type_title,
  } = data;

  const [isAccordionExpanded, setIsAccordionExpanded] = useState(false);

  const accordionColor = isAccordionExpanded
    ? "brand.action"
    : useColorModeValue("gray.100", "gray.100");

  const hoverBorderColorProps = {
    color: !isAccordionExpanded ? "brand.action" : undefined,
    borderLeftColor: 'brand.action',
    
  };
  const hoverColorProps = {
    color: !isAccordionExpanded ? "brand.action" : accordionColor,
    
  };


  function handleAccordionExpended(expandedIndex) {
    const setBoolean = expandedIndex.length === 1 ? true : false;
    setIsAccordionExpanded(setBoolean);
  }

  return (
    <Accordion
      allowMultiple
      m="0"
      // mt="2rem"
      
      borderBottomColor={"transparent"}
      borderTopColor={"transparent"}
      borderLeftColor={accordionColor}
      borderLeftWidth={".2rem"}
      _focus={hoverBorderColorProps}
      _active={hoverBorderColorProps}
      _hover={hoverBorderColorProps}
      onChange={handleAccordionExpended}
    >
      <AccordionItem m="0">
          <AccordionButton
            p={0}
            pr="1rem"
            py="0.75rem"
            // color={accordionColor}
            _active={hoverColorProps}
            _hover={hoverColorProps}
          >
            <Box as="span" flex="1" textAlign="left" pl='2rem' fontSize={22} fontWeight='bold'>
              Details
            </Box>
            <AccordionIcon />
          </AccordionButton>
        <AccordionPanel m="0" p="0" pl='2rem'>
          <Flex direction="column" gap="1.2rem" py="1.55rem" >
            {date_display && <TextDetail>{["Date", date_display]}</TextDetail>}
            {(title || alt_titles) && (
              <TextDetail>{["Description", thumbnail.alt_text]}</TextDetail>
            )}
            {(artist_display || artist_title) && (
              <TextDetail>
                {[
                  "Artist",
                  (artist_display ? artist_display : artist_title) +
                    " " +
                    place_of_origin,
                ]}
              </TextDetail>
            )}{" "}
            {medium_display && <TextDetail>{["Medium", medium_display]}</TextDetail>}
            {dimensions && <TextDetail>{["Dimensions", dimensions]}</TextDetail>}
            {artwork_type_title && (
              <TextDetail>{["Artwork type", artwork_type_title]}</TextDetail>
            )}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
