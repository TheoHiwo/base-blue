import { Box, Center, Flex, Input, Text, VStack } from "@chakra-ui/react";

import { useFormik } from "formik";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

//React component for the search bar
const SearchBar = ({
  handleChange,
  query,
  errorM,
  getPostsFromSearch,
  getPostsFromSlider,
  isFetching,
}) => {
  const ErrorMessage = () => {
    if (errorM) {
      return <Text color='red.400'>{errorM}</Text>;
    }
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        getPostsFromSearch();
      }}
      style={{ width: "100%", textAlign: "center" }}
      id="get-started"
    >
      <Flex justifyContent="center" alignItems="center">
        <Flex
          justifyContent={"center"}
          alignItems="center"
          position="relative"
          width={{ base: "90%", md: "50%" }}
        >
          <SearchInput query={query} handleChange={handleChange} />
          <SearchButton isFetching={isFetching} />
        </Flex>
      </Flex>
      <ErrorMessage/>
    </form>
  );
};

export default SearchBar;
