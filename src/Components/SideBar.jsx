import React from "react";

function SideBar({ activeTab, setActiveTab }) {
  return (
    <div className="h-full w-3/12 min-w-[198px] max-w-[330px] bg-black px-4">
      <div className="flex flex-col gap-2">
        <button className="flex cursor-pointer items-center justify-start gap-5 py-3 px-4 text-white/80 transition-all hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5" // ← make it thicker (2, 2.5, 3)
            stroke="currentColor"
            className="h-8 w-8 stroke-white">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 19V6l11-2v13M9 19a3 3 0 11-6 0 3 3 0 016 0zm11-2a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <label className="text-white text-xl font-bold ">TuneWave</label>
        </button>{" "}
      </div>
      <ul className="flex flex-col gap-2">
        <li className="flex cursor-pointer items-center justify-start gap-5 py-3 px-4 text-white/80 transition-all hover:text-white">
          <svg
            className="h-6 w-6 stroke-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <button
            className={`font-medium text-white hover:text-green-500 ${
              activeTab === "home" ? "bg-gray-800" : ""
            }`}
            activeTab={activeTab}
            onClick={() => setActiveTab("home")}>
            {" "}
            Home{" "}
          </button>
        </li>
        <li className="flex cursor-pointer items-center justify-start gap-5 py-3 px-4 text-white/80 transition-all hover:text-white">
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          {/* toggle search */}
          {/* <button
            onClick={toggleSearch}
            className="font-medium text-white hover:text-green-500">
            Search
          </button> */}

          <button
            className={`font-medium text-white hover:text-green-500 ${
              activeTab === " search" ? "bg-gray-800" : ""
            }`}
            activeTab={activeTab}
            onClick={() => setActiveTab(" search")}>
            {" "}
            Search{" "}
          </button>
        </li>
        <li className="flex cursor-pointer items-center justify-start gap-5 py-3 px-4 text-white/80 transition-all hover:text-white">
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
              d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
            />
          </svg>

          <button
            className={`font-medium text-white hover:text-green-500 ${
              activeTab === "playlist" ? "bg-gray-800" : ""
            }`}
            activeTab={activeTab}
            onClick={() => setActiveTab("playlist")}>
            {" "}
            Playlist{" "}
          </button>
        </li>
      </ul>
      <ul className="mt-5 flex flex-col gap-2">
        <li className="flex cursor-pointer items-center justify-start gap-5 py-3 px-4 text-white/80 transition-all hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6 rounded bg-slate-700 stroke-slate-400 p-1">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          <a className="font-medium">Create Playlist</a>
        </li>
        <li className="flex cursor-pointer items-center justify-start gap-5 py-3 px-4 text-white/80 transition-all hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6 rounded  from-blue-400 to-indigo-800 fill-white p-1">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>

          <button
            className={`font-medium text-white hover:text-green-500 ${
              activeTab === "likedSongs" ? "bg-gray-800" : ""
            }`}
            onClick={() => setActiveTab("likedSongs")}>
            {" "}
            Liked Songs{" "}
          </button>
        </li>
      </ul>
      <hr className="mt-5 border-white/30" />
    </div>
  );
}

export default React.memo(SideBar);
