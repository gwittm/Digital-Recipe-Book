import styled from "styled-components";
import Image from "next/image";

export default function SideBanner() {
  return (
    <>
      <StyledSideBanner>
        <Image
          src="/public/nadine-primeau--bLkT8wGV0I-unsplash.jpg"
          width={100}
          height={300}
        />
      </StyledSideBanner>
    </>
  );
}

const StyledSideBanner = styled.div`
  position: fixed;
  padding-top: 8px;
  left: 500px;
  height: 100%;
  width: 100px;
  padding: 20px;
`;
