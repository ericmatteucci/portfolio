import { combineReducers, createStore } from 'redux';

const combinedReducer = combineReducers({
});

const initializeStore = (initialState) => {
  return createStore(combinedReducer, initialState);
};

export default initializeStore;

