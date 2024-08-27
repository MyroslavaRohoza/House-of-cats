import { configureStore } from "@reduxjs/toolkit";

import { findArticleReducer } from "./findArticles/slice";
import { catsInfoReducer } from "./catsInfo/catInfoSlice";

export const store = configureStore({
  reducer: {
    catsInfo: catsInfoReducer,
    findArticle: findArticleReducer,
  },
});
