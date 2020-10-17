import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MoviePage.css";
import { Container, Row, Col } from "react-bootstrap";

export default function MoviePage() {
  const params = useParams();
  const [details, setDetails] = useState("");

  useEffect(() => {
    async function fetchDetails() {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${params.imdb_id}&apikey=2b3a45b9`
      );
      setDetails(response.data);
    }

    fetchDetails();
  }, [params.imdb_id]);

  return (
    <Container>
      <Row>
        <Col className="Sizing">
          <h1>
            {details.Title} ({details.Year})
          </h1>
        </Col>
      </Row>
      <Row>
        {" "}
        <Col>
          <h4>{details.Genre}</h4>
        </Col>
      </Row>{" "}
      <Row>
        {" "}
        <Col className="Sizing">
          <img src={details.Poster} alt={details.Title}></img>{" "}
        </Col>{" "}
        <Col className="Sizing">
          <h5>IMDB Rating:</h5>
          <p>{details.imdbRating}</p>
          <h5>Awards: </h5>
          <p>{details.Awards}</p>
          <h5>Director: </h5>
          <p>{details.Director}</p>
          <h5>Plot:</h5>
          <p>{details.Plot}</p>
          <h5>Language:</h5> <p>{details.Language}</p>
          <h5>Starring:</h5>
          {details.Actors}
        </Col>
      </Row>
    </Container>
  );
}
