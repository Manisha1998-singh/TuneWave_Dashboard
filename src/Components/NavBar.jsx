import React from "react";

function NavBar({ user, handleLogout }) {
  return (
    <div>
      <nav className="flex w-full items-start justify-between">
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
    </div>
  );
}

export default React.memo(NavBar);
