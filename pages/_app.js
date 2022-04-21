import Router from "next/router";
import Head from "next/head";
import Nprogress from "nprogress";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>

        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
}

export default MyApp
