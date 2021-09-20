import Theme from "/components/theme";
import SimpleReactLightbox from "simple-react-lightbox";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon_fish.svg" />
      </Head>
      <Theme>
        <SimpleReactLightbox>
          <Component {...pageProps} />
        </SimpleReactLightbox>
      </Theme>
    </>
  );
}

export default MyApp;
