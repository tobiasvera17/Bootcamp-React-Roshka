import { useState } from 'react'
import './style.css'

let type = ["A+", "A-", "B+", "B-", "O+", "O-", "AB-", "AB+"]

function Info(props) {
    const [count, setCount] = useState(0)
    let link_whatsapp = String(`https://api.whatsapp.com/send?text=*SOLICITUD DONACIÓN DE SANGRE*\n` +
                    `Nombre Donatario: `+ encodeURIComponent(`${props.data.nombre_apellido_donatario}\n`) +
                    `Teléfono: ` + encodeURIComponent(`${props.data.telefono_contacto}\n`) +
                    `C.I: ` + encodeURIComponent(`${props.data.cedula_donatario}\n`) +
                    `Lugar donación: ` + encodeURIComponent(`${props.data.establecimiento}\n`) +
                    `RH: ` + encodeURIComponent(`${type[props.data.tipo_sangre-1]} \n`) +
                    `Volumenes Necesarios: ` + encodeURIComponent(`${props.data.volumenes_necesarios}\n`) +
                    `Fecha Limite: ` + encodeURIComponent(`${props.data.fecha_limite}\n`) +
                    `Solicitud: ` + encodeURIComponent(`${props.data.solicitud}\n`) +
                    `Link: ` + encodeURIComponent(`${window.location.protocol}//${window.location.host}` + `/index.html#info-container-${props.idContainer}`))

    return (
        <>
        <div id={"info-container-" + String(props.idContainer)} className="info-container d-flex flex-column justify-content-center align-items-center">
            <div className="header-info-container container-fluid d-flex justify-content-center align-items-center">
                <div className="title-header-info-container">
                    {props.data.nombre_apellido_donatario}
                </div>
                <div className="delete-header-info-container text-center">
                    <button className={"btn btn-link btn-sm btn-delete btn-delete-" + String(props.idContainer)} disabled><i className="bi bi-trash3-fill icon"></i></button>
                </div>
                <div className="share-header-info-container text-center">
                    <a className="btn btn-link btn-sm btn-share" target="_blank" href={link_whatsapp}><i className="bi bi-share-fill icon"></i></a>
                </div>
            </div>
            <div className="main-info-container container-fluid">
                <table className="table">
                    <thead className="d-none">
                        <tr>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Teléfono:</td>
                            <td className="text-end fw-bold">{props.data.telefono_contacto}</td>
                        </tr>
                        <tr>
                            <td>C.I:</td>
                            <td className="text-end fw-bold">{props.data.cedula_donatario}</td>
                        </tr>
                        <tr>
                            <td>Lugar de donación:</td>
                            <td className="text-end fw-bold">{props.data.establecimiento}</td>
                        </tr>
                        <tr>
                            <td>RH:</td>
                            <td className="text-end"><img className="icon-sangre" src={"./images/icons_sangre/" + props.data.tipo_sangre + ".png"}/></td>
                        </tr>
                        <tr>
                            <td>Volúmenes:</td>
                            <td className="text-end fw-bold">{props.data.volumenes_necesarios}</td>
                        </tr>
                        <tr>
                            <td>Fecha límite:</td>
                            <td className="text-end fw-bold">{props.data.fecha_limite}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="footer-info-container container-fluid text-center text-uppercase fw-bold">${props.data.solicitud}</div>
    </div>
    </>
    )
}

export default Info