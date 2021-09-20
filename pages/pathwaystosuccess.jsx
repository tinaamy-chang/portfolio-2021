import { SubHeader } from "../components/layout";
import ProjectLayout, {
  FlexContainerColumn,
} from "../components/projectlayout";
import styled from "styled-components";

const FullImg = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: white;
`;

const FullImgPart = styled.img`
  width: 70%;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: white;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const FullImgNoStyle = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const OldImg = styled.img`
  width: 40%;
  border-radius: 5px;
  margin: 20px 10px 0 0;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  @media (max-width: 800px) {
    margin: 10px 0;
    width: 80%;
  }
`;

const OldImgDiv = styled.div`
  margin: 20px;
  @media (max-width: 800px) {
    margin: 10px;
  }
`;

function PathwaysToSuccess() {
  return (
    <ProjectLayout projectname="Pathways to Success">
      <p>
        Pathways to Success, rebranded as Pathways, is an educational program
        for 8th gaders run by faculty memebrs of the University of Southern
        California (USC) and the American Insitutes for Resarch (AIR). I was
        contracted by Wrasse to help build a new website, design new branding,
        design the educational platform, and design a dashboard for the program.
      </p>
      <SubHeader>old website and branding</SubHeader>
      <FlexContainerColumn>
        <OldImg src="/pathways_old.png" alt="old pathways site" />
        <OldImgDiv>
          <p>These are screenshots of the old Pathways to Success site.</p>
          <p>Problems that the clients needed addressed were:</p>
          <ul>
            <li>An attractive landing page</li>
            <li>Easier Navigation from page to page</li>
            <li>Removal of redundant pages and copy</li>
            <li>New branding reflecting modern design and sensibilities</li>
            <li>Overall streamlining of user experience</li>
            <li>Responsive design for different platforms</li>
          </ul>
        </OldImgDiv>
      </FlexContainerColumn>
      <SubHeader>branding</SubHeader>
      <p>
        For the colors, we worked through several colors before deciding to
        align with USC&apos;s branding in order to maintain USC&apos;s
        association with Pathways. For the logo, we worked through several
        iterations before the client ultimately thought it was not the right
        time to completely rebrand. We reused the original{" "}
        <em>Pathways to Success</em> logo but modernedized it.
      </p>
      <FullImgPart src="/pathways_branding.png" alt="branding" />
      <SubHeader>wireframing</SubHeader>
      <FullImgNoStyle src="/pathways_wireframe.png" alt="wireframes" />
      <SubHeader>final</SubHeader>
      <FullImg src="/pathways_final1.png" alt="final pathways" />
      <FullImg src="/pathways_final2.png" alt="final pathways" />
    </ProjectLayout>
  );
}

export default PathwaysToSuccess;
