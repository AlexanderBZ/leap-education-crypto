import "../styles/globals.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/700.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../utils/gtag";
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
      {/* website head  */}
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
