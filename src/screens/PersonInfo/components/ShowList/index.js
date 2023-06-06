import React from "react";
import { View } from "react-native";
import { 
  Wrapper,
  ShowsHeader,
  NoInformationAvailable,
} from "./styled";
import ShowRow from "../ShowRow";
import { useNavigation } from "@react-navigation/native";


const ShowList = ({ shows }) => {

  const navigation = useNavigation();

  return (
    <Wrapper>
        {shows?.length === 0 ?
        <NoInformationAvailable>
          There´s no information about this person
        </NoInformationAvailable> :
        <>
          {shows?.length > 0 &&
            <ShowsHeader>Known for shows as:</ShowsHeader>
          }
          {shows?.map((show) => (
            <View key={show.id}>
              <ShowRow 
                key={show.id}
                showName={show.name}
                onPress={() => navigation.navigate("ShowInfo", { show })}
              />
            </View>
          ))}
        </>}
    </Wrapper>
  )
};

export default ShowList;