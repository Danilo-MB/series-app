import axios from 'axios';


const BASE_URL = "https://api.tvmaze.com/";

export const getShows = async (page) => 
  await axios.get(`${BASE_URL}shows?page=${page}`);

export const searchShows = async (query) =>
  await axios.get(`${BASE_URL}search/shows?q=${query}`);

export const getEpisodes = async (id) =>
  await axios.get(`${BASE_URL}shows/${id}/episodes`);

