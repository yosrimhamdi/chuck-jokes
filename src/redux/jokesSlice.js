import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import _ from 'lodash';

import joke from '../api/joke';

const UN_CATEGORIZED = 'uncategorized';

const initialState = {
  list: null,
  categories: [],
  selectedCategory: 'money',
};

export const getCategories = createAsyncThunk(
  'jokes/getCategories',
  async () => {
    const response = await joke.get('/categories');

    return response.data;
  }
);

export const getJokes = createAsyncThunk('jokes/getJokes', async () => {
  const response = await joke.get('/search?query=all');

  return response.data;
});

const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
    [getJokes.fulfilled]: (state, action) => {
      const { result } = action.payload;
      const { categories } = current(state);

      const jokes = { [UN_CATEGORIZED]: [] };

      categories.forEach(category => {
        jokes[category] = [];
      });

      result.forEach(joke => {
        jokes[joke.categories[0] ?? UN_CATEGORIZED].push(
          _.omit(joke, 'categories')
        );
      });

      state.list = jokes;
    },
  },
});

export const { selectCategory } = jokesSlice.actions;

export default jokesSlice.reducer;
