import { SubHeader } from "../components/layout";
import ProjectLayout from "../components/projectlayout";
import styled from "styled-components";

const FinalImg = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

function TestYourKnowledge() {
  return (
    <ProjectLayout projectname="Test Your Knowledge">
      <p>
        Test Your Knowledge is a global educational campaign built for
        Bio-Rad&apos;s Diabetes and Hemoglobin Testing Marketing team. This
        digital campaign consists of a landing page, case studies, webinar, and
        several introductory emails. Additonal emails are sent whenever new case
        studies or content is released.
      </p>
      <SubHeader>scope</SubHeader>
      <ul>
        <li>
          <strong>Users:</strong> Existing Bio-Rad Diabetes and Hemoglobin
          Testing customers
        </li>
        <li>
          <strong>What We Know:</strong> There has been a lot of interest from
          Bio-Rad customers about learning about how understand unusual
          hemoglobin variants that appear on their chromatograms from Marco
          Flamini, a Bio-Rad product manager and Hemoglobinopathies expert. He
          has created the Library of Variants tool that helps them evalutate
          chromatograms but not everyone knows how to use it.
        </li>
        <li>
          <strong>Goal:</strong> Build an educational page that highlights the
          Library of Variants by having a demo video and various case studies
          that use it. Essentially, an one stop shop for tools to help customers
          easily evaluate their chromatograms.
        </li>
        <li>
          <strong>Campaign Goal:</strong> Retain customers and see who in their
          existing customer base are interested in Bio-Rad Diabetes and
          Hemoglobin Testing content.
        </li>
      </ul>
      <SubHeader>final</SubHeader>
      <FinalImg src="/tyk_final.png" alt="wireframe" />
    </ProjectLayout>
  );
}

export default TestYourKnowledge;