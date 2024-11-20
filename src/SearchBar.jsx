import React from "react";

const SearchBar = ({ setSearch }) => {
  return (
    <div>
      <div className="w-[80%] h-16 p-3 border border-blue-300 shadow-xl m-4 rounded-md mx-auto">
        <div className="relative flex items-baseline w-full h-full rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <input
            className=" h-full px-8 w-full outline-none text-sm text-gray-800 pr-2"
            type="text"
            placeholder="Search Movie..."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <div className="grid place-items-center h-full w-full  px-[70px] text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-fu  w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
