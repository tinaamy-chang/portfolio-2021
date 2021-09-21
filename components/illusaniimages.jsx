import { SRLWrapper } from "simple-react-lightbox";
import styled from "styled-components";

const Tile = styled.img`
  display: inline-block;
  margin: 10px;
  width: 330px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
  @media (max-width: 800px) {
    width: 45%;
  }
`;
function ArchivedImages() {
  return (
    <SRLWrapper>
      <a href="/illus_bunclicker.jpg">
        <Tile src="/illus_bunclicker.jpg" alt="BunClicker Game Designs" />
      </a>

      <a href="/illus_donuts.jpg">
        <Tile src="/illus_donuts.jpg" alt="Donuts" />
      </a>

      <a href="/illus_fish.jpg">
        <Tile src="/illus_fish.jpg" alt="Fish/鱼/Yú" />
      </a>

      <a href="/illus_fishpattern.jpg">
        <Tile src="/illus_fishpattern.jpg" alt="Fish Pattern" />
      </a>

      <a href="/illus_galaxtea.jpg">
        <Tile src="/illus_galaxtea.jpg" alt="Boba, but galaxy'd" />
      </a>

      <a href="/illus_bears.png">
        <Tile src="/illus_bears.png" alt="Bear Suits" />
      </a>

      <a href="/illus_milkley.jpg">
        <Tile src="/illus_milkley.jpg" alt="Sparkle" />
      </a>

      <a href="/illus_subbird.jpg">
        <Tile src="/illus_subbird.jpg" alt="Subbird, your Ocean Cleaner" />
      </a>

      <a href="/illus_sunham.jpg">
        <Tile src="/illus_sunham.jpg" alt="Hamster and Tea" />
      </a>

      <a href="/illus_animals.png">
        <Tile src="/illus_animals.png" alt="Forest Animals" />
      </a>
    </SRLWrapper>
  );
}

export default ArchivedImages;
