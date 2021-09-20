import { SRLWrapper } from "simple-react-lightbox";
import styled from "styled-components";

const ImageWrapper = styled.div`
  padding: 10px;
  display: inline-block;
  > a > div > img {
    border-radius: 5px;
  }
  @media (max-width: 800px) {
    width: 45%;
  }
`;

const Tile = styled.img`
  width: 330px;
  height: 150px;
  object-fit: cover;
`;

function ArchivedImages() {
  return (
    <SRLWrapper>
      <ImageWrapper>
        <a href="/archived_bills.png">
          <Tile src="/archived_bills.png" alt="Picture of the author" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/archived_derekjeter.png">
          <Tile src="/archived_derekjeter.png" alt="Picture of the author" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/archived_devaworld.jpg">
          <Tile src="/archived_devaworld.jpg" alt="Picture of the author" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/archived_lyme.gif">
          <Tile src="/archived_lyme.gif" alt="Picture of the author" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/archived_mapping.png">
          <Tile src="/archived_mapping.png" alt="Picture of the author" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/archived_moor.png">
          <Tile src="/archived_moor.png" alt="Picture of the author" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/archived_piecesofher.png">
          <Tile src="/archived_piecesofher.png" alt="Picture of the author" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/archived_ruth.jpg">
          <Tile src="/archived_ruth.jpg" alt="Picture of the author" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/archived_ruth2.jpg">
          <Tile src="/archived_ruth2.jpg" alt="Picture of the author" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/archived_stardog.jpeg">
          <Tile src="/archived_stardog.jpeg" alt="Picture of the author" />
        </a>
      </ImageWrapper>
    </SRLWrapper>
  );
}

export default ArchivedImages;
