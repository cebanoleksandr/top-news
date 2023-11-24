import { Article } from "../utils/types";

const SET_NEWS = 'SET_NEWS';

const initialState: InitialState = {
  items: [],
};

type InitialState = {
  items: Article[],
};

const newsReducer = (
  state = initialState,
  action: ActionTypes,
): InitialState => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        items: action.payload,
      };
  
    default:
      break;
  }
  return state;
}

//action creators
export const setNewsAC = (news: Article[]): SetNews => {
  return {
    type: SET_NEWS,
    payload: news,
  }
}

type SetNews = {
  type: typeof SET_NEWS,
  payload: Article[],
}

type ActionTypes = SetNews;

export default newsReducer;
