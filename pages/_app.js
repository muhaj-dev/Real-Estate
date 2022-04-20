import Router from "next/router";
import Head from "next/head";
import Nprogress from "nprogress";

import Layout from "../components/Layout"
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
