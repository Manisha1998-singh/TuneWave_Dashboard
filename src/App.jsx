import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Search from "./Pages/Search";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/dashboard" />}></Route>

          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/login" />}></Route>
          <Route path="*" element={<Navigate to="/login" />}></Route>
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
