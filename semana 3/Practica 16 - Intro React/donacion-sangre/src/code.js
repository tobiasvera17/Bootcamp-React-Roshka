let peticion = {}
$.ajax({
    dataType: "json",
    async:false,
    url: "http://192.168.16.90:8000/api/solicitudes",
    success: function(result) {
        peticion = result.data
    }
})

let type = ["A+", "A-", "B+", "B-", "O+", "O-", "AB-", "AB+"]
let divInfo = ""
for(let i = 0; i < peticion.length; i ++){
    let link_whatsapp = `https://api.whatsapp.com/send?text=*SOLICITUD DONACIÓN DE SANGRE*\n` +
                    `Nombre Donatario: `+ encodeURIComponent(`${peticion[i].nombre_apellido_donatario}\n`) +
                    `Teléfono: ` + encodeURIComponent(`${peticion[i].telefono_contacto}\n`) +
                    `C.I: ` + encodeURIComponent(`${peticion[i].cedula_donatario}\n`) +
                    `Lugar donación: ` + encodeURIComponent(`${peticion[i].establecimiento}\n`) +
                    `RH: ` + encodeURIComponent(`${type[peticion[i].tipo_sangre-1]} \n`) +
                    `Volumenes Necesarios: ` + encodeURIComponent(`${peticion[i].volumenes_necesarios}\n`) +
                    `Fecha Limite: ` + encodeURIComponent(`${peticion[i].fecha_limite}\n`) +
                    `Solicitud: ` + encodeURIComponent(`${peticion[i].solicitud}\n`) +
                    `Link: ` + encodeURIComponent(`${window.location.protocol}//${window.location.host}` + `/index.html#info-container-${i}`)

                    // link_whatsapp = link_whatsapp.replaceAll(' ', '%20')
                    // link_whatsapp = link_whatsapp.replaceAll('\n', '%0a')
                    // // Symbols for blood types
                    // link_whatsapp = link_whatsapp.replace('+', '%2B')
                    // link_whatsapp = link_whatsapp.replace('-', '%2D')

    // console.log(link_whatsapp)
    divInfo += `
    <div id="info-container-${i}" class="info-container d-flex flex-column justify-content-center align-items-center">
        <div class="header-info-container container-fluid d-flex justify-content-center align-items-center">
            <div class="title-header-info-container">
                ${peticion[i].nombre_apellido_donatario}
            </div>
            <div class="delete-header-info-container text-center">
                <button class="btn btn-link btn-sm btn-delete btn-delete-${i}" disabled><i class="bi bi-trash3-fill icon"></i></button>
            </div>
            <div class="share-header-info-container text-center">
                <a class="btn btn-link btn-sm btn-share" target="_blank" href="${link_whatsapp}"><i class="bi bi-share-fill icon"></i></a>
            </div>
        </div>
        <div class="main-info-container container-fluid">
            <table class="table">
                <thead class="d-none">
                    <th></th>
                    <th></th>
                </thead>
                <tbody>
                    <tr>
                        <td>Teléfono:</td>
                        <td class="text-end fw-bold">${peticion[i].telefono_contacto}</td>
                    </tr>
                    <tr>
                        <td>C.I:</td>
                        <td class="text-end fw-bold">${peticion[i].cedula_donatario}</td>
                    </tr>
                    <tr>
                        <td>Lugar de donación:</td>
                        <td class="text-end fw-bold">${peticion[i].establecimiento}</td>
                    </tr>
                    <tr>
                        <td>RH:</td>
                        <td class="text-end"><img class="icon-sangre" src="./images/icons_sangre/${peticion[i].tipo_sangre}.png"></td>
                    </tr>
                    <tr>
                        <td>Volúmenes:</td>
                        <td class="text-end fw-bold">${peticion[i].volumenes_necesarios}</td>
                    </tr>
                    <tr>
                        <td>Fecha límite:</td>
                        <td class="text-end fw-bold">${peticion[i].fecha_limite}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="footer-info-container container-fluid text-center text-uppercase fw-bold">${peticion[i].solicitud}</div>
    </div>
    `
}
export default divInfo
// $("#main-container").append(divInfo)
