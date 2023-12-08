import Image from "next/image";
import styled from "styled-components";

export default function BackgroundImage() {
  return <StyledBackgroundImage />;
}

const StyledBackgroundImage = styled(Image)`
  background-image: src= "/nadine-primeau--ftWfohtjNw-unsplash.jpg";
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  z-index: -1;
`;
