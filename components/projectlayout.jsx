import HomeIcon from "@material-ui/icons/Home";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Link from "next/link";
import { motion } from "framer-motion";

import Layout, { Header } from "../components/layout";
import styled from "styled-components";

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin: 0px 20px 50px 20px;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  @media (max-width: 800px) {
    margin: 0 0 50px 0;
    flex-direction: column;
  }
`;

const BackgroundContainer = styled.div`
  position: relative;
  background: ${(props) => props.theme.colors.mainBox};
  width: 100%;
  border-radius: 5px;
  padding: 50px;
  margin: 15px 0px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  @media (max-width: 800px) {
    padding: 20px;
    width: 100%;
  }
`;

export const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  justify-content: space-evenly;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const BackButton = styled.a`
  top: 0;
  left: 0;
  margin: 10px;
  position: fixed;
  color: white;
  background: ${(props) => props.theme.colors.modeButton};
  font-weight: 500;
  font-size: 1.3rem;
  padding: 5px 15px;
  border-radius: 2px;
  box-sizing: border-box;
  transition: 0.2s;
  text-decoration: none;
  align-self: start;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  &:link {
  }
  &:visited {
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      cursor: pointer;
      border: 3px solid white;
    }
  }

  &:active {
  }

  @media (max-width: 1400px) {
    position: fixed;
    left: auto;
    top: 10px;
    right: 10px;
    margin: 0;
  }
`;

const FishBackContainer = styled.div`
  position: absolute;
  z-index: 1000;
`;

const FishCreep = styled.img`
  top: -115px;
  position: fixed;
  left: -260px;
  width: 400px;
  transform: rotate(130deg);
  transition: all 0.3s ease-in-out;
  @media (max-width: 1400px) {
    width: 200px;
    position: fixed;
    left: -30px;
    top: auto;
    bottom: -155px;
    transform: rotate(13deg);
    margin: 0;
  }
`;

export const FullImg = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: white;
  transition: all 0.3s ease-in-out;
`;

export const FullImgNoShadow = styled.img`
  max-width: 100%;
  height: auto;
  transition: all 0.3s ease-in-out;
`;

export const VideoBullets = styled.div`
  padding: 20px;
  max-width: 50%;
  height: auto;
  transition: all 0.3s ease-in-out;

  @media (max-width: 800px) {
    padding: 0px;
    max-width: 100%;
  }
`;

export const Bullets = styled.div`
  margin: 20px;
  transition: all 0.3s ease-in-out;
  @media (max-width: 800px) {
    margin: 10px;
  }
`;

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
    },
  },
};

export default function ProjectLayout({ children, projectname }) {
  return (
    <>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <FishBackContainer>
          <FishCreep src="/profile_fish.svg" alt="fish creep" />
          <Link href="/" passHref>
            <BackButton
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <ArrowBackIcon />
              <HomeIcon />
            </BackButton>
          </Link>
        </FishBackContainer>
      </motion.div>
      <Layout>
        <ContentContainer>
          <motion.div variants={stagger}>
            <motion.div variants={fadeInDown}>
              <Header>{projectname}</Header>
            </motion.div>
            <motion.div variants={fadeInDown}>
              <BackgroundContainer>{children}</BackgroundContainer>
            </motion.div>
          </motion.div>
        </ContentContainer>
      </Layout>
    </>
  );
}
