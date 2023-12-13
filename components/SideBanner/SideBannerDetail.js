import styled from "styled-components";
import Image from "next/image";

export default function SideBannerDetail() {
  return (
    <>
      <StyledSideBanner>
        <StyledImageSidebar
          src="/brooke-lark-V4MBq8kue3U-unsplash(1).jpg"
          alt="Image Side Banner"
          width={800}
          height={1000}
        />
        <StyledImageSidebar
          src="/kim-daniels-OrkEasJeY74-unsplash.jpg"
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
  padding-top: -20px;
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
