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
          The Widget Library is a web application built at Bio-Rad to help sales
          representatives qusickly build personalized and targeted
          communications for their customers. It is a library of clickable
          banners that link to Bio-Rad landing pages. There is no need to
          download and save the images, as they are easy to copy from the
          library, paste into an email, and send with the intended link still
          attached.
        </p>
        <FlexContainerRow>
          <WidgetGif src="/widget_copy.gif" alt="Copy GIF" />
          <WidgetGif src="/widget_paste.gif" alt="Paste GIF" />
          <WidgetGif src="/widget_send.gif" alt="Send GIF" />
        </FlexContainerRow>
        <SubHeader>scope</SubHeader>
        <ul>
          <li>
            <strong>User:</strong> Bio-Rad Marketing &#38; Sales
          </li>
          <li>
            <strong>Problem:</strong> Marketing has many product, event,
            awareness, and educational landing pages that they want Sales to use
            more. Sales is looking for a new way to appeal to and engage their
            customers with Bio-Rad content/landing pages. How do we marry the
            two?
          </li>
          <li>
            <strong>Solution:</strong> Build a library of banners AKA
            &quot;widgets&quot; that sales can place into their emails for
            customers to learn more about Bio-Rad products by incentivizing
            customers to click the widget that links to a landing page.
          </li>
          <li>
            <strong>Keywords:</strong> quick, easy, visually-appealing, how can
            we make copy and pasting have minimal error?
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
              <strong>Comments:</strong>
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
              <strong>Comments:</strong>
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
