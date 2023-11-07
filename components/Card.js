import Link from "next/link.js";
import styled from "styled-components";

export default function Card({ title, id }) {
  return (
    <Link href={`recipes/${id}`} passHref legacyBehavior>
      <p>{title}</p>
    </Link>
  );
}
