import React, { useEffect } from "react";
import { Wrapper, StyledScrollView } from "./styled";
import ImageAndName from "./components/ImageAndName";
import ShowList from "./components/ShowList";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useFetchCastCredits } from "../../utils/useFetchCastCredits";
import { useNavigation } from "@react-navigation/native";


const PersonInfo = ({ route }) => {

  const navigation = useNavigation();
  const { person } = route.params;
  const { castCredits, loading, error } = useFetchCastCredits(person?.id);

  if (error) return <Error />

  useEffect(() => {
    navigation.getParent()?.setOptions({
      headerShown: false,
    });
    return () => navigation.getParent()?.setOptions({
      headerShown: true,
    });
   }, [navigation]);

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