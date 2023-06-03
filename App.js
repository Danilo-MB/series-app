import React from "react";
import SeriesStack from "./src/screens/Navigation";
import { FavoritesProvider } from "./src/context/favoritesContext";


function App() {
  return (
    <FavoritesProvider>
      <SeriesStack />
    </FavoritesProvider>
  );
};

export default App;
