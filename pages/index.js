import Link from "next/link.js";
import FuseSearchRecipe from "@/components/Search/FuseSearchRecipe";

export default function Home() {
  return (
    <>
      <h2>All my Recipes</h2>
      <FuseSearchRecipe />
    </>
  );
}
