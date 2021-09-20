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
        <a href="/illus_bunclicker.jpg">
          <Tile src="/illus_bunclicker.jpg" alt="Picture of the author" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/illus_donuts.jpg">
          <Tile src="/illus_donuts.jpg" alt="Picture of the author" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/illus_fish.jpg">
          <Tile src="/illus_fish.jpg" alt="Picture of the author" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/illus_fishpattern.jpg">
          <Tile src="/illus_fishpattern.jpg" alt="Picture of the author" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/illus_galaxtea.jpg">
          <Tile src="/illus_galaxtea.jpg" alt="Picture of the author" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/illus_bears.png">
          <Tile src="/illus_bears.png" alt="Picture of the author" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/illus_milkley.jpg">
          <Tile src="/illus_milkley.jpg" alt="Picture of the author" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/illus_subbird.jpg">
          <Tile src="/illus_subbird.jpg" alt="Picture of the author" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/illus_sunham.jpg">
          <Tile src="/illus_sunham.jpg" alt="Picture of the author" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/illus_animals.png">
          <Tile src="/illus_animals.png" alt="Picture of the author" />
        </a>
      </ImageWrapper>
    </SRLWrapper>
  );
}

export default ArchivedImages;
