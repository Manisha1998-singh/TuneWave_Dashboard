import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import MusicList from "../Components/MusicList";
import { Outlet } from "react-router-dom";
import Search from "./Search";
import { useState } from "react";
import LikedSongs from "./LikedSongs";
import SideBar from "../Components/SideBar";
import Playlist from "./Playlist";
import NavBar from "../Components/NavBar";
import PlayerBar from "../Components/PlayerBar";
import SongHeader from "../Components/SongHeader";
import SectionHeader from "../Components/SectionHeader";
function Dashboard() {
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
      <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />

      <section className="relative flex h-screen w-full">
        {/* Player moved out */}
        <PlayerBar selectSong={selectSong} />

        <div className="main-content h-[calc(100%-90px)] w-full overflow-y-scroll bg-black/95 py-1">
          <div className="mx-auto h-full w-11/12 py-2">
            {/* Navbar */}
            <NavBar user={user} handleLogout={handleLogout} />

            {/* Header Song Info */}
            <SongHeader selectSong={selectSong} />

            {/* New Music */}
            <section className="song-section mb-6">
              <SectionHeader title="New Music" />
              <div className="flex flex-wrap gap-3">
                <MusicList onSongSelect={setSelectSong} />
              </div>
            </section>

            {/* Tabs */}
            {activeTab === "playlist" && <Playlist />}
            {activeTab === "likedSongs" && <LikedSongs />}
            {activeTab === "search" && <Search />}
          </div>
        </div>

        <Outlet />
      </section>
    </div>
  );
}
export default Dashboard;
