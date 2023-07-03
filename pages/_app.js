import "@/styles/globals.scss";
import Head from "next/head";
import Layout from "./context/Layout";
import { UserDataProvider } from "./context/UserData";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Anime</title>
        <meta name="description" content="anime" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Anime.ico" />
      </Head>
      <Layout>
        <UserDataProvider>
        <Component {...pageProps} />
        </UserDataProvider>
      </Layout>
    </>
  );
}
