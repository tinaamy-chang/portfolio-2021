import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";

import { SubHeader } from "../components/layout";
import ProjectLayout, {
  FlexContainerColumn,
  FullImg,
  FullImgNoShadow,
  Bullets,
} from "../components/projectlayout";

const FullImgPart = styled.img`
  max-width: 70%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: white;
  @media (max-width: 800px) {
    max-width: 100%;
  }
`;

const OldImg = styled.img`
  max-width: 40%;
  height: auto;
  border-radius: 5px;
  margin: 20px 10px 0 0;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  @media (max-width: 800px) {
    margin: 10px 0;
    max-width: 80%;
  }
`;

function PathwaysToSuccess() {
  return (
    <ProjectLayout projectname="Pathways to Success">
      <SRLWrapper>
        <p>
          Pathways to Success, rebranded as Pathways, is an educational program
          for 8th graders run by faculty memebrs of the University of Southern
          California (USC) and the American Insitutes for Resarch (AIR). I was
          subcontracted by Wrasse LLC to help design and build a landing page,
          new branding, the educational platform, and dashboards for the
          program.
        </p>
        <SubHeader>old website and branding</SubHeader>
        <FlexContainerColumn>
          <OldImg
            src="/pathways_old.png"
            alt="Screenshots of Old Pathways to Success Site"
          />
          <Bullets>
            <p>These are screenshots of the old Pathways to Success site.</p>
            <p>Clients had the following goals for the overhaul:</p>
            <ul>
              <li>An attractive landing page</li>
              <li>Easier Navigation from page to page</li>
              <li>Removal of redundant pages and copy</li>
              <li>New branding reflecting modern design and sensibilities</li>
              <li>Overall streamlining of user experience</li>
              <li>Responsive design for different platforms</li>
            </ul>
          </Bullets>
        </FlexContainerColumn>
        <SubHeader>branding</SubHeader>
        <p>
          For the brand colors, we worked through several palettes before
          deciding to compliment USC&apos;s branding in order to strengthen the
          visual association between USC and Pathways. For the logo, we worked
          through several iterations before the client ultimately decided it was
          not the right time to completely rebrand. We reused the original{" "}
          <em>Pathways to Success</em> logo but modernized it by distilling the
          logo to its essentials. I identified that the most important parts of
          the logo were the wordmark and the arrow which symbolizes the growth
          and progression of students.
        </p>
        <FullImgPart src="/pathways_branding.png" alt="Branding" />
        <SubHeader>wireframing</SubHeader>
        <FullImgNoShadow src="/pathways_wireframe.png" alt="Wireframes" />
        <SubHeader>final</SubHeader>
        <FullImg
          src="/pathways_final1.png"
          alt="Final Pathways"
          style={{ marginBottom: 20 }}
        />
        <FullImg src="/pathways_final2.png" alt="Final Pathways" />
      </SRLWrapper>
    </ProjectLayout>
  );
}

export default PathwaysToSuccess;
