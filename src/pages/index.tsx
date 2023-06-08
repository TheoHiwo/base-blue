import Hero from "@/components/Hero/Hero";
import Head from 'next/head'
import MainSection from "@/components/MainSection/MainSection";
import getSeed from "@/data/getSeed";
import { getJson } from "@/data/query";

export let seedInit: number = getSeed();
export const SIZE_INIT = 2;
export const SIZE = 5;

export default function HomePage({ data }) {
  return (
    <>
    <Head>
        <title>BaseBlue</title>
        <meta name="description" content="Gallery of blue Art" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Hero />
      <MainSection data={data} />
    </>
  );
}

export const getStaticProps = async () => {
  // seedInit = 10;
  const data = await getJson(SIZE_INIT, 0, seedInit, "", []);
  //todo seedInit in props
  return {
    props: { data },
  };
};
