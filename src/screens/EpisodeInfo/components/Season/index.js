import React from "react";
import { SeasonText } from "./styled";


const Season = ({ season }) => {
  return (
    <SeasonText>{`Season ${season}`}</SeasonText>
  )
};

export default Season;