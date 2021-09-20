import Layout, { Header } from "../components/layout";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Link from "next/link";

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin: 50px 20px 100px 20px;
  flex-direction: column;
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

  &:link {
  }
  &:visited {
  }
  &:hover {
    cursor: pointer;
    border: 3px solid white;
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

export default function ProjectLayout({ children, projectname }) {
  return (
    <>
      <FishBackContainer>
        <FishCreep src="/profile_fish.svg" alt="fish creep" />
        <Link href="/">
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
      <Layout>
        <ContentContainer>
          <Header>{projectname}</Header>
          <BackgroundContainer>{children}</BackgroundContainer>
        </ContentContainer>
      </Layout>
    </>
  );
}
