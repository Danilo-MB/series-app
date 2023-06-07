import React, { useEffect } from "react";
import { BackHandler } from "react-native";
import PINStack from "./src/screens/Navigation/PINStack";
import { FavoritesProvider } from "./src/context/favoritesContext";


function App() {

  useEffect(() => {
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <FavoritesProvider>
      <PINStack />
    </FavoritesProvider>
  );
  
};

export default App;
