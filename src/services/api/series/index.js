import axios from 'axios';


const BASE_URL = "https://api.tvmaze.com/";

export const getShows = async (page) => 
  await axios.get(`${BASE_URL}shows?page=${page}`)
