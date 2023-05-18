const versiones = [
    ["1.0.0", "16/05/2023","Lorem ipsum dolor sit amet consectetur adipisicing elit. A nostrum earum, similique aliquid nulla minima repellendus iure, quo atque impedit cum accusamus exercitationem sint sit non, qui illo harum officiis?",["Archivo 1.0.0 - 0","Archivo 1.0.0 - 1"],["Texto de descripción para Archivo 1.0.0 - 0","Texto de descripción para Archivo 1.0.0 - 1"]],
    ["2.0.0", "20/05/2023","Lorem ipsum dolor sit amet consectetur adipisicing elit. A nostrum earum, similique aliquid nulla minima repellendus iure, quo atque impedit cum accusamus exercitationem sint sit non, qui illo harum officiis?",["Archivo 2.0.0 - 0","Archivo 2.0.0 - 1"],["Texto de descripción para Archivo 2.0.0 - 0","Texto de descripción para Archivo 2.0.0 - 1"]],
    ["2.0.1", "28/05/2023","Lorem ipsum dolor sit amet consectetur adipisicing elit. A nostrum earum, similique aliquid nulla minima repellendus iure, quo atque impedit cum accusamus exercitationem sint sit non, qui illo harum officiis?",["Archivo 2.0.1 - 0","Archivo 2.0.0 - 1","README.md"],["Texto de descripción para Archivo 2.0.1 - 0","Texto de descripción para Archivo 2.0.1 - 1","README file"]]]

const indices = ["Archivos", "Detalles", "Configuraciones"]

const archivosBlanco = [
    [
        ["Commodo elit veniam laboris ex. Exercitation consequat sunt reprehenderit minim. In nulla esse eiusmod esse cupidatat laboris ea mollit pariatur laboris. Anim anim voluptate reprehenderit reprehenderit sit voluptate anim deserunt. Occaecat cupidatat sit nisi tempor esse nulla magna commodo cupidatat non consequat aliquip enim.","Fugiat ex nostrud laboris nisi sint esse veniam duis non. Minim veniam qui veniam adipisicing nulla reprehenderit minim dolor aliqua reprehenderit elit ut sunt. Aliquip non laborum qui do. Ullamco laborum culpa laborum veniam. Do dolor Lorem aliqua est tempor. Magna consequat velit et duis do Lorem adipisicing laborum Lorem magna do."],
        ["Sint sit tempor occaecat do Lorem. Duis magna pariatur voluptate ex ipsum sint anim. Laborum anim veniam aliquip sit est do consectetur."]
    ],
    [
        ["Fugiat cillum sit eu quis quis. Enim aliqua aute ut laboris qui irure id voluptate do irure aliquip. Consectetur non dolor in sit commodo anim anim cillum cupidatat cupidatat. Irure cupidatat laborum amet nisi ipsum qui proident eiusmod. Elit veniam officia labore consequat veniam esse. Duis ut quis elit consectetur laborum ad anim."],
        ["Occaecat nostrud magna occaecat duis sint non consequat labore cupidatat laboris tempor. Pariatur consequat fugiat duis incididunt voluptate est ex cillum veniam Lorem ipsum mollit ea. Id quis do deserunt non eu nisi duis cillum ex tempor enim laborum exercitation. Magna proident sit ad est voluptate fugiat amet irure dolor sit labore. Consectetur eiusmod magna ea sit in cillum elit eu."]
    ],
    [
        ["Consectetur est elit et dolor excepteur quis reprehenderit in dolore aute proident consectetur officia. Incididunt est tempor cupidatat sit consectetur eiusmod cupidatat est ullamco proident magna aute ex. Eu do deserunt adipisicing eiusmod consectetur proident in occaecat id et mollit. Occaecat voluptate veniam eu tempor sit dolore sint nulla reprehenderit qui incididunt ullamco laboris nostrud.",
        "Magna nostrud fugiat cupidatat proident elit ullamco elit. Occaecat nulla velit voluptate incididunt. In occaecat dolore consectetur culpa nulla deserunt consequat et ad dolore do nostrud id magna. Labore nisi fugiat deserunt ad. Dolor in anim cupidatat duis mollit labore incididunt ea cupidatat pariatur.",
        "Labore occaecat labore amet incididunt. Labore aliqua mollit tempor aliquip eiusmod mollit nisi ad. In sint officia anim laborum elit.Voluptate velit amet excepteur in in sunt amet irure officia adipisicing. Labore sunt voluptate in mollit ut pariatur pariatur ea magna mollit cillum incididunt adipisicing. Ut in proident incididunt exercitation."],
        ["Cupidatat commodo minim reprehenderit eu enim adipisicing culpa magna magna Lorem deserunt. Incididunt sit consequat officia pariatur enim. Occaecat pariatur mollit cupidatat cillum in nisi excepteur. Duis quis cupidatat sit ullamco nulla aliqua nisi ad deserunt. Sit consequat duis anim pariatur deserunt commodo adipisicing mollit do eiusmod dolore."],
        ["Culpa adipisicing culpa culpa incididunt irure enim. Ipsum deserunt dolor excepteur commodo aliqua enim nostrud adipisicing id. Culpa qui nostrud amet qui exercitation enim. Nisi excepteur sunt cillum mollit sint do anim exercitation ex. Est eiusmod esse pariatur anim proident culpa amet ea."]
    ]
]

const archivosVerde = [
    [
        ["Fugiat in dolor est esse voluptate aliqua pariatur. Anim ipsum cillum Lorem proident ex ex reprehenderit ex proident. Fugiat est officia ipsum aliquip incididunt aliquip dolor voluptate. Enim mollit non ad ut excepteur labore proident ad nostrud reprehenderit nisi nulla. Id ullamco adipisicing nulla velit amet incididunt voluptate.",
        "Deserunt sint eu reprehenderit elit ex in exercitation nostrud. Aliquip deserunt nulla velit id veniam enim duis. Consequat dolor velit est fugiat aliquip amet cupidatat cupidatat commodo commodo non dolore eiusmod magna. Aute nisi cupidatat labore cillum laboris veniam minim laborum commodo occaecat sit tempor ex sint."],["Enim Lorem esse sint velit irure qui culpa. Ex qui non proident commodo ea sint aliqua cillum duis aute id in in laborum. Labore esse aute nulla fugiat commodo do id. Aute nisi quis est minim. Voluptate et aliquip proident aute do commodo enim ut dolor."]
    ],
    [
        ["Esse mollit ipsum ex excepteur est elit nostrud. Tempor nostrud eiusmod magna proident ut amet laborum adipisicing occaecat id ex. Non labore consequat aliqua nulla incididunt ut culpa non elit. Aute fugiat irure dolor nostrud cupidatat reprehenderit dolore voluptate et sunt. Magna Lorem id aute amet laboris do adipisicing. Cillum adipisicing irure tempor commodo consectetur ex adipisicing elit occaecat duis. Mollit incididunt aliquip culpa amet sunt veniam culpa enim et elit cillum id consequat nostrud."],
        ["Exercitation quis aliqua dolor deserunt consequat pariatur et proident nisi. Commodo reprehenderit eiusmod nulla magna aute aute veniam Lorem cillum eu incididunt mollit esse. Elit mollit dolore magna ex cupidatat exercitation nisi excepteur adipisicing anim. Quis do amet nostrud laborum magna duis non voluptate nostrud deserunt officia quis duis consectetur."]
    ],
    [
        ["Aliquip ad officia excepteur mollit ipsum ut ut commodo proident cillum tempor consequat. Mollit nulla est proident sit adipisicing irure anim non adipisicing et sunt veniam. Excepteur excepteur culpa incididunt incididunt est occaecat esse cillum est consectetur. Tempor do est irure et tempor sit eiusmod minim nulla non minim id occaecat. Lorem magna id magna mollit",
        "Sunt et quis et non magna commodo mollit elit laboris. Nisi sunt ullamco sunt et sit exercitation irure et proident magna eiusmod. In velit voluptate ex officia aute proident ullamco cupidatat laboris aliquip proident. Proident commodo tempor consectetur ex enim sit reprehenderit consectetur amet exercitation qui duis enim laboris. Ipsum sunt magna enim dolor. Do velit cillum commodo aliquip sit do adipisicing laboris quis do do duis adipisicing ullamco. Non proident eu laboris aliquip fugiat anim aliqua aute ad elit nostrud sunt.",
        "In sint occaecat incididunt sit consequat ex id pariatur ex laborum. Exercitation et Lorem dolore reprehenderit deserunt aute laboris pariatur id. Incididunt incididunt ipsum esse officia do reprehenderit laborum elit."],
        ["Consectetur enim cupidatat cillum irure duis occaecat minim culpa veniam eiusmod anim do. Ut magna do proident veniam mollit exercitation. Exercitation nisi incididunt esse nisi. Culpa aliquip officia sunt id non et anim aliqua. Laboris reprehenderit fugiat exercitation labore id laboris esse quis ad ea. Minim deserunt cillum laborum voluptate laborum et incididunt aliqua enim nostrud Lorem enim minim."],
        ["Exercitation culpa aliquip magna laboris. Cupidatat Lorem nostrud amet quis culpa amet. Commodo ex officia incididunt sit aliqua adipisicing eu sunt tempor fugiat eiusmod amet."]
    ]
]


const container = document.getElementById("container")
const getInfo = () => {
    let sidebar = `
        <div class="flex-shrink-0 p-3 sidebar" style="width: 300px;">
            <a href="" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                <svg class="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
                <span class="fs-5 fw-semibold">Tabla de Versiones</span>
            </a>
            <ul class="list-unstyled ps-0">
    `
    for(let i = 0; i < indices.length; i++){
        sidebar += `
            <li class="mb-1">
                <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#${indices[i]}-collapse" aria-expanded="false">
                    ${indices[i]}
                </button>
                <div class="collapse" id="${indices[i]}-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
        `
        for(let j = 0; j < versiones.length; j ++){
                    if(i != 2){
                    sidebar += `
                        <li>
                            <button class="btn btn-sm btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#${indices[i]}${j}-collapse" aria-expanded="false">
                                ${versiones[j][0]}
                            </button>
                            <div class="collapse" id="${indices[i]}${j}-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    `
                        for(let k = 0; k < versiones[j][3+i].length; k++){
                            sidebar += `
                                <li>
                                    <a href="#" class="link-dark rounded">${versiones[j][3+i][k]}</a>
                                </li>
                            `
                        }
                        sidebar += `
                        </ul>
                        </div>
                        </li>
                        `   
                    }
                    else{
                        sidebar += `
                        <li>
                            <button class="btn btn-sm btnVerConf btnVerConf-${j} btn-conf align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#${indices[i]}${j}-collapse" aria-expanded="false">
                                ${versiones[j][0]}
                            </button>
                        </li>
                    `
                    }
                }
        sidebar +=`
                    </ul>
                </div>
            </li>
            `
    }
    sidebar += `
        </ul>
    </div>
    `
    
    let tabla = `
    <div class="container-fluid" id="main-container">
        <div id="tabla-container">
            <table class="table table-hover">
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
                <tbody>
    `

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
        tabla += `</tbody></table></div></div>`
        console.log(tabla)
        container.innerHTML += sidebar
        container.innerHTML += tabla
        const mainContainer = document.getElementById("main-container")
        mainContainer.innerHTML += `<div id = "container-result"></div>`
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
            div += `<li><h6>${versiones[version][3][i]}</h6>${versiones[version][4][i]}</li>`
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
            div +=
            `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${i}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
            ${versiones[version][3][i]}
            </button>
            </h2>
            <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}">
                        <div class="accordion-body">`
                        for(let j = 0; j < archivosBlanco[version][i].length; j++){
                            div += `<div class="textoBlanco">${archivosBlanco[version][i][j]}</div>
                            <div class="textoVerde">${archivosVerde[version][i][j]}</div>`
                        }
                div += `</div>
            </div>
            </div>`
        }
        div +=`</div>`
        containerResult.innerHTML = div
    })
})
