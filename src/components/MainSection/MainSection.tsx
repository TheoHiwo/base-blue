import Cards from "@/components/Cards/Cards";
import "@fontsource/lora";
import { useCallback, useEffect, useMemo, useState } from "react";

import SearchBar from "@/components/SearchBar/SearchBar";
import getSeed from "@/data/getSeed";
import { getJson } from "@/data/query";
import { seedInit, SIZE, SIZE_INIT } from "@/pages";

export default function MainSection({ data }) {
  const [seedCards, setSeedCards] = useState<number>(seedInit);
  const [isFetching, setIsFetching] = useState(false);
  const [size, setSize] = useState(SIZE);
  const [from, setFrom] = useState(SIZE_INIT);
  // data.data for data: { pagination: {}, config: {}, data: {each art posts} }
  const [posts, setPosts] = useState(data.data);
  const [totalPosts, setTotalPosts] = useState(data.pagination.total);
  const [query, setQuery] = useState("");
  // can be used after the search, even if the input query is edited
  const [queryStored, setQueryStored] = useState("");
  const [errorM, setErrorM] = useState("");

  useEffect(() => {
    const regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\u00E0-\u00FC ]*$/;
    // const regex = /^[a-zA-Z0-9 ]*$/  // only english letters
     if (query.match(regex)) {
      setErrorM("");
    } else {
      setErrorM("Only Roman letters are allowed");
    }
  }, [query]);

  useEffect(() => {
    setSeedCards(getSeed());
  }, []);

  const handleSearchInputChange = (e) => {
    setQuery(e.target.value);
  };

  const resetPosts = () => {
    setFrom(SIZE_INIT);
    setPosts([]);
  };

  const fetchData = async (params: {
    size: number;
    from: number;
    seedCards: number;
    q: string;
    accuracy?: number;
  }) => {
    resetPosts();

    try {
      setIsFetching(true);
      const dataFromSearch = await getJson(
        params.size,
        params.from,
        params.seedCards,
        params.q,
        posts,
        params.accuracy
      );
      setPosts(dataFromSearch.data);
      setTotalPosts(dataFromSearch.pagination.total);
      setIsFetching(false);
    } catch (error) {
      setIsFetching(false);
      console.log(error);
    }
  };

  const getPostsFromSearch = async () => {
    setQueryStored(query);
    await fetchData({ size: SIZE_INIT, from: 0, seedCards: seedInit, q: query });
  };

  const getPostsFromSlider = async (accuracy: number) => {
    await fetchData({
      size: SIZE_INIT,
      from: 0,
      seedCards: seedCards,
      q: queryStored,
      accuracy: accuracy,
    });
  };

  const getPosts = useCallback(async () => {
    try {
      setIsFetching(true);
      const newPosts = await getJson(size, from, seedCards, queryStored, posts);
      setPosts((prevPosts) => [...prevPosts, ...newPosts.data]);
      setFrom((prevFrom) => prevFrom + size);
      setIsFetching(false);
    } catch (error) {
      setIsFetching(false);
      console.log(error);
    }
  }, [size, from, seedCards, queryStored]);

  return (
    <>
      <SearchBar
        handleChange={handleSearchInputChange}
        query={query}
        errorM={errorM}
        getPostsFromSearch={getPostsFromSearch}
        getPostsFromSlider={getPostsFromSlider}
        isFetching={isFetching}
      />
      <Cards
        totalPosts={totalPosts}
        iiif_url={data.config.iiif_url}
        posts={posts}
        getPosts={getPosts}
        isFetching={isFetching}
      />
    </>
  );
}
