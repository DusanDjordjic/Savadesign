import "../styles/globals/globals.scss";
import "../styles/globals/vars.scss";
import Layout from "../components/layout/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
