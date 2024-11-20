import React from "react";

const Movie = ({ title, movie }) => {
  function getLastWord(str) {
    const words = str.split(" ");
    const lastWord = words[words.length - 1];
    return lastWord;
  }

  let key = getLastWord(title);

  let image = `https://loremflickr.com/800/600/${key}?random=${movie.id}`;
  return (
    <div className="w-[95%]  shadow-gray-600 sm:w-[95%]  m-3 mx-2 bg-gray-500 text-white rounded-lg shadow-xl ">
      <img className="w-full h-[400px] object-cover" src={image} />

      <div className="p-4">
        <h2 className="text-xl font-bold ">{movie.movie}</h2>

        <p className="mt-2 text-sm">
          Rating:
          <span className="font-medium mx-1 text-yellow-300">
            {movie.rating}
          </span>
          /10
        </p>

        <a
          href={movie.imdb_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700"
        >
          View on IMDb
        </a>
      </div>
    </div>
  );
};

export default Movie;
