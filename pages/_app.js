import "../styles/globals.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/700.css";
import Header from "../components/Header/Header";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
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
