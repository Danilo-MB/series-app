import React from "react";
import { Wrapper } from "./styled";
import GoBackButton from "../../components/GoBackButton";
import ImageAndName from "./components/ImageAndName";
import DaysAndTime from "./components/DaysAndTime";
import Genres from "./components/Genres";
import Summary from "./components/Summary";


const SeriesInfo = ({ route, navigation }) => {

  const { show } = route.params;

  return (
    <Wrapper>
      <GoBackButton onPress={() => navigation.goBack()} />
      <ImageAndName 
        showName={show?.name}
        image={show?.image.medium}
      />
      <DaysAndTime 
        days={show?.schedule?.days.join(", ")}
        time={show?.schedule?.time}
      />
      <Genres genres={show?.genres} />
      <Summary summary={show?.summary} />
    </Wrapper>
  );
};

export default SeriesInfo;