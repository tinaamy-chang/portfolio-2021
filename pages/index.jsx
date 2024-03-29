import Link from "next/link";
import { useThemeSetter } from "../components/theme";
import { motion } from "framer-motion";

import Layout, {
  HelloText,
  Header,
  BoxLeft,
  BoxRight,
  ModeButton,
  Profile,
  ProfileContainer,
  BoxContainer,
  BoxLeftRightContainer,
  HelloBox,
  BoxLeftContent,
  BoxRightContent,
  BoxRightBackground,
  Mobile,
  Desktop,
  ExploreImage,
  AboutP,
  AboutLinks,
  NoWrap,
} from "../components/layout";

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInDown = {
  initial: {
    y: -20,
    opacity: 0,
    transition: { duration: 0.3, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.35,
    },
  },
};
const firstStagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  const { toggleTheme, text } = useThemeSetter();

  return (
    <Layout>
      <ProfileContainer>
        <Profile />
        <Mobile>
          <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
            <HelloBox>
              <motion.div variants={fadeInDown}>
                <HelloText>
                  Hello!
                  <br /> I am Tina Amy Chang 🐟
                </HelloText>
              </motion.div>
              <ModeButton onClick={toggleTheme}>
                <NoWrap>{text}</NoWrap>
              </ModeButton>
            </HelloBox>
          </motion.div>
        </Mobile>
      </ProfileContainer>

      <BoxContainer>
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
          <Desktop>
            <motion.div>
              <HelloBox>
                <motion.div variants={fadeInDown}>
                  <HelloText>
                    Hello!
                    <br /> I am Tina Amy Chang 🐟
                  </HelloText>
                </motion.div>
                <motion.div variants={fadeInDown}>
                  <Desktop>
                    <motion.div
                      whileHover={{
                        scale: 1.01,
                      }}
                      whileTap={{ scale: 0.98 }}
                      style={{ marginTop: 5, marginBottom: 30 }}
                    >
                      <ModeButton onClick={toggleTheme}>
                        <NoWrap>{text}</NoWrap>
                      </ModeButton>
                    </motion.div>
                  </Desktop>
                </motion.div>
              </HelloBox>
            </motion.div>
          </Desktop>
          <BoxLeftRightContainer>
            <BoxLeft>
              <motion.div variants={stagger}>
                <BoxLeftContent>
                  <motion.div variants={fadeInDown}>
                    <Header>info</Header>
                  </motion.div>
                  <motion.div variants={fadeInDown}>
                    <AboutP>
                      🖥️&nbsp;&nbsp;Product/UI/UX
                      <br />
                      📦&nbsp;&nbsp;
                      <Link href="https://curant.io" passHref>
                        <AboutLinks aria-label="link to github" target="_blank">
                          Curant
                        </AboutLinks>
                      </Link>
                      <br />
                      📍&nbsp;&nbsp;Bay Area, California
                    </AboutP>
                    <AboutP>
                      📚&nbsp;&nbsp;VisCom Design
                      <br />
                      🏫&nbsp;&nbsp;SFSU 2019
                    </AboutP>
                    <AboutP>
                      Passionate about frontend development, UI, UX, and
                      Graphics.
                      <br />I design and develop for work and leisure.
                    </AboutP>
                    <AboutP>
                      This site was created with ReactJS, NextJS, &amp; Styled
                      Components.
                      <br />
                      <Link
                        href="https://github.com/tinaamy-chang/tinafish#"
                        passHref
                      >
                        <AboutLinks aria-label="link to github" target="_blank">
                          <NoWrap>Check out the code &#187;</NoWrap>
                        </AboutLinks>
                      </Link>
                    </AboutP>
                  </motion.div>
                  <motion.div variants={fadeInDown}>
                    <Header>connect</Header>
                  </motion.div>
                  <motion.div variants={fadeInDown}>
                    <AboutP>
                      <Link href="/Tchang_Resume_2021.pdf" passHref>
                        <AboutLinks aria-label="link to resume" target="_blank">
                          <NoWrap>📄&nbsp;&nbsp;Resume &#187;</NoWrap>
                        </AboutLinks>
                      </Link>
                    </AboutP>
                    <AboutP>
                      <Link
                        href="https://www.linkedin.com/in/tinastunas"
                        passHref
                      >
                        <AboutLinks
                          aria-label="link to LinkedIn"
                          target="_blank"
                        >
                          <NoWrap>🌐&nbsp;&nbsp;LinkedIn &#187;</NoWrap>
                        </AboutLinks>
                      </Link>
                    </AboutP>
                    <Header>dig deeper</Header>
                    <AboutP>
                      <Link href="/archived" passHref>
                        <AboutLinks aria-label="link to archived designs">
                          <NoWrap>🗄️&nbsp;&nbsp;Archived Designs &#187;</NoWrap>
                        </AboutLinks>
                      </Link>
                    </AboutP>
                    <AboutP style={{ marginBottom: 35 }}>
                      <Link href="/illustrationsanimations" passHref>
                        <AboutLinks aria-label="link to illustrations and animations">
                          <NoWrap>
                            🖍️&nbsp;&nbsp;Illustrations/Animations &#187;
                          </NoWrap>
                        </AboutLinks>
                      </Link>
                    </AboutP>
                  </motion.div>
                  {/* <motion.div variants={fadeInDown}>
                    <Desktop>
                      <motion.div
                        whileHover={{
                          scale: 1.01,
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ModeButton onClick={toggleTheme}>
                          <NoWrap>{text}</NoWrap>
                        </ModeButton>
                      </motion.div>
                    </Desktop>
                  </motion.div> */}
                </BoxLeftContent>
              </motion.div>
            </BoxLeft>

            <BoxRight>
              <motion.div variants={stagger}>
                <BoxRightBackground />

                <BoxRightContent>
                  <motion.div variants={fadeInDown}>
                    <Header>projects</Header>
                  </motion.div>
                  <motion.div
                    variants={fadeInDown}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link href="/pathwaystosuccess" passHref>
                      <ExploreImage
                        src="/pathwaysbutton.svg"
                        alt="pathways to success button"
                      />
                    </Link>
                  </motion.div>
                  <motion.div
                    variants={fadeInDown}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link href="/testyourknowledge" passHref>
                      <ExploreImage
                        src="/tykbutton.svg"
                        alt="test your knowledge button"
                      />
                    </Link>
                  </motion.div>
                  <motion.div
                    variants={fadeInDown}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link href="/widgetlibrary" passHref>
                      <ExploreImage
                        src="/widgetbutton.svg"
                        alt="widget library button"
                      />
                    </Link>
                  </motion.div>
                  <motion.div
                    variants={fadeInDown}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link href="/greatbarrierreef" passHref>
                      <ExploreImage
                        src="/reefbutton.svg"
                        alt="what happened to the great barrier reer button"
                      />
                    </Link>
                  </motion.div>
                </BoxRightContent>
              </motion.div>
            </BoxRight>
          </BoxLeftRightContainer>
          {/* <Mobile>
          <ModeButton onClick={toggleTheme}>
            <NoWrap>{text}</NoWrap>
          </ModeButton>
        </Mobile> */}
        </motion.div>
      </BoxContainer>
    </Layout>
  );
}
