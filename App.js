import React from "react";
import PINStack from "./src/screens/Navigation/PINStack";
import NavigationDrawer from "./src/screens/Navigation/Drawer";
import { FavoritesProvider } from "./src/context/favoritesContext";


function App() {
  return (
    <FavoritesProvider>
      {/* <NavigationDrawer /> */}
      <PINStack />
    </FavoritesProvider>
  );
};

export default App;
