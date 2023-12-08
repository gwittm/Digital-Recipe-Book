import styled from "styled-components";
import Image from "next/image";

export default function SideBanner() {
  return (
    <>
      <StyledSideBanner>
        <StyledImageSidebar
          src="/nadine-primeau--bLkT8wGV0I-unsplash.jpg"
          alt="Image Side Banner"
          width={100}
          height={300}
        />
      </StyledSideBanner>
    </>
  );
}

const StyledSideBanner = styled.div`
  position: fixed;
  left: 430px;
  height: 100%;
  width: 170px;
  background-color: green;
`;

const StyledImageSidebar = styled(Image)`
  object-fit: cover;
  height: auto;
  width: 170px;
`;
