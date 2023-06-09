import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import axios from "axios";

function App() {
  // const [pageNumber, setPageNumber] = useState(1);
  const [charactersData, setCharactersData] = useState(null);
  const [currentData, setCurrentData] = useState(null);
  let request = `https://rickandmortyapi.com/api/character`;

  // Pagination
  const itemsPerPage = 6;
  const [itemOffSet, setItemOffSet] = useState(0); // Inicio
  const [endOffSet, setEndOffSet] = useState(itemOffSet + itemsPerPage); // Fin

  useEffect(() => {
    // console.log(itemOffSet, endOffSet)
    if (charactersData) {
      const current = charactersData?.slice(itemOffSet, endOffSet);
      setCurrentData(current);
    }
  }, [itemOffSet, endOffSet, charactersData]);

  useEffect(() => {
    if (charactersData == null) {
      axios
        .get(request)
        .then((response) => {
          let data = response.data.results;
          setCharactersData(data);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <>
      <div className="container text-center">
        <h1>Prueba Técnica React</h1>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            {/* <div className="row">{charactersData?.results && <Cards results={charactersData?.results} />}</div> */}
            <div className="row">
              {currentData && (
                <Cards
                  currentData={currentData}
                  charactersData={charactersData}
                  setCharactersData={setCharactersData}
                />
              )}
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <Pagination
        length={charactersData?.length}
        itemsPerPage={itemsPerPage}
        setItemOffSet={setItemOffSet}
        setEndOffSet={setEndOffSet}
      />
    </>
  );
}

export default App;
