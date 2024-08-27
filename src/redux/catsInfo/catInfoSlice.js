import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchCatsInfo } from "./operations";

import { selectCatFacts } from "./selectors";
import { selectArticleTitle } from "../findArticles/selectors";
import { initialState } from "../initialState";

const catsInfoSlice = createSlice({
  name: "catsInfo",
  initialState: initialState.catsInfo,
  extraReducers: (builder) => {
    builder.addCase(fetchCatsInfo.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchCatsInfo.fulfilled, (state, action) => {
      console.log('articles',action.payload.news.articles);
      state.catsFacts = action.payload.news.articles;
      state.catsBreeds = action.payload.breeds;

      state.loading = false;
    });

    builder.addCase(fetchCatsInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export const catsInfoReducer = catsInfoSlice.reducer;

export const selectArticle = createSelector(
  [selectCatFacts, selectArticleTitle],
  (articles, title) => {
    return (
      Array.isArray(articles) &&
      articles.find(
        (article) => article.title.toLowerCase() === title.toLowerCase()
      )
    );
  }
);
