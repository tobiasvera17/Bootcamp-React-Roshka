import { useEffect } from "react";
import "./style.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == "/") {
      navigate("/solicitudes");
    }
  });

  return (
    <>
      <div
        id="container"
        className="container-fluid p-0 m-0 d-flex flex-column"
      >
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
