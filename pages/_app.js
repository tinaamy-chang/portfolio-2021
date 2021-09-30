import { createGlobalStyle } from "styled-components";
import Theme from "/components/theme";
import SimpleReactLightbox from "simple-react-lightbox";
import Head from "next/head";
import { Normalize } from "styled-normalize";
import { AnimatePresence, motion } from "framer-motion";
import { Router } from "@material-ui/icons";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
  }

  body {
    margin: 0;
    font-family: 'Poppins', 'Helvetica', 'Arial', sans-serif;
    color: white;
    font-weight: 400;
    min-height: 100vh;
    background: linear-gradient(
      170deg,
      ${(props) => props.theme.colors.bgGradTop} 22%,
      ${(props) => props.theme.colors.bgGradBottom} 83%
    ) no-repeat;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    transition: background-color 1s;
    

    @media (max-width: 800px) {
      align-items: flex-start;
      padding: 0;
    }
  }

 ul {
    padding-inline-start: 30px;

    @media (max-width: 800px) {
      padding: 10px 20px;
    }
  }

  ul > li {
    list-style-type: circle;
    line-height: 1.5;
    text-shadow: -1px 1px ${(props) => props.theme.colors.textShadow};
  }


  div#__next,
      div#__next > div
      {
        
        margin: 40px 0;
        color: white;
        letter-spacing: 0.25px;
        font-weight: 300;
        box-sizing: border-box;
        width: 100%;
        max-width: 1200px;


        @media (max-width: 1500px) {
        margin: 40px 0;
        }
        @media (max-width: 800px) {
        padding: 10px;
        margin:0;
        }
      } 

  p {
    line-height: 1.5;
    text-shadow: -1px 1px ${(props) => props.theme.colors.textShadow};
  }

  p > strong, ul > li > strong{
    font-weight: 600;
  } 
`;

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Tina Chang</title>
      </Head>
      <Theme>
        <GlobalStyle />
        <Normalize />
        <SimpleReactLightbox>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              initial="initial"
              animate="animate"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              key={router.route}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </SimpleReactLightbox>
      </Theme>
    </>
  );
}

export default MyApp;
