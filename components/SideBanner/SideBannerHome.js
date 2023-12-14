import styled from "styled-components";
import Image from "next/image";

export default function SideBannerHome() {
  return (
    <>
      <StyledSideBanner>
        <StyledImageSidebar
          src="/Anime_Pastel_Dream_In_the_corner_of_a_quaint_kitchen_a_welllov_0.jpeg"
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
