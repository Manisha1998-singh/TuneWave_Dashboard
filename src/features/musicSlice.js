import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchSongs = createAsyncThunk(
  "music/fetchSongs",
  async (artistName) => {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${artistName}&entity=song&limit=150`
    );

    const data = await response.json();
    return data.results; // Deezer returns songs inside "data"
  }
);

const musicSlice = createSlice({
  name: "music",
  initialState: {
    songs: [],
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.songs = action.payload;
      })
      .addCase(fetchSongs.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch songs";
      });
  },
});
export default musicSlice.reducer;
