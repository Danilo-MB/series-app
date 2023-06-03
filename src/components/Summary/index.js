import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { 
  Wrapper, 
  SummaryText,
  ReadMoreText,
} from "./styled";


const SUMMARY_LENGTH_LIMIT = 150;

const Summary = ({ summary, align }) => {

  const [showLongSummary, setShowLongSummary] = useState(false);

  const getSummary = () => {
    if (showLongSummary) {
      return summary.replace(/<[^>]+>/g, "");
    }
    return `${summary.replace(/<[^>]+>/g, "").slice(0, SUMMARY_LENGTH_LIMIT)}${" (...)"}`;
  };

  return (
    <Wrapper>
      <SummaryText align={align}>{getSummary()}</SummaryText>
      <TouchableOpacity onPress={() => setShowLongSummary(!showLongSummary)}>
        <ReadMoreText>
          {showLongSummary ? "Read less" : "Read more"}
        </ReadMoreText>
      </TouchableOpacity>
    </Wrapper>
  )
};

export default Summary;