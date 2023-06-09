import Hero from "@/components/Hero/Hero";
import Head from "next/head";
import MainSection from "@/components/MainSection/MainSection";
import getSeed from "@/data/getSeed";
import { getJson } from "@/data/query";

export let seedInit: number = getSeed();
export const SIZE_INIT = 2;
export const SIZE = 5;

const title = "BaseBlue";
const url = "https://react-three-next.vercel.app/";
const description = "A gallery of blue art";
const author = "Theo Berraboukh";

export default function HomePage({ data }) {
  return (
    <>
      <Head>
        <title>BaseBlue</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Recommended Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="language" content="english" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="author" content={author} />
        <meta name="designer" content={author} />
        <meta name="publisher" content={author} />

        {/* Search Engine Optimization Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Blue, Art" />
        <meta name="robots" content="index,follow" />
        <meta name="distribution" content="web" />
        {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="site" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={"/android-chrome-512x512.png"} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" color="#000000" href="/favicon.ico" />

        {/* Meta Tags for HTML pages on Mobile */}
        {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1.0" />
        <meta name="theme-color" content="#000" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="favicon.ico" />

        {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@HiwoTheo" />
      </Head>
      <Hero />
      {data && <MainSection data={data} />}
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
