import axios from "axios";
import { ResponseServer } from "../utils/types";

export const API_KEY = '269b9942df694f9da4c194e33b19a376';
export const BASE_URL = 'https://gnews.io/api/v4';

export const getNews = (
  country: string,
  category: string,
  query: string,
  page: number,
) => {
  const countryParams = !!country ? `country=${country}&` : `country=ua&`;
  const categoryParams = !!category && category !== 'general' ? `category=${category}&` : '';
  const queryParams = !!query ? `q=${query}&` : '';

  return axios.get<ResponseServer>(`${BASE_URL}/top-headlines?${countryParams}${categoryParams}${queryParams}page=${page}&apikey=${API_KEY}`);
}
