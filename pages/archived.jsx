import ArchivedImages from "../components/archivedimages";
import { SubHeader, Video } from "../components/layout";
import ProjectLayout, {
  FlexContainerColumn,
  FlexContainerRow,
} from "../components/projectlayout";
import styled from "styled-components";
import Link from "next/link";

const BunLifeButtonImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
`;
const BunLifeOverlayContainer = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 30%;
  left: 37%;
`;

const BunLifeButtonContainer = styled.div`
  position: relative;
  margin: 20px;
  max-width: 427px;
  background-color: black;
  &:hover {
    ${BunLifeButtonImg} {
      opacity: 0.3;
    }
  }

  &:hover {
    ${BunLifeOverlayContainer} {
      opacity: 1;
    }
  }
`;

const BunLifeOverlayImg = styled.img`
  width: 100px;
`;

function Archived() {
  return (
    <ProjectLayout projectname="Archived Designs Gallery">
      <p>
        Design projects that are not at part of my main portfolio but I find
        relevant in displaying more of my skillset. Feel free to ask about any
        that pique your inerest.
      </p>
      <FlexContainerColumn>
        <Video>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NBXJJHjP8Y8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Video>
        <Link href="https://tinaamy-chang.github.io/BunLife/">
          <a target="_blank">
            <BunLifeButtonContainer>
              <BunLifeButtonImg
                src="/archived_bunlife.png"
                alt="button to bunlife"
              />
              <BunLifeOverlayContainer>
                <BunLifeOverlayImg
                  src="/archived_bunlifebutton.png"
                  alt="button to bunlife"
                />
              </BunLifeOverlayContainer>
            </BunLifeButtonContainer>
          </a>
        </Link>
      </FlexContainerColumn>
      <FlexContainerRow>
        <ArchivedImages />
      </FlexContainerRow>
    </ProjectLayout>
  );
}

export default Archived;
