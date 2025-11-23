import React, { useCallback } from "react";
import MusicList from "../Components/MusicList";
import BackButton from "../Components/BackButton";

function Playlist() {
  const noop = useCallback(() => {}, []);
  return (
    <div>
      <BackButton />
      <MusicList onSongSelect={noop} />
    </div>
  );
}
export default React.memo(Playlist);
