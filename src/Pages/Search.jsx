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
    <div className="flex w-full items-start justify-between">
      <input
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Enter artist name"
        className="p-2 mr-2 border border-white text-white bg-transparent rounded-md placeholder-white focus:outline-none"
      />

      <button
        onClick={handleSearch}
        className="gap-2 px-4 py-2 mb-4 
                 bg-gray-800 text-white rounded-xl 
                 hover:bg-gray-700 active:scale-95 
                 transition-all duration-200 shadow-lg   ">
        {" "}
        Search
      </button>

      {searched && <MusicList />}
    </div>
  );
}

export default React.memo(Search);
