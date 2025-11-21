import React from "react";
import MusicList from "../Components/MusicList";
import BackButton from "../Components/BackButton";

function Playlist() {
  return (
    <div>
      <BackButton />
      <MusicList />
    </div>
  );
}

export default Playlist;
