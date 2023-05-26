import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import InfoLocal from "./InfoLocal";

const GenerarMapaLocales = (props) => {
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
          {props.locales.map((item, index) => {
            return (
              <Marker key={index} position={[item.latitud, item.longitud]}>
                <Popup>
                  Nombre del local: {item.local_donacion} <br />
                  Dirección: {item.direccion} <br />
                  Horario de Apertura: {item.hora_apertura} hs.
                  <br />
                  Horario de Cierre: {item.hora_cierre} hs.
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
      <div id="locales-container">
        hola
        {
          props.locales.map((item, index) => {
            return <InfoLocal data={item}/>
          })
        }
      </div>
    </div>
  );
};

export default GenerarMapaLocales;
