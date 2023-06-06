import axios from 'axios';
import { BASE_URL } from '../constants';


export const getPeople = async (page) => 
  await axios.get(`${BASE_URL}people?page=${page}`);

export const searchPeople = async (query) => 
  await axios.get(`${BASE_URL}/search/people?q=${query}`);

export const getCastCredits = async (id) => 
  await axios.get(`${BASE_URL}people/${id}/castcredits?embed=show`);