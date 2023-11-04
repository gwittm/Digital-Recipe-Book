import Link from "next/link.js";



// const StyledArticle = styled.article`
//   display: flex;
//   width: 50%;
//   border: 4px solid black;
//   border-radius: 0.9rem;
//   padding: 0.5rem;
// `;

// const ImageContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   margin: 0.5rem;
//   height: 10rem;
//   width: 12rem;
// `;
// const StyledP = styled.p`
//   display: flex;
//   justify-content: center;
// `;

// const StyledFigure = styled.figure`
//   position: relative;
//   margin: 8px;
//   border: 3px solid black;
//   transform: rotate(-8deg);
// `;

// const Anchor = styled.a`
//   &::after {
//     content: "";
//     display: block;
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//   }
// `;

// const ScreenReaderOnly = styled.span`
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   margin: -1px;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   border-width: 0;
// `;

export default function Card({ title, image, id }) {
  return (
    <article>
      <figure>
        <div>
       
          <image
            src={image}
            fill
            sizes="(max-width: 700px) 50vw,
              (max-width: 350px) 25vw,
              30vw"
            alt="...here should be a Picture..."
          />
          
        </div>
        <Link href={`recipes/${id}`} passHref legacyBehavior>
        <p>{title}</p>
        </Link>
      </figure>
      
       
    </article>
  );
}