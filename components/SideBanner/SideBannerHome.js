import styled from "styled-components";
import Image from "next/image";

export default function SideBannerHome() {
  return (
    <>
      <StyledSideBanner>
        <StyledImageSidebar
          src="/Banner-kitchen.jpg"
          alt="Image Side Banner"
          width={400}
          height={400}
        />
      </StyledSideBanner>
    </>
  );
}

const StyledSideBanner = styled.div`
  position: fixed;
  height: 30rem;
  width: 70px;
`;

const StyledImageSidebar = styled(Image)`
  object-fit: cover;
  height: 110%;
  width: 60px;
  padding: 2px;
  border-radius: 10px;
  padding-top: -100px;
`;
