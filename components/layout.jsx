import styled from "styled-components";

const Container = styled.div`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ProfileContainer = styled.div`
  margin-top: -40px;
  margin-left: 20px;
  width: 15%;
  position: relative;

  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    align-items: stretch;
    flex-direction: row;
    margin: 0 10px 80px 0;
    > span {
      flex: 1;
    }
  }
`;

export const BoxContainer = styled.div`
  width: 85%;
  right: 0;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const HelloBox = styled.div`
  background-color: white;
  position: relative;
  padding: 20px 25px;
  border-radius: 5px;
  margin: 15px 65px;
  line-height: 1.2;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 25px 25px 30px 25px;
    box-sizing: border-box;
  }
`;

export const HelloText = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.helloHeader};
  margin: 0;
`;

export const Header = styled.h2`
  font-size: 1.6rem;
  margin: 0;
  font-weight: 600;
  color: ${(props) => props.theme.colors.mainHeader};
`;

export const SubHeader = styled.h3`
  font-size: 1.8rem;
  margin: 0;
  font-weight: 400;
  color: #4d4d4d;
`;

export const BoxLeftRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const BoxLeft = styled.div`
  background: ${(props) => props.theme.colors.mainBox};
  width: 40%;
  border-radius: 5px;
  padding-right: 50px;
  margin-top: -60px;

  @media (max-width: 800px) {
    width: 100%;
    padding-right: 0;
    margin-bottom: 20px;
  }
`;

export const BoxLeftContent = styled.div`
  padding: 65px 70px 80px 70px;

  @media (max-width: 1500px) {
    margin: 0;
    padding: 85px 50px;
  }

  @media (max-width: 800px) {
    padding: 25px;
  }
`;

export const BoxRight = styled.div`
  width: 50%;
  position: relative;
  right: 0;
  margin-left: -100px;
  padding-right: 60px;

  @media (max-width: 800px) {
    width: 100%;
    position: static;
    margin-left: 0;
    padding-right: 0;
    margin-bottom: 20px;
  }
`;

export const BoxRightBackground = styled.div`
  background: ${(props) => props.theme.colors.subBox};
  height: 75%;
  width: 100%;
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  z-index: -1;
  pointer-events: none;

  @media (max-width: 800px) {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: none;
    position: static;
  }
`;

export const BoxRightContent = styled.div`
  padding: 5px 70px;
  width: 100%;
  box-sizing: border-box;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 1500px) {
    margin: 0;
    padding: 25px 50px;
  }

  @media (max-width: 800px) {
    position: static;
    background: ${(props) => props.theme.colors.subBox};
    border-radius: 5px;
    padding: 25px;
  }
`;

export const AboutP = styled.p`
  margin: 0 0 15px 0;
`;

export const AboutLinks = styled.a`
  text-decoration: none;
  color: #4d4d4d;
  transition: 0.2s;
  &:link {
    color: #4d4d4d;
  }
  &:visited {
    color: #4d4d4d;
  }
  &:hover {
    /* color: #222526; */
    cursor: pointer;
    color: #4d4d4d;
    border-radius: 2px;
    background-color: white;
    color: ${(props) => props.theme.colors.modeButton};
    transition: box-shadow 400ms cubic-bezier(0.2, 0, 0.7, 1),
      transform 200ms cubic-bezier(0.2, 0, 0.7, 1);
    box-shadow: 0 0 1px 5px rgba(255, 255, 255, 1),
      0 0 1px 10px rgba(255, 255, 255, 0.2),
      0 0 1px 15px rgba(255, 255, 255, 0.1);
  }
  &:active {
    color: #4d4d4d;
  }
`;

export const ModeButton = styled.a`
  color: white;
  background: ${(props) => props.theme.colors.modeButton};
  font-weight: 500;
  font-size: 1.3rem;
  padding: 5px 15px;
  border-radius: 2px;
  box-sizing: border-box;

  transition: 0.2s;

  &:link {
  }
  &:visited {
  }
  &:hover {
    cursor: pointer;
    background-color: white;
    color: ${(props) => props.theme.colors.modeButton};
    transition: box-shadow 400ms cubic-bezier(0.2, 0, 0.7, 1),
      transform 200ms cubic-bezier(0.2, 0, 0.7, 1);
    box-shadow: 0 0 1px 3px rgba(255, 255, 255, 1),
      0 0 1px 8px rgba(255, 255, 255, 0.15),
      0 0 1px 15px rgba(255, 255, 255, 0.1);
  }

  &:active {
  }
`;

export const NavButton = styled.a`
  background: ${(props) => props.theme.colors.navButton};
`;

export const BoxWrapper = styled.div`
  background: ${(props) => props.theme.colors.mainBox};
`;

export const Profile = styled.div`
  background: url(${(props) => props.theme.images.profile}) no-repeat;
  background-size: contain;
  width: 115%;
  height: 100%;

  @media (max-width: 800px) {
    height: auto;
    width: 20%;
    margin-right: 20px;
  }
`;

export const Mobile = styled.span`
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`;

export const ExploreImage = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 20px;
  /* box-shadow: 0px 3px 15px rgba(37, 127, 133, 0.35); */
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: 0.2s ease;
  &:hover {
    cursor: pointer;
    width: 101%;
    transition: box-shadow 400ms cubic-bezier(0.2, 0, 0.7, 1),
      transform 200ms cubic-bezier(0.2, 0, 0.7, 1);
    box-shadow: 0 0 1px 5px rgba(255, 255, 255, 1),
      0 0 1px 8px rgba(255, 255, 255, 0.15),
      0 0 1px 15px rgba(255, 255, 255, 0.1);
  }
`;

export const Desktop = styled.span`
  display: block;
  @media (max-width: 800px) {
    display: none;
  }
`;
export const Video = styled.div`
  position: relative;
  overflow: hidden;
  width: 40%;
  padding-top: 25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  margin: 20px 0;
  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 800px) {
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  }
`;

const Layout = ({ children }) => <Container>{children}</Container>;

export default Layout;
