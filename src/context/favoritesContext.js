import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    saveFavorites();
  }, [favorites]);

  const loadFavorites = async () => {
    try {
      const favoritesData = await AsyncStorage.getItem('favorites');
      if (favoritesData) {
        setFavorites(JSON.parse(favoritesData));
      }
    } catch (error) {
      console.log('Error loading favorites:', error);
    }
  };

  const saveFavorites = async () => {
    try {
      const favoritesData = JSON.stringify(favorites);
      await AsyncStorage.setItem('favorites', favoritesData);
    } catch (error) {
      console.log('Error saving favorites:', error);
    }
  };

  const addFavorite = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  const removeFavorite = (item) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== item.id));
  };

  const isFavorite = (item) => {
    return favorites.some((fav) => fav.id === item.id);
  };

  const getSortedFavorites = () => {
    const sortedFavorites = [...favorites].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    return sortedFavorites;
  };

  return (
    <FavoritesContext.Provider 
      value={{ 
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        getSortedFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
