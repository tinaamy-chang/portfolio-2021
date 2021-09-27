import { SRLWrapper } from "simple-react-lightbox";

import { SubHeader } from "../components/layout";
import ProjectLayout, { FullImg } from "../components/projectlayout";

function TestYourKnowledge() {
  return (
    <ProjectLayout projectname="Test Your Knowledge">
      <p>
        Test Your Knowledge is a global educational campaign built for
        Bio-Rad&apos;s Diabetes and Hemoglobin Testing Marketing team. This
        digital campaign consists of a landing page, case studies, webinar, and
        several introductory emails. Additional emails are sent to targeted
        smailing lists whenever new case studies or content is released.
      </p>
      <SubHeader>scope</SubHeader>
      <ul>
        <li>
          <strong>Audience:</strong> Existing Bio-Rad Diabetes and Hemoglobin
          Testing customers
        </li>
        <li>
          <strong>Premise:</strong> There has been a lot of interest from
          Bio-Rad customers to learn to understand unusual hemoglobin variants
          that appear on their chromatograms. Marco Flamini, a Bio-Rad product
          manager is a Hemoglobinopathies expert. He created the Library of
          Variants, a tool that helps customers evalutate chromatograms.
          However, not all customers have learned how to use it.
        </li>
        <li>
          <strong>Goal:</strong> Build an educational page to highlight the
          Library of Variants. The page features a demo video and various case
          study videos narrated by Marco Flamini. Essentially, an one stop shop
          of informational material to help customers easily evaluate their
          chromatograms and learn more about the Library of Variants.
        </li>
        <li>
          <strong>Campaign Goals:</strong> Retain customers by improving their
          experience with Bio-Rad&apos;s chromatograms. Gather engagement
          metrics for the Diabetes and Hemoglobin Marketing team&apos;s existing
          customers.
        </li>
      </ul>
      <SubHeader>final</SubHeader>
      <SRLWrapper>
        <FullImg
          src="/tyk_final.png"
          alt="Final Assets for Test Your Knowledge"
        />{" "}
      </SRLWrapper>
    </ProjectLayout>
  );
}

export default TestYourKnowledge;
