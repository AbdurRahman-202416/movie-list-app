import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import SearchBar from "./SearchBar";
import axios from "axios";
import httpClient from "./assets/axios";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState([]);
  const [search, setSearch] = useState("");
  const [fullList, setFullList] = useState(false);
  console.log(fullList);
  // const getMovie = () => {
  //   return fetch("https://dummyapi.online/api/movies")
  //     .then((response) => response.json())
  //     .then((data) => setMovies(data))
  //     .catch((error) => console.error(error));
  // };
  // const makeRequest = async (confiq) => {
  //   return await axios(confiq);
  // };

  // const getMovie = () => {
  //   makeRequest("https://dummyapi.online/api/movies")
  //     .then((res) => setMovies(res.data))
  //     .catch((err) => console.error(err));
  // };

  useEffect(() => {
    httpClient
      .get("/movies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err.message));
  }, []);

  // useEffect(() => {
  //   getMovie();
  // }, []);
 let sixMovie= movies.slice(0,6);
  useEffect(() => {
    const filter = movies.filter((movie) => {
      return movie.movie.toLowerCase().includes(search.toLowerCase());
    });

    setFilterMovie(filter);
  }, [search]);

  return (
    <div className="bg-gray-900">
      <h1 className=" text-3xl font-bold bg-purple-800 text-white w-[90%] mx-[5%] rounded-md shadow-lg shadow-sky-400 my-10 text-center ">
        <p className="bg-gradient-to-r from-red-800 via-sky-800 py-4 rounded-md to-pink-800 h-full ">
          Movie List
        </p>
      </h1>
      <SearchBar setSearch={setSearch} />
      <div className="grid  sm:grid-cols-3  mx-w-[95%] gap-2 ">
        
        {search.length == 0
          ? movies.map((movie) => (
              <Movie key={movie.id} title={movie.movie} movie={movie} />
            ))
          : filterMovie.map((movie) => {
              return <Movie key={movie.id} title={movie.movie} movie={movie} />;
            })}

        {search.length > 0 && filterMovie.length == 0 && (
          <div className="text-center py-10  text-2xl h-[100vh] sm:h-[90vh]  w-[95%] sm:w-[100%] mx-[2%] sm:mx-[95%] rounded-2xl shadow-2xl shadow-blue-400 text-gray-300">
            <p className="bg-[#605EA1] py-6 rounded-md my-[10%] sm:my-[10%] font-bold mx-10 w-[80%]">
              <i className="material-icons  text-red-600 text-6xl ">error</i>
              <br />
              Ops, No movie found ! <br />
              <i className="material-icons text-6xl text-white m-1">
                sentiment_dissatisfied
              </i>
            </p>
          </div>
        )}
      </div>
      <button
        onClick={(e) => (fullList ? setFullList(false) : setFullList(true))}
        class="relative font-bold w-[80%]  h-10 mx-[10%] bg-black flex flex-col items-center justify-center text-white border-none px-3 py-3 gap-3 rounded-lg cursor-pointer 
          before:content-[''] before:absolute before:inset-0 before:-left-1 before:-top-0.25 before:m-auto before:w-[128px] before:h-[48px] 
          before:rounded-lg before:bg-gradient-to-br before:from-[#e81cff] before:to-[#40c9ff] before:-z-10 before:pointer-events-none 
          before:transition-all before:duration-[0.6s] before:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] 
          after:content-[''] after:-z-1 after:absolute after:inset-0 after:bg-gradient-to-br after:from-[#fc00ff] after:to-[#00dbde] 
          after:scale-[0.95] after:translate-z-0 after:blur-[20px]
          hover:after:blur-[30px] hover:before:rotate-[-180deg]
          active:before:scale-[0.7]"
      >
        See more
      </button>
    </div>
  );
};

export default App;
