import React from "react";
import {
  Wrapper,
  Days,
  Time,
} from "./styled";


const DaysAndTime = ({ days, time }) => {
  return (
    <Wrapper>
      <Days>{days}</Days>
      <Time>{time}</Time>
    </Wrapper>
  )
};

export default DaysAndTime;