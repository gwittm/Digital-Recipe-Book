import Link from "next/link.js";
import styled from "styled-components";
import { StyledImage } from "./StyledImage.js";

const StyledArticle = styled.article`
  display: flex;
  width: 50%;
  border: 4px solid black;
  border-radius: 0.9rem;
  padding: 0.5rem;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0.5rem;
  height: 10rem;
  width: 12rem;
`;
const StyledP = styled.p`
  display: flex;
  justify-content: center;
`;

const StyledFigure = styled.figure`
  position: relative;
  margin: 8px;
  border: 3px solid black;
  transform: rotate(-8deg);
`;

export default function Card({ title, image, id }) {
  return (
    <StyledArticle>
      <StyledFigure>
        <ImageContainer>
          <Link href={`recipes/${id}`} passHref legacyBehavior>
            <StyledImage
              src={image}
              fill
              sizes="(max-width: 700px) 50vw,
              (max-width: 350px) 25vw,
              30vw"
              alt="...here should be a Picture..."
            />
          </Link>
        </ImageContainer>
        <StyledP>{title}</StyledP>
      </StyledFigure>
    </StyledArticle>
  );
}
