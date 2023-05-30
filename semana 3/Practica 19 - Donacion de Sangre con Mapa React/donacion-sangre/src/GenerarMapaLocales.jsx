import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import InfoLocal from "./InfoLocal";
import { useState } from "react";

// let locales = {}
// $.ajax({
//   dataType: "json",
//   async: false,
//   url: "http://192.168.16.90:8000/api/locales",
//   success: function (result) {
//     locales = result.data;
//   },
// });

let locales = [
  {
  "id": 1,
  "local_donacion": "EL CANTARO",
  "longitud": -56.820182,
  "latitud": -27.387026,
  "creado_por": null,
  "direccion": "Av. Paraguay Casi Mcal. Lopez 343",
  "hora_apertura": 8,
  "hora_cierre": 21
  },
  {
  "id": 2,
  "local_donacion": "FCA - CAMPUS UNP",
  "longitud": -58.288459,
  "latitud": -26.879844,
  "creado_por": null,
  "direccion": "Eusebio Ayala casi Intendentes Militares 123",
  "hora_apertura": 8,
  "hora_cierre": 21
  },
  {
  "id": 3,
  "local_donacion": "EL CANTARO",
  "longitud": -56.820182,
  "latitud": -27.387026,
  "creado_por": null,
  "direccion": "Av. Paraguay Casi Mcal. Lopez 343",
  "hora_apertura": 8,
  "hora_cierre": 21
  },
  {
  "id": 4,
  "local_donacion": "Surubi-i, Mariano",
  "longitud": -57.521369,
  "latitud": -25.194156,
  "creado_por": null,
  "direccion": "Ruta Transchaco 1232 casi las Lomas Km. 3",
  "hora_apertura": null,
  "hora_cierre": null
  },
  {
  "id": 5,
  "local_donacion": "SODEP",
  "longitud": -57.583222,
  "latitud": -25.308953,
  "creado_por": null,
  "direccion": "Av. Paraguay Casi Mcal. Lopez 343",
  "hora_apertura": 8,
  "hora_cierre": 21
  },
  {
  "id": 6,
  "local_donacion": "ROSHKA",
  "longitud": -57.6100684,
  "latitud": -25.2818691,
  "creado_por": null,
  "direccion": null,
  "hora_apertura": null,
  "hora_cierre": null
  }
  ]
  

const GenerarMapaLocales = () => {
  const [showLocales, setShowLocales] = useState(false);

  const position = [51.505, -0.09];
  return (
    <div
      id="main-container"
      className="d-flex flex-column container-fluid align-items-center"
    >
      <div id="mapa-container">
        <MapContainer
          center={[-25.620669728127663, -57.152944340358026]}
          zoom={7}
          scrollWheelZoom={true}
        >
          {locales.map((item, index) => {
            return (
              <Marker key={index} position={[item.latitud, item.longitud]}>
                <Popup>
                  Nombre del local: {item.local_donacion} <br />
                  Dirección: { item.direccion != null ? item.direccion : "N/D"} <br />
                  Horario de Apertura: {item.hora_apertura != null ? item.hora_apertura + "hs." : "N/D"}
                  <br />
                  Horario de Cierre: {item.hora_cierre != null ? item.hora_cierre + "hs." : "N/D"}
                  <br />
                  <a
                    href={
                      "https://www.google.com/maps/search/?api=1&query=" +
                      item.latitud +
                      "%2C" +
                      item.longitud
                    }
                    target="_blank"
                  >
                    Ir a Maps
                  </a>{" "}
                  <br />
                </Popup>
              </Marker>
            );
          })}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
      <div
        id="locales-container"
        className={showLocales ? "show-locales" : "hide-locales"}
      >
        <div
          id="header-locales"
          onClick={() => {
            setShowLocales(!showLocales);
          }}
        >
          {showLocales ? (
            <i className="bi bi-caret-down-fill"></i>
          ) : (
            <i className="bi bi-caret-up-fill"></i>
          )}
        </div>

        <div id="info-locales" className={showLocales ? "" : "d-none"}>
          {locales.map((item, index) => {
            return <InfoLocal key={index} data={item} idContainer={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default GenerarMapaLocales;
