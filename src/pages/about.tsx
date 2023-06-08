import MotionBox from "@/components/Motion/MotionBox";
import {
  AspectRatio, Box,
  Container,
  Heading, Link, Stack, Text, VStack
} from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Monet from "public/images/Water_Lilies.jpg";

const MonetImg = () => (
  <>
  <Stack w="100%" >
    <AspectRatio ratio={1071 / 720} position={"relative"}>
      <Box rounded="md">
        <Image
          src={Monet}
          alt="Water Lilies, Claude Monet, 1906"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          sizes="100%"
          fill
        />
      </Box>
    </AspectRatio>
    <Text opacity="0.5" fontSize="1.2rem" alignSelf={'center'}>
        Water Lilies, Claude Monet, 1906
    </Text> 
    </Stack>
  </>
);


export default function About() {
  const { scrollYProgress } = useScroll();
  const apiArtLink = "https://api.artic.edu/docs/#introduction";
  
  return (
    <>
      <Container maxWidth={["95%", "95%", "70%", "60%", "50%"]}>
        <VStack alignItems={"start"} fontSize={22} gap={9} my="20">
          <Heading as="span" fontSize="52" alignSelf='center'>
            Welcome to a gallery of{" "}
            <Box as="span" color={"brand.action"}>
              <Link href="/">blue Art</Link>
            </Box>
          </Heading>
          <MonetImg />

          <Text>
          Passionate about art, I have come to create a platform that celebrates the beauty and versatility of the color blue. I aim to showcase a diverse range of artworks exploring this beautiful color's many shades and moods.
          </Text>

          <Text>
            At this gallery, you will find a curated collection of paintings in the public
            domain from the{" "}
            <Link color="brand.action" href={apiArtLink}>
              Art Institute of Chicago's API
            </Link>
            , united by their use of blue as a dominant or prominent color. In addition,
            this collection features artworks by established artists whose contributions
            to the art world have stood the test of time, each with its unique style and
            interpretation of the color blue. These artists have created timeless
            masterpieces that continue to inspire and captivate audiences today. In
            addition to their works, these artists have also profoundly influenced other
            artists, shaping the course of art history and impacting future generations of
            creatives.

          </Text>

          <Text>
            Art has the power to inspire, uplift, and transform, and my mission is to
            bring this transformative power to as many people as possible. So, whether you
            are an art collector, a casual admirer, or simply curious about the color
            blue, I invite you to explore this gallery and discover the beauty and wonder
            of this captivating hue.
          </Text>
          <Text>
            I believe that art should be accessible to everyone, regardless of their
            background or experience. I hope this collection inspires you to appreciate
            the world's rich cultural heritage.
          </Text>
          <Text>
            Thank you for visiting this gallery. I hope you enjoy your experience and
            discover something new and inspiring. If you have any questions or comments,
            please do not hesitate to{" "}
            <Link color="brand.action" href={"https://twitter.com/HiwoTheo"} target={'_blank'}>
              contact me
            </Link>
            . <br /> <br /> I look forward to hearing from you!
          </Text>
        </VStack>
      </Container>
    </>
  );
}
