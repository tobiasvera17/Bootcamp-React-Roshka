const versiones = [
    ["1.0.0", "16/05/2023","Lorem ipsum dolor sit amet consectetur adipisicing elit. A nostrum earum, similique aliquid nulla minima repellendus iure, quo atque impedit cum accusamus exercitationem sint sit non, qui illo harum officiis?",["Archivo 1.0.0 - 0","Archivo 1.0.0 - 1"],["Texto de descripción para Archivo 1.0.0 - 0","Texto de descripción para Archivo 1.0.0 - 1"]],
    ["2.0.0", "20/05/2023","Lorem ipsum dolor sit amet consectetur adipisicing elit. A nostrum earum, similique aliquid nulla minima repellendus iure, quo atque impedit cum accusamus exercitationem sint sit non, qui illo harum officiis?",["Archivo 2.0.0 - 0","Archivo 2.0.0 - 1"],["Texto de descripción para Archivo 2.0.0 - 0","Texto de descripción para Archivo 2.0.0 - 1"]]]

const archivosBlanco = [["Commodo elit veniam laboris ex. Exercitation consequat sunt reprehenderit minim. In nulla esse eiusmod esse cupidatat laboris ea mollit pariatur laboris. Anim anim voluptate reprehenderit reprehenderit sit voluptate anim deserunt. Occaecat cupidatat sit nisi tempor esse nulla magna commodo cupidatat non consequat aliquip enim.","Sint sit tempor occaecat do Lorem. Duis magna pariatur voluptate ex ipsum sint anim. Laborum anim veniam aliquip sit est do consectetur."],
["Fugiat cillum sit eu quis quis. Enim aliqua aute ut laboris qui irure id voluptate do irure aliquip. Consectetur non dolor in sit commodo anim anim cillum cupidatat cupidatat. Irure cupidatat laborum amet nisi ipsum qui proident eiusmod. Elit veniam officia labore consequat veniam esse. Duis ut quis elit consectetur laborum ad anim.","Occaecat nostrud magna occaecat duis sint non consequat labore cupidatat laboris tempor. Pariatur consequat fugiat duis incididunt voluptate est ex cillum veniam Lorem ipsum mollit ea. Id quis do deserunt non eu nisi duis cillum ex tempor enim laborum exercitation. Magna proident sit ad est voluptate fugiat amet irure dolor sit labore. Consectetur eiusmod magna ea sit in cillum elit eu."]]

const archivosVerde = [["Fugiat in dolor est esse voluptate aliqua pariatur. Anim ipsum cillum Lorem proident ex ex reprehenderit ex proident. Fugiat est officia ipsum aliquip incididunt aliquip dolor voluptate. Enim mollit non ad ut excepteur labore proident ad nostrud reprehenderit nisi nulla. Id ullamco adipisicing nulla velit amet incididunt voluptate.","Enim Lorem esse sint velit irure qui culpa. Ex qui non proident commodo ea sint aliqua cillum duis aute id in in laborum. Labore esse aute nulla fugiat commodo do id. Aute nisi quis est minim. Voluptate et aliquip proident aute do commodo enim ut dolor."],
["Esse mollit ipsum ex excepteur est elit nostrud. Tempor nostrud eiusmod magna proident ut amet laborum adipisicing occaecat id ex. Non labore consequat aliqua nulla incididunt ut culpa non elit. Aute fugiat irure dolor nostrud cupidatat reprehenderit dolore voluptate et sunt. Magna Lorem id aute amet laboris do adipisicing. Cillum adipisicing irure tempor commodo consectetur ex adipisicing elit occaecat duis. Mollit incididunt aliquip culpa amet sunt veniam culpa enim et elit cillum id consequat nostrud.","Exercitation quis aliqua dolor deserunt consequat pariatur et proident nisi. Commodo reprehenderit eiusmod nulla magna aute aute veniam Lorem cillum eu incididunt mollit esse. Elit mollit dolore magna ex cupidatat exercitation nisi excepteur adipisicing anim. Quis do amet nostrud laborum magna duis non voluptate nostrud deserunt officia quis duis consectetur."]]


const container = document.getElementById("container")
const getInfo = () => {
    let tabla = `<table class="table table-striped-columns table-hover">
    <thead>
        <th>
            <p>Versión</p>
        </th>
        <th>
            <p>Fecha</p>
        </th>
        <th colspan="6">
            <p>Resumen</p>
        </th>
        <th>
            <p>Archivos</p>
        </th>
        <th>
            <p>Detalles</p>
        </th>
        <th>
            <p>Conf.</p>
        </th>
    </thead>
    <tbody>`
    // tabla.setAttribute("class", "table table-striped-columns table-hover")
    // tabla.innerHTML += `<thead>
    //                         <tr>
    //                             <th>
    //                                 <p>Versión</p>
    //                             </th>
    //                             <th>
    //                                 <p>Fecha</p>
    //                             </th>
    //                             <th colspan="6">
    //                                 <p>Resumen</p>
    //                             </th>
    //                             <th>
    //                                 <p>Archivos</p>
    //                             </th>
    //                             <th>
    //                                 <p>Detalles</p>
    //                             </th>
    //                             <th>
    //                                 <p>Conf.</p>
    //                             </th>
    //                         </tr>
    //                             </thead>`
    for(let i = 0; i < versiones.length; i ++){
        tabla += `<tr>
                            <td>${versiones[i][0]}</td>
                            <td>${versiones[i][1]}</td>
                            <td colspan="6">${versiones[i][2]}</td>
                            <td><button class="btn btn-primary btnVerArchivos btnVerArchivos-${i}">Ver Archivos</button></td>
                            <td><button class="btn btn-primary btnVerDetalles btnVerDetalles-${i}">Ver Detalles</button></td>
                            <td><button class="btn btn-primary btnVerConf btnVerConf-${i}">Ver Conf.</button></td> 
                            </tr>`
                        }
        tabla += `</tbody></table>`
        container.innerHTML += tabla
        container.innerHTML += `<div id = "container-result"></div>`
}

getInfo()

const btnVerArchivos = document.querySelectorAll(".btnVerArchivos")
const btnVerDetalles = document.querySelectorAll(".btnVerDetalles")
const btnVerConf = document.querySelectorAll(".btnVerConf")
const containerResult = document.getElementById("container-result")

btnVerArchivos.forEach(btn => {
    containerResult.innerHTML = ""
    btn.addEventListener('click', function handleClick(event) {
        let version = Number(btn.classList[3].match(/\d+/g)[0])
        let div = `<h3>Versión ${versiones[version][0]}</h3>
        <h5>Archivos:</h5>
        <ul>` 
        for(let i = 0; i<versiones[version][3].length; i ++){
            div += `<li><a href="" target="_blank">${versiones[version][3][i]}</a></li>`
        }
        div += `</ul>`
        containerResult.innerHTML = div
    })
})

btnVerDetalles.forEach(btn => {
    containerResult.innerHTML = ""
    btn.addEventListener('click', function handleClick(event) {
        let version = Number(btn.classList[3].match(/\d+/g)[0])
        let div = `<h3>Versión ${versiones[version][0]}</h3>
        <h5>Detalles:</h5>
        <ul>` 
        for(let i = 0; i<versiones[version][3].length; i ++){
            div += `<li>${versiones[version][4][i]}</li>`
        }
        div += `</ul>`
        containerResult.innerHTML = div
    })
})

btnVerDetalles.forEach(btn => {
    containerResult.innerHTML = ""
    btn.addEventListener('click', function handleClick(event) {
        let version = Number(btn.classList[3].match(/\d+/g)[0])
        let div = `<h3>Versión ${versiones[version][0]}</h3>
        <h5>Detalles:</h5>
        <ul>` 
        for(let i = 0; i<versiones[version][4].length; i ++){
            div += `<li>${versiones[version][4][i]}</li>`
        }
        div += `</ul>`
        containerResult.innerHTML = div
    })
})

btnVerConf.forEach(btn => {
    containerResult.innerHTML = ""
    btn.addEventListener('click', function handleClick(event) {
        let version = Number(btn.classList[3].match(/\d+/g)[0])
        let div = `<h3>Versión ${versiones[version][0]}</h3>`
        div += `<div class="accordion" id="accordionArchivo">`
        for(let i = 0; i < versiones[version][3].length; i ++){
                div +=`<div class="accordion-item">
                <h2 class="accordion-header" id="heading${i}">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                    ${versiones[version][3][i]}
                  </button>
                </h2>
                <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}">
                  <div class="accordion-body">
                    <div class="textoBlanco">${archivosBlanco[version][i]}</div>
                    <div class="textoVerde">${archivosVerde[version][i]}</div>
                  </div>
                </div>
              </div>`
        }
        div +=`</div>`
        containerResult.innerHTML = div
    })
})
