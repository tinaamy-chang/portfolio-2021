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
import Link from "next/link";
import { useThemeSetter } from "../components/theme";

export default function Home() {
  const { toggleTheme, text } = useThemeSetter();

  return (
    <Layout>
      <ProfileContainer>
        <Profile />
        <Mobile>
          <HelloBox>
            <HelloText style={{ marginBottom: 30 }}>
              Hello!
              <br /> I am Tina Amy Chang 🐟
            </HelloText>
            <ModeButton onClick={toggleTheme}>
              <NoWrap>{text}</NoWrap>
            </ModeButton>
          </HelloBox>
        </Mobile>
      </ProfileContainer>

      <BoxContainer>
        <Desktop>
          <HelloBox>
            <HelloText>
              Hello!
              <br /> I am Tina Amy Chang 🐟
            </HelloText>
          </HelloBox>
        </Desktop>
        <BoxLeftRightContainer>
          <BoxLeft>
            <BoxLeftContent>
              <Header>learn</Header>
              <AboutP>
                🖥️ Web Designer
                <br />
                🧪 Bio-Rad Laboratories
                <br />
                📍 Bay Area
              </AboutP>
              <AboutP>
                📚 VisCom Design
                <br />
                🏫 SFSU 2019
              </AboutP>
              <AboutP>
                Passionate about frontend development combined with UI, UX, and
                Graphics.
                <br />I design and develop for work and leisure.
              </AboutP>
              <Header>connect</Header>
              <AboutP>
                <Link href="#" passHref>
                  <AboutLinks aria-label="link to resume" target="_blank">
                    <NoWrap>📄 Resume &#187;</NoWrap>
                  </AboutLinks>
                </Link>{" "}
                &#47;&#47;{" "}
                <Link href="https://www.linkedin.com/in/tinastunas" passHref>
                  <AboutLinks aria-label="link to LinkedIn" target="_blank">
                    <NoWrap>🌐 LinkedIn &#187;</NoWrap>
                  </AboutLinks>
                </Link>
              </AboutP>
              <Header>dig deeper</Header>
              <AboutP>
                <Link href="/archived" passHref>
                  <AboutLinks aria-label="link to archived designs">
                    <NoWrap>🗄️ Archived Designs &#187;</NoWrap>
                  </AboutLinks>
                </Link>
              </AboutP>
              <AboutP style={{ marginBottom: 35 }}>
                <Link href="/illustrationsanimations" passHref>
                  <AboutLinks aria-label="link to illustrations and animations">
                    <NoWrap>🖍️ Illustrations/Animations &#187;</NoWrap>
                  </AboutLinks>
                </Link>
              </AboutP>
              <Desktop>
                <ModeButton onClick={toggleTheme}>
                  <NoWrap>{text}</NoWrap>
                </ModeButton>
              </Desktop>
            </BoxLeftContent>
          </BoxLeft>
          <BoxRight>
            <BoxRightBackground />
            <BoxRightContent>
              <Header>explore</Header>
              <Link href="/pathwaystosuccess" passHref>
                <ExploreImage
                  src="/pathwaysbutton.svg"
                  alt="pathways to success button"
                />
              </Link>
              <Link href="/testyourknowledge" passHref>
                <ExploreImage
                  src="/tykbutton.svg"
                  alt="test your knowledge button"
                />
              </Link>
              <Link href="/widgetlibrary" passHref>
                <ExploreImage
                  src="/widgetbutton.svg"
                  alt="widget library button"
                />
              </Link>
              <Link href="/greatbarrierreef" passHref>
                <ExploreImage
                  src="/reefbutton.svg"
                  alt="what happened to the great barrier reer button"
                />
              </Link>
            </BoxRightContent>
          </BoxRight>
        </BoxLeftRightContainer>
        {/* <Mobile>
          <ModeButton onClick={toggleTheme}>
            <NoWrap>{text}</NoWrap>
          </ModeButton>
        </Mobile> */}
      </BoxContainer>
    </Layout>
  );
}
