import React from "react";

//import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSongs } from "../features/musicSlice";
import MusicList from "../Components/MusicList";
import { useState } from "react";

function Search() {
  const dispatch = useDispatch();
  //const { error, loading } = useSelector((state) => state.music);
  const [artist, setArtist] = useState("");
  const [searched, setSearched] = useState(false);

  function handleSearch() {
    if (artist.trim() === "") return;
    dispatch(fetchSongs(artist));
    setSearched(true);
  }

  return (
    <div>
      <input
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Enter artist name"
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button onClick={handleSearch}>Search</button>

      {searched && <MusicList />}
    </div>
  );
}

export default Search;
