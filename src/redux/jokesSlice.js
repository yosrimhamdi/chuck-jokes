import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import _ from 'lodash';

import joke from '../api/joke';

const UNCATEGORIZED = 'uncategorized';

const initialState = {
  list: null,
  categories: [],
  selectedCategory: 'explicit',
  term: '',
  isLoadingCategories: false,
  isLoadingJokes: false,
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
    setTerm: (state, action) => {
      state.term = action.payload;
    },
  },
  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.isLoadingCategories = false;
    },
    [getJokes.fulfilled]: (state, action) => {
      const { result } = action.payload;
      const { categories } = current(state);

      const jokes = { [UNCATEGORIZED]: [] };

      categories.forEach(category => {
        jokes[category] = [];
      });

      result.forEach(joke => {
        const j = _.omit(joke, 'categories');

        j.likes = Math.floor(Math.random() * 250) + 1;
        j.dislikes = Math.floor(Math.random() * Math.floor(j.likes / 2));

        jokes[joke.categories[0] ?? UNCATEGORIZED].push(j);
      });

      state.list = jokes;
      state.isLoadingJokes = false;
    },
    [getJokes.pending]: state => {
      state.isLoadingJokes = true;
    },
    [getJokes.rejected]: state => {
      state.isLoadingJokes = false;
    },
    [getCategories.pending]: state => {
      state.isLoadingCategories = true;
    },
    [getCategories.rejected]: state => {
      state.isLoadingCategories = false;
    },
  },
});

export const { selectCategory, setTerm } = jokesSlice.actions;

export default jokesSlice.reducer;
