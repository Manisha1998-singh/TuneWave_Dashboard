import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchSongs } from "../features/musicSlice";

function MusicList({ onSongSelect }) {
  const dispatch = useDispatch();
  const { songs = [], loading } = useSelector((state) => state.music);
  const [isPlaying, setIsPlaying] = useState();
  // const [artist, setArtist] = useState();

  useEffect(() => {
    dispatch(fetchSongs("arijit singh"));
  }, [dispatch]);

  const audioRef = useRef(null);

  const handlePlay = () => {
    if (!audioRef.current) return;

    // Toggle play/pause
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(false);
    } else {
      audioRef.current.pause();
      setIsPlaying(true);
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>🎧 iTunes Music Search</h2>

      <div style={{ marginTop: "20px" }} className="flex flex-wrap gap-3">
        {songs.length > 0
          ? songs.slice(0, 20).map((song) => (
              <div
                key={song.trackId}
                onClick={() => onSongSelect && onSongSelect(song)}>
                <article className="song-cover relative h-[290px] w-[210px] overflow-hidden rounded-lg bg-zinc-800/30 hover:bg-zinc-800/90 transition-all p-3 drop-shadow-lg">
                  <button
                    className="absolute right-4 top-36 rounded-full bg-green-500 p-3"
                    onClick={handlePlay}>
                    {isPlaying ? (
                      // PAUSE SVG
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6h1.5v12H10zM13.5 6H15v12h-1.5z"
                        />
                      </svg>
                    ) : (
                      // PLAY SVG
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                        />
                      </svg>
                    )}
                  </button>
                  <audio
                    ref={audioRef}
                    src={song.previewUrl}
                    className="hidden"></audio>
                  <img
                    className="h-[60%] w-full object-cover"
                    src={song.artworkUrl100}
                    alt={song.trackName}
                  />

                  {/* <h1 className="mt-3 text-white">Artist 1</h1> */}
                  <p className="mt-2 overflow-hidden truncate text-ellipsis text-sm text-white">
                    <b>{song.trackName}</b> — {song.artistName}
                  </p>
                </article>
              </div>
            ))
          : !loading && <p>No songs found.</p>}
      </div>
    </div>
  );
}

export default MusicList;
