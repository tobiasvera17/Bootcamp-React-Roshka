import { useState } from "react";
import "./style.css";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function App() {

  return (
    <>
      <div id="container" className="container-lg p-0 m-0 d-flex flex-column">
        <div
          id="header-container"
          className="d-flex container-fluid text-center"
        >
          <Header/>   
        </div>
        <Outlet/>
      </div>
    </>
  );
}

export default App;
