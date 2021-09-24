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
`;

function GreatBarrier() {
  return (
    <ProjectLayout projectname="What Happened to the Great Barrier Reef?">
      <SRLWrapper>
        <p>
          What Happened to the Great Barrier reef is a large poster (30&quot; x
          40&quot;) about the Great Barrier Reef. It visualizes data in the form
          of different graphs in order to tell a story of the past,
          present(2018), and future of what is happening to the Great Barrier
          Reef.
        </p>
        <SubHeader>project proposal</SubHeader>
        <FlexContainerColumn>
          <Bullets>
            <ul>
              <li>
                <strong>Original Topic:</strong> Coral Reefs
              </li>
              <li>
                <strong>Vision:</strong> I want to create a visualization on
                spreading awareness that coral reefs are disappearing. Through
                preliminary research I found three main things that are
                currently affecting the life of coral reefs&mdash; overfishing,
                warming waters (global warming), and pollution. Ideally, I would
                like to find statistics on different sizes of reefs and zoom in
                on how some of them have changed in the last (10?) years through
                size, animals that rely on that ecosystem, etc.
              </li>
              <li>
                <strong>Goals to Visualize:</strong>
                <ol>
                  <li>Coral reefs dying</li>
                  <li>Coral reefs are home to many living animals</li>
                  <li>How we/you can help</li>
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
              <strong>Topic Change:</strong> Unfortunately, as I dug into
              researching, I was unable to find reputable data about the state
              of coral reefs around the world. Instead, I had found some
              interesting data on the Great Barrier Reef&apos;s health that I
              decided to focus on for this poster.
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
              <li>Competeting hierarcy of the most important information</li>
              <li>what would go on the timeline? where should it go?</li>
              <li>
                The recent data for the bleaching evednt in 2016 should be
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
