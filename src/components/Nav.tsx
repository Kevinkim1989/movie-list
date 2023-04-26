import React, { useEffect, useState } from "react";

export default function Nav() {
  return (

    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <a href="#">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />

              <p>MovieList</p>

            </a>
            <ul className="flex items-center ml-16 space-x-12">
              <li>
                <a
                  className="text-gray-300 hover:text-white"
                  href="#"
                >
                  Movies
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 hover:text-white"
                  href="#"
                >
                  TV Shows
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 hover:text-white"
                  href="#"
                >
                  Actors
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <input
                className="bg-gray-700 text-sm rounded-full w-64 px-4 pl-8 py-1 focus:outline-none focus:shadow-outline"
                type="search"
                name="search"
                placeholder="Search"
              />
              <div className="absolute top-0">
                <svg
                  className="fill-current w-4 text-gray-500 mt-2 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="heroicon-ui"
                    d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 17 9.5 6.5 6.5 0 1 0 9.5 17c1.86 0 3.54-.8 4.73-2.07l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 9.5 9.5a4.5 4.5 0 0 1-4.5 4.5z"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <button className="flex items-center bg-gray-700 text-sm rounded-full px-4 py-1 hover:bg-gray-600 focus:outline-none focus:shadow-outline">
                <svg
                  className="fill-current w-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="heroicon-ui"
                    d="M12 13a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1zm-7.64.36a1 1 0 0 1 .7-1.7l2.5-.5a1 1 0 0 1 1.2.8l.6 3a1 1 0 0 1-1 1.2H6.1a1 1 0 0 1-1-.8l-.6-3zm15.28 0l-.6 3a1 1 0 0 1-1 .8h-1.4a1 1 0 0 1-1-1.2l.6-3a1 1 0 0 1 1.2-.8l2.5.5a1 1 0 0 1 .7 1.7z"
                  />
                  <path
                    className="heroicon-ui"
                    d="M7.5 21a2.5 2.5 0 0 1-2.5-2.5V9a1 1 0 1 1 2 0v9.5a.5.5 0 0 0 1 0V9a1 1 0 1 1 2 0v9.5A2.5 2.5 0 0 1 7.5 21z"
                  />
                </svg>
                <span className="ml-2">Watchlist</span>
              </button>
            </div>
            <div className="ml-4">
              <button className="flex items-center bg-gray-700 text-sm rounded-full px-4 py-1 hover:bg-gray-600 focus:outline-none focus:shadow-outline">
                <svg
                  className="fill-current w-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="heroicon-ui"
                    d="M13 2a7 7 0 0 1 7 7c0 4.28-3.05 9.23-6.64 15.02a1 1 0 0 1-1.72 0C7.05 18.23 4 13.28 4 9A7 7 0 0 1 13 2zm0 2a5 5 0 0 0-5 5c0 3.29 2.38 8.28 5 13.44 2.62-5.16 5-10.15 5-13.44a5 5 0 0 0-5-5z"
                  />
                </svg>
                <span className="ml-2">Favorites</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

  );
}
