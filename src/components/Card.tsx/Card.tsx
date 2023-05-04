import { Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import MotionBox from "../Motion/MotionBox";
import CardInfo from "./CardInfo";

const CardItem = ({ data, iiif_url, index }) => {
  const { image_id, alt_text } = data;
  const imageSize = "843";

  const imageUrl = `${iiif_url}/${image_id}/full/${imageSize},/0/default.jpg`;
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;
  const bgColorEven = useColorModeValue("brand.50", "brand.950");
  const bgColorOdd = useColorModeValue("brand.100", "brand.900");
  const bgColor = isEven ? bgColorEven : bgColorOdd;
  return (
    image_id && (
      <>
        <MotionBox
          initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          key={image_id}
          display="flex"
          background={bgColor}
          // width="100vw"
          justifyContent="center"
          alignItems="center"
          overflow={"hidden"}
          py={{ base: "4rem", md: "7rem" }}
        >
          <Flex
            maxWidth={["95%", "95%", "70%", "60%", "50%"]}
            direction="column"
            overflow={"hidden"}
            display={"flex"}
            width={"100%"}
            align="center"
            alignSelf={"center"}
          >
            <Image
              src={imageUrl}
              alt={alt_text}
              boxShadow="base"
              align="center"
              w="100%"
            />
            <CardInfo data={data} isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
          </Flex>
        </MotionBox>
      </>
    )
  );
};
export default CardItem;
