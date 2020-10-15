import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default function DiscoverMoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function fetchMovies() {
    // setMovies({ status: "loading" });
    const queryParam = encodeURIComponent(searchText);
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=2b3a45b9&s=${queryParam}`
    );
    setMovies(response.data.Search);
  }

  console.log("Locally stored:", movies);
  // IF not loaded yet, stop after the following conditional:
  // if (movies.data === null) {
  //   return <h2>{movies.status}</h2>;
  // }

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button variant="secondary" onClick={fetchMovies}>
          Search
        </Button>
      </p>
      <div>
        {movies.map((movie) => {
          return (
            <div>
              {/* {movie.imdbID} */}
              <h1>{movie.Title}</h1>;
              <img src={movie.Poster} alt={movie.Title}></img>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}
