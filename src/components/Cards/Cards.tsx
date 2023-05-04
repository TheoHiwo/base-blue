import { Box, Center, Flex, Skeleton, SkeletonCircle, SkeletonText, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CardItem from "../Card.tsx/Card";

const Cards = ({ totalPosts, iiif_url, posts, getPosts, isFetching }) => {
  const [hasMore, setHasMore] = useState(true);
  const [postIndexReturned, setPostIndexReturned] = useState(0);

  useEffect(() => {
    if (posts.length >= totalPosts) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }
  }, [posts]);

  return !posts.length ? (
    isFetching ? (
      <Center w="auto" overflow={"hidden"} mb='50%'
      mt='2rem'>
        <Text >Searching for art</Text>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="brand.200"
          color="blue.500"
          label="Loading more arts"
          size="md"
          marginLeft='1em'
        />
      </Center>
    ) : (
      <Center w="auto" overflow={"hidden"} mb={5}>
        <Text >No art found</Text>
      </Center>
    )
  ) : (

    // !todo "No art found" and add a sad image

    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={() => getPosts()}
        hasMore={hasMore}
        loader={
          <>
            <Center w="auto" overflow={"hidden"} mb={5}>
              <Text mr={5}>Loading arts</Text>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="brand.300"
                color="blue.500"
                label="Loading more arts"
                size="md"
                marginTop='2rem'
                marginLeft='1em'
              />
            </Center>
          </>
        }
        endMessage={
          <Center w="auto" overflow={"hidden"} mb={5}>
            <Text mr={5}>No more art to show</Text>
          </Center>
        }
      >
        {posts.map((data, index) => {
          return <CardItem key={data.id} data={data} iiif_url={iiif_url} index={index} />;
        })}
      </InfiniteScroll>
    </>
  );
};

export default Cards;
