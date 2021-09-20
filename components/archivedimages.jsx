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
        <a href="/archived_bills.png">
          <Image
            src="/archived_bills.png"
            alt="Picture of the author"
            width={330}
            height={150}
            Layout="fill"
            objectFit="cover"
          />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/archived_derekjeter.png">
          <Image
            src="/archived_derekjeter.png"
            alt="Picture of the author"
            width={330}
            height={150}
            Layout="fill"
            objectFit="cover"
          />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/archived_devaworld.jpg">
          <Image
            src="/archived_devaworld.jpg"
            alt="Picture of the author"
            width={330}
            height={150}
            Layout="fill"
            objectFit="cover"
          />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/archived_lyme.gif">
          <Image
            src="/archived_lyme.gif"
            alt="Picture of the author"
            width={330}
            height={150}
            Layout="fill"
            objectFit="cover"
          />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/archived_mapping.png">
          <Image
            src="/archived_mapping.png"
            alt="Picture of the author"
            width={330}
            height={150}
            Layout="fill"
            objectFit="cover"
          />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/archived_moor.png">
          <Image
            src="/archived_moor.png"
            alt="Picture of the author"
            width={330}
            height={150}
            Layout="fill"
            objectFit="cover"
          />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/archived_piecesofher.png">
          <Image
            src="/archived_piecesofher.png"
            alt="Picture of the author"
            width={330}
            height={150}
            Layout="fill"
            objectFit="cover"
          />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/archived_ruth.jpg">
          <Image
            src="/archived_ruth.jpg"
            alt="Picture of the author"
            width={330}
            height={150}
            Layout="fill"
            objectFit="cover"
          />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/archived_ruth2.jpg">
          <Image
            src="/archived_ruth2.jpg"
            alt="Picture of the author"
            width={330}
            height={150}
            Layout="fill"
            objectFit="cover"
          />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a href="/archived_stardog.jpeg">
          <Image
            src="/archived_stardog.jpeg"
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
