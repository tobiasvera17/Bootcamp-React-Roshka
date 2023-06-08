import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import CardsDos from "./components/Cards/CardsDos";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [charactersData, setCharactersData] = useState([]);
  let { info, results } = charactersData;
  let request = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(request).then((res) => res.json());
      setCharactersData(data);
    })();
  }, [request]);

  return (
    <>
      <div className="container text-center">
        <h1>Prueba Técnica React</h1>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="row">
              {/* {results && ( */}
              <CardsDos results={results} />
              {/* )} */}
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  );
}

export default App;
