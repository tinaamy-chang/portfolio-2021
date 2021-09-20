import { Header, SubHeader } from "../components/layout";
import ProjectLayout, {
  FlexContainerColumn,
  FlexContainerRow,
} from "../components/projectlayout";
import styled from "styled-components";

const ReefHalfImg = styled.img`
  width: 30%;
  border-radius: 5px;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  @media (max-width: 800px) {
    margin: 10px 0;
    width: 80%;
  }
`;
const ReefQuarterImg = styled.img`
  width: 20%;
  border-radius: 5px;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  @media (max-width: 800px) {
    width: 60%;
    margin: 10px 0;
  }
`;
const ReefHalf = styled.div`
  margin: 20px;
  @media (max-width: 800px) {
    margin: 10px 0;
  }
`;
const ReefQuarter = styled.div`
  margin: 20px;
  @media (max-width: 800px) {
    margin: 10px 0;
  }
`;

const FinalImg = styled.img`
  width: 100%;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

function GreatBarrier() {
  return (
    <ProjectLayout projectname="What Happened to the Great Barrier Reef?">
      <p>
        What Happened to the Great Barrier reef is a large poster (30&quot; x
        40&quot;) about the Great Barrier Reef. It visualizes data in the form
        of different graphs in order to tell a story of the past, present(2018),
        and future of what is happening to the Great Barrier Reef.
      </p>
      <SubHeader>project proposal</SubHeader>
      <FlexContainerColumn>
        <ReefHalf>
          <ul>
            <li>
              <strong>Original Topic:</strong> Coral Reefs
            </li>
            <li>
              <strong>Vision:</strong> I want to create a visualization on
              spreading awareness that coral reefs are disappearing. Through
              preliminary research I found three main things that are currently
              affecting the life of coral reefs&mdash; overfishing, warming
              waters (global warming), and pollution. Ideally, I would like to
              find statistics on different sizes of reefs and zoom in on how
              some of them have changed in the last (10?) years through size,
              animals that rely on that ecosystem, etc.
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
        </ReefHalf>
        <ReefHalfImg src="/reef_sketch.jpeg" alt="ideation of reef poster" />
      </FlexContainerColumn>
      <SubHeader>ideation, reviews</SubHeader>
      <FlexContainerColumn>
        <ReefQuarterImg
          src="/reef_ideation.jpg"
          alt="ideation of reef poster"
        />
        <ReefQuarter>
          <p>
            <strong>Topic Change:</strong> Unfortunately, as I dug into
            researching, I was unable to find reputable data about the state of
            coral reefs around the world. Instead, I had found some interesting
            data on the Great Barrier Reef's health that I decided to focus on
            for this poster.
          </p>
        </ReefQuarter>
      </FlexContainerColumn>
      <FlexContainerColumn>
        <ReefQuarterImg src="/reef_review.jpg" alt="reef poster for review" />
        <ReefQuarter>
          <p>
            <strong>Mid-Point Peer Review Critiques:</strong>
          </p>
          <ul>
            <li>Competeting hierarcy of the most important information</li>
            <li>what would go on the timeline? where should it go?</li>
            <li>
              The recent data for the bleaching evednt in 2016 should be bigger,
              especially the map. Maps are attractive.
            </li>
          </ul>
        </ReefQuarter>
      </FlexContainerColumn>
      <SubHeader>final</SubHeader>
      <FinalImg src="/reef_final.png" alt="reef poster" />
    </ProjectLayout>
  );
}

export default GreatBarrier;
