import axios from "axios";
import { ResponseServer } from "../utils/types";

export const API_KEY = '01db197f238e491ba7bdaddae6ea45cc';
export const BASE_URL = 'https://newsapi.org/v2';

export const getNews = (
  country: string,
  category: string,
  query: string,
  page: number,
) => {
  const countryParams = !!country ? `country=${country}&` : `country=ua&`;
  const categoryParams = !!category && category !== 'general' ? `category=${category}&` : '';
  const queryParams = !!query ? `q=${query}&` : '';

  return axios.get<ResponseServer>(`${BASE_URL}/top-headlines?${countryParams}${categoryParams}${queryParams}page=${page}&apiKey=${API_KEY}`);
}
