import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import SearchBar from "./SearchBar";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState([]);
  const getMovie = () => {
    return fetch("https://dummyapi.online/api/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  };
  const [search, setSearch] = useState("");

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    const filter = movies.filter((movie) => {
      return movie.movie.toLowerCase().includes(search.toLowerCase());
    });

    setFilterMovie(filter);
  }, [search]);

  return (
    <div>
      <h1 className=" text-3xl font-bold bg-purple-800 text-white py-8 w-[90%] mx-[5%] rounded-md shadow-2xl shadow-gray-600 my-4 text-center ">
        Movie List
      </h1>
      <SearchBar setSearch={setSearch} />
      <div className="grid sm:grid-cols-3  mx-w-[95%] gap-2 ">
        {search.length == 0
          ? movies.map((movie) => (
              <Movie key={movie.id} title={movie.movie} movie={movie} />
            ))
          : filterMovie.map((movie) => {
              return <Movie key={movie.id} title={movie.movie} movie={movie} />;
            })}
        {search.length > 0 && filterMovie.length == 0 && (
          <div className="text-center py-10 text-5xl w-[100%] mx-[95%] rounded-2xl shadow-2xl shadow-blue-400 bg-slate-500 text-red-500">
            No movie found
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
