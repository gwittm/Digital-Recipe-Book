import styled from "styled-components";
import Image from "next/image";

export default function SideBannerHome() {
  return (
    <>
      <StyledSideBanner>
        <StyledImageSidebar
          src="/Banner.jpg"
          alt="Image Side Banner"
          width={400}
          height={400}
        />
        {/*   <StyledImageSidebar
          src="/Banner.jpg"
          alt="Image Side Banner"
          width={400}
          height={400}
        />
        <StyledImageSidebar
          src="/Banner.jpg"
          alt="Image Side Banner"
          width={400}
          height={400}
        /> */}
        {/* <StyledImageSidebar
          src="/nadine-primeau--ftWfohtjNw-unsplash.jpg"
          alt="Image Side Banner"
          width={200}
          height={500}
        />
        <StyledImageSidebar
          src="/nadine-primeau--bLkT8wGV0I-unsplash.jpg"
          alt="Image Side Banner"
          width={200}
          height={500}
        />
        <StyledImageSidebar
          src="/brooke-lark-GTMGG-xvxdU-unsplash.jpg"
          alt="Image Side Banner"
          width={200}
          height={500}
        /> */}
      </StyledSideBanner>
    </>
  );
}

const StyledSideBanner = styled.div`
  position: fixed;
  height: 500px;
  width: 70px;
  /*   background-color: var(--darkbackground-color);
 */
`;

const StyledImageSidebar = styled(Image)`
  object-fit: cover;
  /*   height: auto; */
  height: 110%;
  width: 60px;
  padding: 2px;
  border-radius: 10px;
  padding-top: -100px;
`;
