import { configureStore } from '@reduxjs/toolkit';

import jokesReducer from './jokesSlice';

export default configureStore({
  reducer: { jokes: jokesReducer },
});
