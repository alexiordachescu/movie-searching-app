import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MoviePage.css";

export default function MoviePage() {
  const params = useParams();
  const [details, setDetails] = useState("");

  useEffect(() => {
    async function fetchDetails() {
      const response = await axios.get(
        `http://www.omdbapi.com/?i=${params.imdb_id}&apikey=2b3a45b9`
      );
      setDetails(response.data);
    }

    fetchDetails();
  }, [params.imdb_id]);

  return (
    <div>
      <div className="Header">
        <h2 className="Gender">{details.Genre}</h2>
        <h1 className="Title">
          {" "}
          {details.Title}({details.Year})
        </h1>
      </div>
      <div className="Image">
        <img src={details.Poster} alt={details.Title}></img>
        <div>
          <div className="Details">
            <h4 className="Info">IMDB Rating:</h4>
            <h5>{details.imdbRating}</h5>
            <h4 className="Info">Awards: </h4>
            <h5>{details.Awards}</h5>
            <h4 className="Info">Director: </h4>
            <h5> {details.Director}</h5>
            <h4 className="Info">Plot: </h4>
            <h5>{details.Plot}</h5>
            <h4 className="Info">Language: </h4>
            <h5>{details.Language}</h5>
            <h4 className="Info">Starring:</h4> <h5>{details.Actors}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
