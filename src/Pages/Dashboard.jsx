import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import MusicList from "../Components/MusicList";
import { Outlet } from "react-router-dom";
import Search from "./Search";
import { useState } from "react";

import SideBar from "../Components/SideBar";
import Playlist from "./Playlist";
function Dashboard() {
  //const [showSearch, setShowSearch] = useState(false);
  // const toggleSearch = () => {
  //   setShowSearch((prev) => !prev);
  // };
  const [selectSong, setSelectSong] = useState(null);
  const [activeTab, setActiveTab] = useState("home");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="div-dashboard">
      <SideBar setActiveTab={setActiveTab} />
      <div className="flex-1 bg-gray-900 p-6 text-white">
        {activeTab === "likedSongs" && <LikedSongs />}
        {activeTab === "search" && <Search />}
        {activeTab === "playlist" && <Playlist />}
      </div>
      <Outlet />
      {/* <main className="flex-1 p-5">
        {/* Collapsible search section */}
      {/* <div
        className={`overflow-hidden transition-all duration-500 ${
          showSearch ? "max-h-500 " : "max-h-0"
        } bg-gray-800 p-4 rounded mb-4`}>
        <Outlet /> {/* Search content goes here */}
      {/* </div> */}

      {/* Other nested pages (Home, Liked, etc.) */}
      {/* {!showSearch && <Outlet />} */}
      {/* </main> */}
      <section className="relative flex h-screen w-full">
        <div className="absolute bottom-0 z-40 flex h-[90px] w-full items-center justify-between border-t border-t-white/20 bg-zinc-900 pb-5 pt-3">
          <div className="flex items-center gap-4 px-3">
            <img
              className="h-[60px] w-[60px]"
              src={
                selectSong?.artworkUrl100 ||
                "https://images.unsplash.com/photo-1663094623776-68b436151405?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=363&q=80"
              }
            />
            <div>
              <div className="font-medium text-white">
                <b>{selectSong?.trackName || "Track 1"}</b>
                <p className="text-sm font-normal text-white">
                  {selectSong?.artistName || "Artist Name"}
                </p>
              </div>
            </div>
            <div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8 rounded stroke-white/50 p-1 transition-all hover:stroke-white">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8 rounded stroke-white/50 p-1 transition-all hover:stroke-white">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex max-w-[700px] flex-1 flex-col gap-5">
            <div className="flex w-full justify-center gap-4">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-5 h-6 w-6 stroke-white/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 stroke-white">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
                  />
                </svg>
              </button>
              <button className="flex items-center justify-center rounded-full bg-white p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 fill-black stroke-black">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 stroke-white">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                  />
                </svg>
              </button>

              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="ml-4 h-6 w-6 stroke-white/30">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                  />
                </svg>
              </button>
            </div>
            <progress value="80" className="h-[5px] w-full rounded-full" />
          </div>

          <div className="flex items-center gap-4 px-3">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-white/25"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-white/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-white/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </button>

            <div className="flex">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-white/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="main-content h-[calc(100%-90px)] w-full overflow-y-scroll bg-black/95 py-1">
          <div className="mx-auto h-full w-11/12 py-2">
            <nav className="flex w-full items-start justify-between">
              <div className="flex gap-5">
                {/* <button className="flex items-center justify-center rounded-full bg-black p-2"> */}
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 stroke-white">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button className="flex items-center justify-center rounded-full bg-black p-2">*/}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 stroke-white">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
                {/* </button> */}
                <Search />
              </div>

              <div className="flex cursor-pointer items-center gap-3 rounded-full bg-black px-4">
                <img
                  className="h-9 w-9 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                />
                <span className="text-white">{user ? user.name : "Guest"}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-white hover:text-gray-300 transition">
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
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </nav>
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
            <section className="song-section mb-6">
              <div className="mb-4 flex justify-between py-3">
                <h1 className="text-3xl font-bold text-white">New Music</h1>
                <h1 className="text-white/50">Explore more</h1>
              </div>
              <div className="flex flex-wrap gap-3">
                <MusicList onSongSelect={setSelectSong} />
              </div>
            </section>
            <section className="song-section mb-6">
              <div className="mb-4 flex justify-between py-3">
                <h1 className="text-3xl font-bold text-white">Popular</h1>
                <h1 className="text-white/50">Explore more</h1>
              </div>
              <div className="flex flex-wrap gap-3">
                <article className="song-cover relative h-[290px] w-[210px] overflow-hidden rounded-lg bg-zinc-800/30 hover:bg-zinc-800/90 transition-all p-3 drop-shadow-lg">
                  <button className="fade-in absolute right-4 top-36 rounded-full bg-green-500 p-3">
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
                    src="https://images.unsplash.com/photo-1635886439542-6cf4af7454e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                  />
                  <h1 className="mt-3 text-white">Artist 1</h1>
                  <p className="mt-2 overflow-hidden truncate text-ellipsis text-sm text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur enim pariatur ut dolore in corporis maiores
                    praesentium nulla dolorum laudantium debitis sapiente,
                    mollitia minima cumque nobis beatae consectetur, a eum.
                  </p>
                </article>

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
                    src="https://images.unsplash.com/photo-1657279597871-8b5ded5f9778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80"
                  />
                  <h1 className="mt-3 text-white">Artist 1</h1>
                  <p className="mt-2 overflow-hidden truncate text-ellipsis text-sm text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur enim pariatur ut dolore in corporis maiores
                    praesentium nulla dolorum laudantium debitis sapiente,
                    mollitia minima cumque nobis beatae consectetur, a eum.
                  </p>
                </article>

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
                    src="https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  />
                  <h1 className="mt-3 text-white">Artist 1</h1>
                  <p className="mt-2 overflow-hidden truncate text-ellipsis text-sm text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur enim pariatur ut dolore in corporis maiores
                    praesentium nulla dolorum laudantium debitis sapiente,
                    mollitia minima cumque nobis beatae consectetur, a eum.
                  </p>
                </article>

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
                    src="https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  />
                  <h1 className="mt-3 text-white">Artist 1</h1>
                  <p className="mt-2 overflow-hidden truncate text-ellipsis text-sm text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur enim pariatur ut dolore in corporis maiores
                    praesentium nulla dolorum laudantium debitis sapiente,
                    mollitia minima cumque nobis beatae consectetur, a eum.
                  </p>
                </article>

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
                    src="https://images.unsplash.com/photo-1650954913935-05f7a819b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  />
                  <h1 className="mt-3 text-white">Artist 1</h1>
                  <p className="mt-2 overflow-hidden truncate text-ellipsis text-sm text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur enim pariatur ut dolore in corporis maiores
                    praesentium nulla dolorum laudantium debitis sapiente,
                    mollitia minima cumque nobis beatae consectetur, a eum.
                  </p>
                </article>

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
                    src="https://images.unsplash.com/photo-1620298106068-62c6a8bd05cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  />
                  <h1 className="mt-3 text-white">Artist 1</h1>
                  <p className="mt-2 overflow-hidden truncate text-ellipsis text-sm text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur enim pariatur ut dolore in corporis maiores
                    praesentium nulla dolorum laudantium debitis sapiente,
                    mollitia minima cumque nobis beatae consectetur, a eum.
                  </p>
                </article>
              </div>
            </section>
            <section className="song-section mb-6">
              <div className="mb-4 flex justify-between py-3">
                <h1 className="text-3xl font-bold text-white">Popular</h1>
                <h1 className="text-white/50">Explore more</h1>
              </div>
              <div className="flex flex-wrap gap-3">
                <article className="song-cover relative h-[290px] w-[210px] overflow-hidden rounded-lg bg-zinc-800/30 hover:bg-zinc-800/90 transition-all p-3 drop-shadow-lg">
                  <button className="fade-in absolute right-4 top-36 rounded-full bg-green-500 p-3">
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
                    src="https://images.unsplash.com/photo-1635886439542-6cf4af7454e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                  />
                  <h1 className="mt-3 text-white">Artist 1</h1>
                  <p className="mt-2 overflow-hidden truncate text-ellipsis text-sm text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur enim pariatur ut dolore in corporis maiores
                    praesentium nulla dolorum laudantium debitis sapiente,
                    mollitia minima cumque nobis beatae consectetur, a eum.
                  </p>
                </article>

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
                    src="https://images.unsplash.com/photo-1657279597871-8b5ded5f9778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80"
                  />
                  <h1 className="mt-3 text-white">Artist 1</h1>
                  <p className="mt-2 overflow-hidden truncate text-ellipsis text-sm text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur enim pariatur ut dolore in corporis maiores
                    praesentium nulla dolorum laudantium debitis sapiente,
                    mollitia minima cumque nobis beatae consectetur, a eum.
                  </p>
                </article>

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
                    src="https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  />
                  <h1 className="mt-3 text-white">Artist 1</h1>
                  <p className="mt-2 overflow-hidden truncate text-ellipsis text-sm text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur enim pariatur ut dolore in corporis maiores
                    praesentium nulla dolorum laudantium debitis sapiente,
                    mollitia minima cumque nobis beatae consectetur, a eum.
                  </p>
                </article>

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
                    src="https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  />
                  <h1 className="mt-3 text-white">Artist 1</h1>
                  <p className="mt-2 overflow-hidden truncate text-ellipsis text-sm text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur enim pariatur ut dolore in corporis maiores
                    praesentium nulla dolorum laudantium debitis sapiente,
                    mollitia minima cumque nobis beatae consectetur, a eum.
                  </p>
                </article>

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
                    src="https://images.unsplash.com/photo-1650954913935-05f7a819b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  />
                  <h1 className="mt-3 text-white">Artist 1</h1>
                  <p className="mt-2 overflow-hidden truncate text-ellipsis text-sm text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur enim pariatur ut dolore in corporis maiores
                    praesentium nulla dolorum laudantium debitis sapiente,
                    mollitia minima cumque nobis beatae consectetur, a eum.
                  </p>
                </article>

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
                    src="https://images.unsplash.com/photo-1620298106068-62c6a8bd05cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  />
                  <h1 className="mt-3 text-white">Artist 1</h1>
                  <p className="mt-2 overflow-hidden truncate text-ellipsis text-sm text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur enim pariatur ut dolore in corporis maiores
                    praesentium nulla dolorum laudantium debitis sapiente,
                    mollitia minima cumque nobis beatae consectetur, a eum.
                  </p>
                </article>
              </div>
            </section>
            <Playlist />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
