import { SubHeader, Video } from "../components/layout";
import ProjectLayout, {
  FlexContainerRow,
  FlexContainerColumn,
} from "../components/projectlayout";
import IllusAniImages from "../components/illusaniimages";

function IllustrationsAnimations() {
  return (
    <ProjectLayout projectname="Illustrations and Animations Gallery">
      <SubHeader>Animations</SubHeader>
      <p>
        Animations and Illustrations done for fun, with purpose, or for
        practice.
      </p>
      <FlexContainerColumn>
        <Video>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/t8-ea-a3bbo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Video>
        <Video>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_PE99AtniyU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Video>
      </FlexContainerColumn>
      <SubHeader>Illustrations</SubHeader>
      <FlexContainerRow>
        <IllusAniImages />
      </FlexContainerRow>
    </ProjectLayout>
  );
}

export default IllustrationsAnimations;
