import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Search from "./Pages/Search";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Playlist from "./Pages/Playlist";

function App() {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/dashboard" />}></Route>

        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" />}>
          {/* Nested routes inside dashboard */}
          {/* <Route path="home" element={<Home />} /> */}
          <Route path="search" element={<Search />} />
          {/* <Route path="liked" element={<LikedSongs />} />
      <Route index element={<Home />} /> default page */}
          <Route path="playlist" element={<Playlist />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
