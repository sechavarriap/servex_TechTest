import { Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Fragment, useState, useEffect } from "react";
import Spinner from "./components/Spinner/Spinner"
import Control from "./components/Control/Control";
import CharacterList from "./components/CharacterList/CharacterList";
import ErrorAPI from "./components/ErrorAPI/ErrorAPI";
import clienteAxios from "./config/axios";
import logo from "./images/image1.png";

function App() {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {

    const request = async () => {
      try {
        let config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }

        const response = await clienteAxios.post('/api/characters', { nextPage: currentPage }, config);
        const result = await response.data;

        const visibleCharacters = result.characters.filter(character => character.status !== 'unknown');
        const next = result.next;
        const prev = result.prev;
  
        setCharacters(visibleCharacters);
        setNextPage(next);
        setPreviousPage(prev);
        setTimeout(() => setLoading(false), 1000);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }

    setLoading(true);
    window.scrollTo(0, 0);
    request()
    
  },[currentPage])

  return (
    <Fragment>    

      <Jumbotron fluid>
          <img className="logo" src={logo} alt="imagen" />
          <div>
            <p className="title">The Rick and Morty API</p>
            <p className="description">
              The place to find your prefered characters of the <span style={{color: "yellowgreen"}}>Rick and Morty</span> series!
            </p>
          </div>

      </Jumbotron>

      { error ? <ErrorAPI /> : null}

      <Control  
        setCurrentPage={setCurrentPage}
        previousPage={previousPage}
        nextPage={nextPage}
      />

      

      { loading ? <Spinner /> : null }

      <CharacterList 
        loading={loading}
        characters={characters}
      />

      <Control  
        setCurrentPage={setCurrentPage}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </Fragment>

   
  );
}

export default App;
