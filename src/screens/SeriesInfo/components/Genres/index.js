import React from "react";
import {
  Wrapper,
  GenreWrapper,
  Genre,
} from "./styled";


const Genres = ({ genres }) => {
  return (
    <Wrapper>
    {genres.map((genre) => (
      <GenreWrapper key={genre} disabled>
        <Genre>{genre}</Genre>
      </GenreWrapper>
    ))}
    </Wrapper>
  )

};

export default Genres;