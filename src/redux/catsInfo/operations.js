import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "7794d774b740489ccc128ca8bb466053";

export const fetchCatsInfo = createAsyncThunk(
  "catsInfo/fetchCatsInfo",
  async (_, thunkAPI) => {
    try {
      const [newsResponse, breedsResponse] = await Promise.all([
        axios.get(
          // `https://gnews.io/api/v4/search?q=cats&max=4&to=2024-08-21T16:27:09Z&apiKey=64e919d5d3f94367a9e32414f4215a3a`
          "https://newsapi.org/v2/everything?q=cats&pageSize=4&apiKey=64e919d5d3f94367a9e32414f4215a3a"
        ),
        axios.get(
          "https://api.thecatapi.com/v1/breeds?limit=10&page=0&api_key=live_XiVBF1o31c0pTxzC266vgKHXoGxefbynHt3EvLywUrB2h74IFCj5ySBMPKhOgPnN"
        ),
      ]);
      console.log(breedsResponse);
      return {
        news: newsResponse.data,
        breeds: breedsResponse.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
