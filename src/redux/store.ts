import { combineReducers, createStore, Store } from 'redux';
import newsReducer from './newsReducer';

const reducers = combineReducers({
  news: newsReducer,
});

const store: Store<RootState> = createStore(reducers);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;

export default store;
