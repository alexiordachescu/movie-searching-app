import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./DiscoverMovies.css";
import { Container, Row, Col } from "react-bootstrap";

export default function DiscoverMoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function fetchMovies() {
    const queryParam = encodeURIComponent(searchText);
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=2b3a45b9&s=${queryParam}`
    );
    setMovies(response.data.Search);
  }
  // IF not loaded yet, stop after the following conditional:
  if (movies.data === null) {
    return <h2>{movies.status}</h2>;
  }

  return (
    <div>
      <div className="Description">
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
      </div>
      <div>
        <Container className="Render">
          <Row>
            {movies.map((movie) => {
              return (
                <Col>
                  <Card style={{ width: "18rem" }} className="Render">
                    <Link to={`/movies/${movie.imdbID}`}>
                      <Card.Img variant="top" src={movie.Poster} />
                      <Card.Body>
                        <Card.Title>{movie.Title}</Card.Title>
                      </Card.Body>
                    </Link>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}
