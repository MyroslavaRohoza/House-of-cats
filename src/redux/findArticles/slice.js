import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

const findArticeSlice = createSlice({
    name: "findArticle",
    initialState: initialState.find,
    reducers: {
       setArticleTitle(state, action) {
            state.title = action.payload;
        }
    },
})

export const { setArticleTitle } = findArticeSlice.actions;
export const findArticleReducer = findArticeSlice.reducer;

