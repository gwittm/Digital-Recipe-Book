import styled from "styled-components";
import Image from "next/image";

export default function SideBannerHome() {
  return (
    <>
      <StyledSideBanner>
        <StyledImageSidebar
          src="/nadine-primeau--ftWfohtjNw-unsplash.jpg"
          alt="Image Side Banner"
          width={800}
          height={1000}
        />
        <StyledImageSidebar
          src="/nadine-primeau--bLkT8wGV0I-unsplash.jpg"
          alt="Image Side Banner"
          width={800}
          height={1000}
        />
        <StyledImageSidebar
          src="/brooke-lark-GTMGG-xvxdU-unsplash.jpg"
          alt="Image Side Banner"
          width={800}
          height={1000}
        />
      </StyledSideBanner>
    </>
  );
}

const StyledSideBanner = styled.div`
  position: fixed;
  left: 0;
  height: 85vh;
  width: 180px;
  background-color: var(--darkbackground-color);
`;

const StyledImageSidebar = styled(Image)`
  object-fit: cover;
  height: auto;
  width: 180px;
  padding: 10px;
  border-radius: 30px;
`;
