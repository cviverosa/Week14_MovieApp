import React from "react";
import Card from "react-bootstrap/Card";
import ReviewForm from "./ReviewForm";
import { Badge } from "react-bootstrap";

const Movie = (props) => {
  const { id, title, image, synopsis, genre, releaseDate } = props;

  return (
    <Card className="movie" style={{ width: "18rem" }}>
      <Card.Img className="moviePoster" variant="top" src={image} />
      <Card.Body>
        <Card.Text className="movieTitle">{title}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted" id="smallText">
          <div>{releaseDate}</div>
        </Card.Subtitle>
        <Card.Title className="movieSynopsis">{synopsis}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" id="smallText">
          <div id="genreBadges">
            {genre.map((genre, index) => (
              <div key={index}>
                <Badge bg="secondary">{genre}</Badge>{" "}
              </div>
            ))}
          </div>
        </Card.Subtitle>
        <ReviewForm movieId={id} />
      </Card.Body>
    </Card>
  );
};

export default Movie;
