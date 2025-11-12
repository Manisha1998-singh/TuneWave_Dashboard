import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../features/musicSlice";

function MusicList({ onSongSelect }) {
  const dispatch = useDispatch();
  const { songs = [], loading } = useSelector((state) => state.music);
  // const [artist, setArtist] = useState();

  useEffect(() => {
    dispatch(fetchSongs("arijit singh"));
  }, [dispatch]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎧 iTunes Music Search</h2>

      {/* <input
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Enter artist name"
        style={{ padding: "8px", marginRight: "10px" }}
      /> */}

      {/* <button onClick={() => dispatch(fetchSongs(artist))}>Search</button> */}

      {/* {loading && <p>Loading songs...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>} */}

      <div style={{ marginTop: "20px" }} className="flex flex-wrap gap-3">
        {songs.length > 0
          ? songs.slice(0, 20).map((song) => (
              <div
                key={song.trackId}
                onClick={() => onSongSelect && onSongSelect(song)}>
                {/* <img
                  src={song.artworkUrl100}
                  alt={song.trackName}
                  style={{ width: "80px", height: "80px", borderRadius: "8px" }}
                /> */}

                <article className="song-cover relative h-[290px] w-[210px] overflow-hidden rounded-lg bg-zinc-800/30 hover:bg-zinc-800/90 transition-all p-3 drop-shadow-lg">
                  <button className="absolute right-4 top-36 rounded-full bg-green-500 p-3">
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
                  </button>
                  <img
                    className="h-[60%] w-full object-cover"
                    src={song.artworkUrl100}
                    alt={song.trackName}
                  />
                  {/* <h1 className="mt-3 text-white">Artist 1</h1> */}
                  <p className="mt-2 overflow-hidden truncate text-ellipsis text-sm text-white">
                    <b>{song.trackName}</b> — {song.artistName}
                    <audio controls src={song.previewUrl}></audio>
                  </p>
                </article>

                <div>
                  <p></p>
                </div>
              </div>
            ))
          : !loading && <p>No songs found.</p>}
      </div>
    </div>
  );
}

export default MusicList;
