import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "./DiscoverMovies.css";

export default function DiscoverMoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function fetchMovies() {
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
      <h1>Discover some movies! Type in a keyword:</h1>
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
            <div className="Render">
              {/* {movie.imdbID} */}
              <img
                className="Image"
                src={movie.Poster}
                alt={movie.Title}
              ></img>{" "}
              <h2 className="Title">{movie.Title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
