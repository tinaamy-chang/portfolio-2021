import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";
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

// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import { SRLWrapper } from 'simple-react-lightbox-pro'

function ArchivedImages() {
  return (
    <SRLWrapper>
      <ImageWrapper>
        <a href="/illus_bunclicker.jpg">
          <Image
            src="/illus_bunclicker.jpg"
            alt="Picture of the author"
            width={330}
            height={150}
            Layout="fill"
            objectFit="cover"
          />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/illus_donuts.jpg">
          <Image
            src="/illus_donuts.jpg"
            alt="Picture of the author"
            width={330}
            height={150}
            Layout="fill"
            objectFit="cover"
          />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/illus_fish.jpg">
          <Image
            src="/illus_fish.jpg"
            alt="Picture of the author"
            width={330}
            height={150}
            Layout="fill"
            objectFit="cover"
          />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/illus_fishpattern.jpg">
          <Image
            src="/illus_fishpattern.jpg"
            alt="Picture of the author"
            width={330}
            height={150}
            Layout="fill"
            objectFit="cover"
          />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/illus_galaxtea.jpg">
          <Image
            src="/illus_galaxtea.jpg"
            alt="Picture of the author"
            width={330}
            height={150}
            Layout="fill"
            objectFit="cover"
          />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/illus_bears.png">
          <Image
            src="/illus_bears.png"
            alt="Picture of the author"
            width={330}
            height={150}
            Layout="fill"
            objectFit="cover"
          />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/illus_milkley.jpg">
          <Image
            src="/illus_milkley.jpg"
            alt="Picture of the author"
            width={330}
            height={150}
            Layout="fill"
            objectFit="cover"
          />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/illus_subbird.jpg">
          <Image
            src="/illus_subbird.jpg"
            alt="Picture of the author"
            width={330}
            height={150}
            Layout="fill"
            objectFit="cover"
          />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/illus_sunham.jpg">
          <Image
            src="/illus_sunham.jpg"
            alt="Picture of the author"
            width={330}
            height={150}
            Layout="fill"
            objectFit="cover"
          />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/illus_animals.png">
          <Image
            src="/illus_animals.png"
            alt="Picture of the author"
            width={330}
            height={150}
            Layout="fill"
            objectFit="cover"
          />
        </a>
      </ImageWrapper>
    </SRLWrapper>
  );
}

export default ArchivedImages;
