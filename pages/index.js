import Link from "next/link.js";
import styled from "styled-components";
import useSWR from "swr";
import SearchBar from "@/components/Search/SearchBar";
import AllRecipesList from "@/components/AllRecipesList";

export default function Home() {
  return (
    <StyledBox>
      <SearchBar />
      <StyledH2>All my Recipes</StyledH2>
      <AllRecipesList />
    </StyledBox>
  );
}

//Styling

const StyledH2 = styled.h2`
  padding: 10px;
  text-align: center;
`;

const StyledBox = styled.section`
  border: solid grey;
  width: 400px;
`;
