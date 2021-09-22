import { createGlobalStyle } from "styled-components";
import Theme from "/components/theme";
import SimpleReactLightbox from "simple-react-lightbox";
import Head from "next/head";
import { Normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
  }

  body {
    margin: 0;
    font-family: 'Poppins', 'Helvetica', 'Arial', sans-serif;
    color: #4d4d4d;
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
  }


  div#__next,
      div#__next > div
      {
        margin: 50px 0;
        color: #4d4d4d;
        font-weight: 400;
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
  }

  p > strong, ul > li > strong{
    font-weight: 600;
  } 
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tina Chang</title>
      </Head>
      <Theme>
        <GlobalStyle />
        <Normalize />
        <SimpleReactLightbox>
          <Component {...pageProps} />
        </SimpleReactLightbox>
      </Theme>
    </>
  );
}

export default MyApp;
