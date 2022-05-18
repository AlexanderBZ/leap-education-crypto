import "../styles/globals.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/700.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../utils/gtag";
import Head from "next/head";
import Header from "../components/Header/Header";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  // see if the website is in production
  // const isProduction = process.env.NODE_ENV === "production";

  // if (isProduction) {
  //   const router = useRouter();
  //   useEffect(() => {
  //     const handleRouteChange = (url) => {
  //       gtag.pageview(url);
  //     };
  //     router.events.on("routeChangeComplete", handleRouteChange);
  //     return () => {
  //       router.events.off("routeChangeComplete", handleRouteChange);
  //     };
  //   }, [router.events]);
  // }

  return (
    <>
      <Head>
        <title>Leap Education</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content="leapeducation.org" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Leap Education" />
        <meta
          name="twitter:card"
          content="Collection of free curated resources on Web3"
        />
        <meta
          property="og:description"
          content="Collection of free curated resources on Web3"
        />
        <meta property="og:image" content={"/Cover.png"} />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
