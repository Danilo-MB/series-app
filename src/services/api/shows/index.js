import axios from 'axios';
import { BASE_URL } from '../constants';


export const getShows = async (page) => 
  await axios.get(`${BASE_URL}shows?page=${page}`);

export const searchShows = async (query) =>
  await axios.get(`${BASE_URL}search/shows?q=${query}`);

export const getEpisodes = async (id) =>
  await axios.get(`${BASE_URL}shows/${id}/episodes`);

