import { SRLWrapper } from "simple-react-lightbox";
import styled from "styled-components";

const Tile = styled.img`
  margin: 10px;
  width: 330px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
  @media (max-width: 800px) {
    width: 120px;
    height: 120px;
  }
`;

function ArchivedImages() {
  return (
    <SRLWrapper>
      <a href="/archived_bills.png">
        <Tile src="/archived_bills.png" alt="Unit, a banking app" />
      </a>

      <a href="/archived_derekjeter.png">
        <Tile src="/archived_derekjeter.png" alt="Derek Jeter Infographic" />
      </a>

      <a href="/archived_devaworld.jpg">
        <Tile src="/archived_devaworld.jpg" alt="Deva World Poster" />
      </a>

      <a href="/archived_stardog.jpeg">
        <Tile src="/archived_stardog.jpeg" alt="Stardog, a dog plush" />
      </a>

      <a href="/archived_lyme.gif">
        <Tile src="/archived_lyme.gif" alt="Lyme Total Email Signature Gif" />
      </a>

      <a href="/archived_mapping.png">
        <Tile
          src="/archived_mapping.png"
          alt="Experiences Beyond Time, A Graph"
        />
      </a>

      <a href="/archived_moor.png">
        <Tile src="/archived_moor.png" alt="'Moor, pasta branding" />
      </a>

      <a href="/archived_piecesofher.png">
        <Tile src="/archived_piecesofher.png" alt="Pieces of Her book cover" />
      </a>

      <a href="/archived_ruth.jpg">
        <Tile src="/archived_ruth.jpg" alt="Ruth Asawa Logo 1" />
      </a>

      <a href="/archived_ruth2.jpg">
        <Tile src="/archived_ruth2.jpg" alt="Ruth Asawa Logo 2" />
      </a>
    </SRLWrapper>
  );
}

export default ArchivedImages;
