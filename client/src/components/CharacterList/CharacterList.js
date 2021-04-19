import React from "react";
import { Container } from "react-bootstrap";
import Character from "../Character/Character";


const CharacterList = ({characters, loading}) => {
  return (
    <Container
      className="characters"
      style={{ visibility: loading ? "hidden" : "visible" }}
    >
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </Container>
  );
};

export default CharacterList;
