import { SubHeader, Video } from "../components/layout";
import ProjectLayout, { FlexContainerRow } from "../components/projectlayout";
import IllusAniImages from "../components/illusaniimages";

function IllustrationsAnimations() {
  return (
    <ProjectLayout projectname="Illustrations and Animations Gallery">
      <SubHeader>Animations</SubHeader>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <FlexContainerRow>
        <Video style={{ margin: 20 }}>
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
      </FlexContainerRow>
      <SubHeader>Illustrations</SubHeader>
      <FlexContainerRow>
        <IllusAniImages />
      </FlexContainerRow>
    </ProjectLayout>
  );
}

export default IllustrationsAnimations;
