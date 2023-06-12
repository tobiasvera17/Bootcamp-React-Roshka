import { Link } from "react-router-dom";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ClickMap from "./ClickMap";

const Publicar = () => {
  const [mousePos, setMousePos] = useState<LatLngTuple>({ lat: null, lng: null });
  const [tipo_reporte, setTipo_Reporte] = useState("");
  const [titulo_reporte, setTitulo_Reporte] = useState("");
  const [descripcion_reporte, setDescripcion_Reporte] = useState("");
  const [foto_reporte, setFoto_Reporte] = useState<FileList | null>(null);
  const [nombre_contacto, setNombre_Contacto] = useState("");
  const [telefono_contacto, setTelefono_Contacto] = useState("");
  const [especie, setEspecie] = useState("");
  const [edad_aproximada, setEdad_Aproximada] = useState("");
  const [sexo, setSexo] = useState("");
  const [resumen_ubicacion, setResumen_Ubicacion] = useState<string | null>(null);
  const [ultima_vista, setUltima_Vista] = useState("");

  const submitFunction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(mousePos.lat, mousePos.lng)
    console.log(tipo_reporte);
    console.log(titulo_reporte);
    console.log(descripcion_reporte);
    console.log(foto_reporte);
    console.log(nombre_contacto);
    console.log(telefono_contacto);
    console.log(especie);
    console.log(edad_aproximada);
    console.log(sexo);
    console.log(resumen_ubicacion);
    console.log(ultima_vista);
  };

  return (
    <div className="container-fluid p-5 m-0 index-component-container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-10">
          <form className="was-validated" onSubmit={(e) => submitFunction(e)}>
            <div className="form-group mb-3">
              <label htmlFor="ubicacion_reporte" className="form-label fw-bold">
                Elija ubicación o zona cercana donde vio la mascota por última
                vez :
              </label>
              <div id="map-report">
                <MapContainer
                  center={[-23.579697370403817, -58.51567860437498]}
                  zoom={6}
                  scrollWheelZoom={true}
                  id="ubicacion_reporte"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <ClickMap
                    setMousePos={setMousePos}
                    setResumen_Ubicacion={setResumen_Ubicacion}
                  ></ClickMap>
                  {
                    mousePos.lat != null ? mousePos.lng != null ?
                      (
                        <Marker position={[mousePos.lat, mousePos.lng]}>
                        <Popup>
                          {resumen_ubicacion != null ? resumen_ubicacion : ''}
                        </Popup>
                      </Marker>
                      ) : null : null
                  }
                </MapContainer>
              </div>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="tipo_reporte" className="form-label fw-bold">
                Tipo de reporte :
              </label>
              <select
                className="form-select"
                id="tipo_reporte"
                aria-describedby="tipo_reporte_help"
                onChange={(e) => setTipo_Reporte(e.target.value)}
                required
              >
                <option value={"perdido"}>Perdido</option>
                <option value={"avistado"}>Avistado</option>
                <option value={"retenido"}>Retenido</option>
                <option value={"otro"}>Otro</option>
              </select>
              <div id="tipo_reporte_help" className="form-text">
                <ul>
                  <li>
                    <span className="fw-bold">Perdido:</span> Si perdiste o
                    alguien perdió su mascota y quieres reportarla como perdida.
                  </li>
                  <li>
                    <span className="fw-bold">Avistado:</span> Si viste una
                    mascota que parecía perdida, pero no pudiste retenerla.
                  </li>
                  <li>
                    <span className="fw-bold">Retenido:</span> Si encontraste
                    una mascota y pudiste retenerla o sabes de alguien que la
                    tiene retenida.
                  </li>
                  <li>
                    <span className="fw-bold">Otro:</span> Otro tipo de reporte.
                  </li>
                </ul>
              </div>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="titulo_reporte" className="form-label fw-bold">
                Título de reporte :
              </label>
              <input
                type="input"
                className="form-control"
                id="titulo_reporte"
                placeholder="Ejemplo: Perro con collar encontrado en el barrio San Vicente"
                onChange={(e) => setTitulo_Reporte(e.target.value)}
                required
              />
              <div className="invalid-feedback">
                Debe completar este campo correctamente.
              </div>
            </div>

            <div className="form-group mb-3">
              <label
                className="form-label fw-bold"
                htmlFor="descripcion_reporte"
              >
                Descripción de reporte :
              </label>
              <textarea
                className="form-control"
                rows={3}
                id="descripcion_reporte"
                placeholder="Ejemplo: Encontré un perro blanco con collar, creo que es una mezcla de caniche, parece asustado y no pude retenerlo."
                onChange={(e) => setDescripcion_Reporte(e.target.value)}
                required
              ></textarea>
              <div className="invalid-feedback">
                Debe completar este campo correctamente.
              </div>
            </div>

            <div className="form-group mb-3">
              <label className="form-label fw-bold" htmlFor="foto_reporte">
                Foto :
              </label>
              <input
                type="file"
                accept="image/jpeg, image/jpg, image/png"
                className="form-control"
                id="foto_reporte"
                onChange={(e) => setFoto_Reporte(e.target.files)}
                required
              />
              <div className="invalid-feedback">
                Debe completar este campo correctamente.
              </div>
              <div id="foto_reporte_help" className="form-text">
                <span>
                  Se necesita una imagen de la mascota para evitar confusiones y
                  que sea más sencillo reconocerla.
                </span>
              </div>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="nombre_contacto" className="form-label fw-bold">
                Nombre de contacto :
              </label>
              <input
                type="input"
                className="form-control"
                id="nombre_contacto"
                onChange={(e) => setNombre_Contacto(e.target.value)}
                placeholder="Ejemplo: Franco Pecci"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="telefono_contacto" className="form-label fw-bold">
                Teléfono de contacto :
              </label>
              <input
                type="input"
                className="form-control"
                id="telefono_contacto"
                onChange={(e) => setTelefono_Contacto(e.target.value)}
                placeholder="Ejemplo: +595990123456"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="especie" className="form-label fw-bold">
                Especie :
              </label>
              <select
                className="form-select"
                id="especie"
                onChange={(e) => setEspecie(e.target.value)}
                required
              >
                <option value={"perro"}>Perro</option>
                <option value={"gato"}>Gato</option>
                <option value={"loro"}>Loro</option>
                <option value={"otro"}>Otro</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="edad_aproximada" className="form-label fw-bold">
                Edad aproximada :
              </label>
              <input
                type="number"
                className="form-control"
                id="edad_aproximada"
                onChange={(e) => setEdad_Aproximada(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="sexo" className="form-label fw-bold">
                Sexo :
              </label>
              <select
                className="form-select"
                id="sexo"
                onChange={(e) => setSexo(e.target.value)}
              >
                <option value={"macho"}>Macho</option>
                <option value={"hembra"}>Hembra</option>
                <option value={"desconocido"}>Desconocido</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="resumen_ubicacion" className="form-label fw-bold">
                Resúmen de ubicación :
              </label>
              <input
                type="input"
                className="form-control"
                id="resumen_ubicacion"
                placeholder="Ejemplo: Árboles, Paso de la Patria, Hipódromo, Asunción, Región Oriental, 1906, Paraguay"
                value={resumen_ubicacion != null ? resumen_ubicacion : ''}
                onChange={(e) => setResumen_Ubicacion(e.target.value)}
                required
              />
              <div className="invalid-feedback">
                Debe completar este campo correctamente.
              </div>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="ultima_vista" className="form-label fw-bold">
                Última vez visto :
              </label>
              <input
                type="date"
                className="form-control"
                id="ultima_vista"
                max={new Date().toJSON().slice(0, 10)}
                onChange={(e) => setUltima_Vista(e.target.value)}
                required
              />
              <div className="invalid-feedback">
                Debe completar este campo correctamente.
              </div>
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="terminos_uso"
                required
              />
              <label className="form-check-label" htmlFor="terminos_uso">
                Acepto los{" "}
                <Link to={"/terminos"} className="link link-primary">
                  Términos de uso
                </Link>{" "}
              </label>
              <div className="invalid-feedback">
                Debe aceptar los Términos de uso.
              </div>
            </div>

            <div className="mb-3">
              <button className="btn btn-danger" type="submit">
                Publicar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Publicar;
