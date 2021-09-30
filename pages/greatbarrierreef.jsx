import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";

import { SubHeader } from "../components/layout";
import ProjectLayout, {
  FlexContainerColumn,
  Bullets,
  FullImg,
} from "../components/projectlayout";

const ReefHalfImg = styled.img`
  max-width: 30%;
  height: auto;
  border-radius: 5px;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  @media (max-width: 800px) {
    margin: 10px 0;
    max-width: 80%;
  }
  &:hover {
    cursor: pointer;
  }
`;
const ReefQuarterImg = styled.img`
  max-width: 20%;
  height: auto;
  border-radius: 5px;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  @media (max-width: 800px) {
    max-width: 60%;
    margin: 10px 0;
  }
  &:hover {
    cursor: pointer;
  }
`;

function GreatBarrier() {
  return (
    <ProjectLayout projectname="What Happened to the Great Barrier Reef?">
      <SRLWrapper>
        <p>
          What Happened to the Great Barrier reef is a large infographic meant
          to be printed on a poster (30&quot; x 40&quot;) about the Great
          Barrier Reef. It presents the story of the past, present (2018), and
          future of the Great Barrier Reef as a series of data visualizations.
        </p>
        <SubHeader>project proposal</SubHeader>
        <FlexContainerColumn>
          <Bullets>
            <ul>
              <li>
                <strong>Original Topic:</strong> Coral Reefs
              </li>
              <li>
                <strong>Vision:</strong> I care deeply about the health of our
                oceans and wanted to highlight the decline of coral reefs around
                the world in the face of overfishing, global warming, and
                pollution. To do this, I wanted to use statistics gathered on a
                diverse array of reefs ranging in size, ecosystems, and history
                over the last ten years to build my narrative.
              </li>
              <li>
                <strong>Story:</strong>
                <ol>
                  <li>Coral reefs around the world are dying</li>
                  <li>Coral reefs provide a home to many species</li>
                  <li>How we can help</li>
                </ol>
              </li>
            </ul>
          </Bullets>
          <ReefHalfImg
            src="/reef_sketch.jpeg"
            alt="Early Sketch of Content Vision"
          />
        </FlexContainerColumn>
        <SubHeader>ideation, reviews</SubHeader>
        <FlexContainerColumn>
          <ReefQuarterImg
            src="/reef_ideation.jpg"
            alt="Sketch of Content Based Upon New Discoveries"
          />
          <Bullets>
            <p>
              <strong>Topic Change:</strong> Unfortunately, it was difficult to
              find reputable data on the state of coral reefs around the world.
              Many reefs were not observed consistently, producing sparse data
              that would be difficult to use in visualizations or might mislead
              the audience. Fortunately, the health of the Great Barrier Reef is
              extremely well documented, as it is the largest reef in the world
              &mdash; I decided that the Great Barrier Reef would be the focus
              of my poster.
            </p>
          </Bullets>
        </FlexContainerColumn>
        <FlexContainerColumn>
          <ReefQuarterImg
            src="/reef_review.jpg"
            alt="Halfway Point of Poster Layout"
          />
          <Bullets>
            <p>
              <strong>Mid-Point Peer Review Critiques:</strong>
            </p>
            <ul>
              <li>Competing hierarchy of information</li>
              <li>What would go on the timeline? Where should it go?</li>
              <li>
                The recent data for the bleaching event in 2016 should be
                bigger, especially the map. Maps are attractive.
              </li>
            </ul>
          </Bullets>
        </FlexContainerColumn>
        <SubHeader>final</SubHeader>
        <FullImg src="/reef_final.png" alt="Final Poster" />
      </SRLWrapper>
    </ProjectLayout>
  );
}

export default GreatBarrier;
