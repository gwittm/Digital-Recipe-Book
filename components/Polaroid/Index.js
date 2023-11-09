import Link from "next/link.js";
import {
  StyledArticle,
  ImageContainer,
  StyledP,
  StyledFigure,
} from "./PolaroidStyle.js";
import { StyledImage } from "../StyledImage.js";

export default function Polaroid({ title, image, id }) {
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
