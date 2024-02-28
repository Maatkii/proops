import React from "react";
import { Card } from "react-bootstrap";

function Players({ player }) {
  const { nom, equipe, nationalite, age, imageUrl } = player;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} style={{ height: "300px" }} />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>{equipe}</Card.Text>
        <Card.Text>{nationalite}</Card.Text>
        <Card.Text>{age}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Players;
