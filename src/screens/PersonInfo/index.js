import React from "react";
import { Wrapper, StyledScrollView } from "./styled";
import ImageAndName from "./components/ImageAndName";
import ShowList from "./components/ShowList";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useFetchCastCredits } from "../../utils/useFetchCastCredits";


const PersonInfo = ({ route }) => {

  const { person } = route.params;
  const { castCredits, loading, error } = useFetchCastCredits(person?.id);

  if (error) return <Error />

  return (
    <Wrapper>
      <StyledScrollView>
          <ImageAndName
            showName={person?.name}
            image={person?.image?.medium}
          />
          {loading ?  
            <Loading position="relative" /> :
            <ShowList shows={castCredits} />
          }
      </StyledScrollView>
    </Wrapper>
  )
};

export default PersonInfo;