import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";

import ProjectLayout, {
  FlexContainerColumn,
  FlexContainerRow,
  FullImgNoShadow,
  VideoBullets,
} from "../components/projectlayout";
import { SubHeader, Video } from "../components/layout";

const WidgetGif = styled.img`
  max-width: 200px;
  height: auto;
  background-color: white;
  border-radius: 5px;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  @media (max-width: 800px) {
    max-width: 150px;
    min-width: 75px;
  }
`;

function WidgetLibrary() {
  return (
    <ProjectLayout projectname="Widget Library">
      <SRLWrapper>
        <p>
          The Widget Library is a web application I built at Bio-Rad. It helps
          sales representatives quickly build personalized and targeted
          communications for their customers by providing them with a library of
          interactive marketing materials that link to Bio-Rad landing pages.
          They no longer have to download, save, and organize marketing
          graphics. The materials are all in one place and always up to date.
        </p>
        <FlexContainerRow>
          <WidgetGif src="/widget_copy.gif" alt="Copy GIF" />
          <WidgetGif src="/widget_paste.gif" alt="Paste GIF" />
          <WidgetGif src="/widget_send.gif" alt="Send GIF" />
        </FlexContainerRow>
        <SubHeader>scope</SubHeader>
        <ul>
          <li>
            <strong>Audience:</strong> Bio-Rad Marketing &#38; Sales
          </li>
          <li>
            <strong>Problem:</strong> Marketing has many product, event,
            awareness, and educational landing pages that they want Sales to use
            more. Sales is looking for a new ways to appeal to and engage their
            customers with Bio-Rad content and landing pages. How do we marry
            the two?
          </li>
          <li>
            <strong>Solution:</strong> Build a library of graphics, referred to
            internally as Widgets, that Sales can place into their emails to
            drive customer engagement with materials that Marketing has
            produced.
          </li>
          <li>
            <strong>Key Ideas:</strong> It should be quick and easy for Sales to
            create visually appealing emails using Marketing Widgets with
            mininmal error.
          </li>
        </ul>
        <SubHeader>wireframes</SubHeader>
        <p style={{ marginBottom: 0, marginTop: 10 }}>
          <strong>Homepage/How to Use/Request form</strong>
        </p>
        <FullImgNoShadow
          src="/widget_wireframe1.png"
          alt="Homepage/Howt to Use/Request Form"
        />
        <p style={{ marginBottom: 0, marginTop: 10 }}>
          <strong>Search and Categorization</strong>
        </p>
        <FullImgNoShadow
          src="/widget_wireframe2.png"
          alt="Search and Categorization"
        />
        <p style={{ marginBottom: 0, marginTop: 10 }}>
          <strong>Widget Displays</strong>
        </p>
        <FullImgNoShadow
          src="/widget_wireframe3.png"
          alt="Widget Displays"
          style={{ marginBottom: 20 }}
        />
        <SubHeader>version 1.0 demo video: hi-fi prototype </SubHeader>
        <FlexContainerColumn>
          <Video>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hoxgN3HxcB8"
              title="Widget Library Demo v1.0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Video>
          <VideoBullets>
            <p>
              <strong>Feedback:</strong>
            </p>
            <ul>
              <li>Straightforward to navigate</li>
              <li>
                Clear, short instructions let the user understand what to do
                quickly and dive into using the tool
              </li>
              <li>Needs more branding</li>
              <li>Navigation bar needs cleaning up</li>
              <li>Needs a FAQ section</li>
            </ul>
          </VideoBullets>
        </FlexContainerColumn>
        <SubHeader>version 2.0 demo video: released for use</SubHeader>
        <FlexContainerColumn>
          <Video>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QymBTeX-tUY"
              title="Widget Library Demo v2.0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Video>
          <VideoBullets>
            <p>
              <strong>Feedback:</strong>
            </p>
            <ul>
              <li>
                Needs scalability for regional content, including translations
              </li>
              <li>A search bar for widgets when there are more created</li>
              <li>
                Needs a way for the user to know which landing page is linked to
                the widget at a glance
              </li>
            </ul>
          </VideoBullets>
        </FlexContainerColumn>
      </SRLWrapper>
    </ProjectLayout>
  );
}

export default WidgetLibrary;
