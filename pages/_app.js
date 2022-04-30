import Router from "next/router";
import Head from "next/head";
import Nprogress from "nprogress";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  Nprogress.configure({ showSpinner: false })

  Router.events.on('routeChangeStart', () => {
    Nprogress.start();
  })

  Router.events.on('routeChangeComplete', () => {
    Nprogress.done();
  })

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
