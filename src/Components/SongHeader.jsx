import React from "react";

function SongHeader({ selectSong }) {
  return (
    <div>
      {" "}
      <div className="mx-auto my-5">
        <h1 className="text-4xl font-bold text-white">
          {selectSong?.trackName}
        </h1>
        <p className="text-white/70">{selectSong?.artistName}</p>
      </div>
      <div
        className="mx-auto my-5 h-[250px] w-11/12 bg-white bg-cover bg-center rounded-xl shadow-md"
        style={{
          backgroundImage: `url(${
            selectSong?.artworkUrl100 ||
            "https://images.unsplash.com/photo-1662560884455-e89e8dcfa7ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          })`,
        }}></div>
    </div>
  );
}

export default React.memo(SongHeader);
