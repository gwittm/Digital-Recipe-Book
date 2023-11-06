import Link from "next/link.js";

import { StyledImage } from "./StyledImage.js";

export default function Card({ title, image, id }) {
  return (
    <figure>
      {/* <image
          src={image}
          fill
          sizes="(max-width: 700px) 50vw,
              (max-width: 350px) 25vw,
              30vw"
          alt="...here should be a Picture..."
        /> */}

      <Link href={`recipes/${id}`} passHref legacyBehavior>
        <p>{title}</p>
      </Link>
    </figure>
  );
}
