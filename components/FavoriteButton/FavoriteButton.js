import React, { useState } from "react";

import styled from "styled-components";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <StyledFavoriteButton onClick={handleToggleFavorite}>
        {isFavorite ? "is Favorite" : "not my favorite"}
      </StyledFavoriteButton>
      {isFavorite && <p>This item is in your favorites!</p>}
    </>
  );
}

export const StyledFavoriteButton = styled.button`
  padding: 5px;
  margin-left: 400px;
  margin-top: -40px;
  border-radius: 800px;
`;
