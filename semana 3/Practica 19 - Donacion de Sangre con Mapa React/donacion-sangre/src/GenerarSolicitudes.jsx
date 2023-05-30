import Info from "./Info";

// let peticion = {};
// $.ajax({
//   dataType: "json",
//   async: false,
//   url: "http://192.168.16.90:8000/api/solicitudes",
//   success: function (result) {
//     peticion = result.data;
//   },
// });

let peticion = [
  {
      "id": 81,
      "created_at": "2023-04-17T19:59:19.000000Z",
      "updated_at": "2023-04-17T19:59:19.000000Z",
      "solicitud": "TOKENNNMNNNNNN",
      "creado_por": 31,
      "fecha_limite": "12/4/2023",
      "id_estado": 1,
      "volumenes_necesarios": 78,
      "nombre_apellido_donatario": "fdagfgfsa",
      "cedula_donatario": "4687",
      "telefono_contacto": "0991459016",
      "tipo_sangre": 3,
      "establecimiento": "3"
  },
  {
      "id": 82,
      "created_at": "2023-04-18T20:32:35.000000Z",
      "updated_at": "2023-04-18T20:32:35.000000Z",
      "solicitud": "asfsfasfasf",
      "creado_por": 31,
      "fecha_limite": "18/4/2023",
      "id_estado": 1,
      "volumenes_necesarios": 5,
      "nombre_apellido_donatario": "sfsedfsef",
      "cedula_donatario": "45885",
      "telefono_contacto": "0985980780",
      "tipo_sangre": 1,
      "establecimiento": "0"
  },
  {
      "id": 3,
      "created_at": "2022-11-28T18:59:02.000000Z",
      "updated_at": "2022-11-28T18:59:02.000000Z",
      "solicitud": "Urgente",
      "creado_por": 15,
      "fecha_limite": "2020-08-26",
      "id_estado": 1,
      "volumenes_necesarios": 2,
      "nombre_apellido_donatario": "Norman Osborn ",
      "cedula_donatario": "28738",
      "telefono_contacto": "09290384",
      "tipo_sangre": 4,
      "establecimiento": "FCA - CAMPUS UNP"
  },
  {
      "id": 5,
      "created_at": "2022-11-29T11:48:17.000000Z",
      "updated_at": "2022-11-29T11:48:17.000000Z",
      "solicitud": "urgent",
      "creado_por": 17,
      "fecha_limite": "2022-08-29",
      "id_estado": 1,
      "volumenes_necesarios": 1,
      "nombre_apellido_donatario": "Harry Osborn",
      "cedula_donatario": "82387892",
      "telefono_contacto": "29812",
      "tipo_sangre": 2,
      "establecimiento": "FCA - CAMPUS UNP"
  },
  {
      "id": 1,
      "created_at": "2022-11-28T17:23:11.000000Z",
      "updated_at": "2022-11-28T17:23:11.000000Z",
      "solicitud": " sdfsad",
      "creado_por": 4,
      "fecha_limite": "2022-11-28",
      "id_estado": 1,
      "volumenes_necesarios": 123,
      "nombre_apellido_donatario": "Sasha’s",
      "cedula_donatario": "assess",
      "telefono_contacto": "8973249832",
      "tipo_sangre": 2,
      "establecimiento": "FCA - CAMPUS UNP"
  },
  {
      "id": 16,
      "created_at": "2022-11-29T12:52:42.000000Z",
      "updated_at": "2022-11-29T12:52:42.000000Z",
      "solicitud": " shdjas",
      "creado_por": 10,
      "fecha_limite": "2022-11-29",
      "id_estado": 1,
      "volumenes_necesarios": 1,
      "nombre_apellido_donatario": "Phineas",
      "cedula_donatario": "19219",
      "telefono_contacto": "892818",
      "tipo_sangre": 5,
      "establecimiento": "EL CANTARO"
  },
  {
      "id": 18,
      "created_at": "2022-11-29T12:53:59.000000Z",
      "updated_at": "2022-11-29T12:53:59.000000Z",
      "solicitud": " 1231231231221",
      "creado_por": 1,
      "fecha_limite": "2022-11-29",
      "id_estado": 1,
      "volumenes_necesarios": 123,
      "nombre_apellido_donatario": "PETERRPARKER",
      "cedula_donatario": "12312",
      "telefono_contacto": "12312",
      "tipo_sangre": 1,
      "establecimiento": "EL CANTARO"
  },
  {
      "id": 19,
      "created_at": "2022-11-29T12:57:38.000000Z",
      "updated_at": "2022-11-29T12:57:38.000000Z",
      "solicitud": " asdfasdf",
      "creado_por": 1,
      "fecha_limite": "2022-11-29",
      "id_estado": 1,
      "volumenes_necesarios": 123,
      "nombre_apellido_donatario": "Jjaksldfjkasj",
      "cedula_donatario": "123123",
      "telefono_contacto": "123123",
      "tipo_sangre": 4,
      "establecimiento": "EL CANTARO"
  },
  {
      "id": 28,
      "created_at": "2022-11-29T13:54:13.000000Z",
      "updated_at": "2022-11-29T13:54:13.000000Z",
      "solicitud": " 1231231221",
      "creado_por": 41,
      "fecha_limite": "2022-11-29",
      "id_estado": 1,
      "volumenes_necesarios": 123123,
      "nombre_apellido_donatario": "Nestor",
      "cedula_donatario": "123123",
      "telefono_contacto": "12312321",
      "tipo_sangre": 3,
      "establecimiento": "EL CANTARO"
  },
  {
      "id": 38,
      "created_at": "2022-11-29T16:25:06.000000Z",
      "updated_at": "2022-11-29T16:25:06.000000Z",
      "solicitud": " Necesito ayudaa",
      "creado_por": 39,
      "fecha_limite": "2022-11-29",
      "id_estado": 1,
      "volumenes_necesarios": 2,
      "nombre_apellido_donatario": "Alan",
      "cedula_donatario": "122343222",
      "telefono_contacto": "15588585",
      "tipo_sangre": 1,
      "establecimiento": "EL CANTARO"
  },
  {
      "id": 4,
      "created_at": "2022-11-28T19:10:55.000000Z",
      "updated_at": "2022-11-28T19:10:55.000000Z",
      "solicitud": "help… Finn… :(",
      "creado_por": 16,
      "fecha_limite": "2022-11-30",
      "id_estado": 1,
      "volumenes_necesarios": 3,
      "nombre_apellido_donatario": "Finn",
      "cedula_donatario": "555666",
      "telefono_contacto": "123456",
      "tipo_sangre": 5,
      "establecimiento": "FCA - CAMPUS UNP"
  },
  {
      "id": 15,
      "created_at": "2022-11-29T12:51:43.000000Z",
      "updated_at": "2022-11-29T12:51:43.000000Z",
      "solicitud": " :(",
      "creado_por": 20,
      "fecha_limite": "2022-11-30",
      "id_estado": 1,
      "volumenes_necesarios": 10,
      "nombre_apellido_donatario": "Barbie",
      "cedula_donatario": "12348",
      "telefono_contacto": "123978",
      "tipo_sangre": 1,
      "establecimiento": "EL CANTARO"
  },
  {
      "id": 2,
      "created_at": "2022-11-28T17:23:29.000000Z",
      "updated_at": "2022-11-28T17:23:29.000000Z",
      "solicitud": " Salven a Néstor!",
      "creado_por": 13,
      "fecha_limite": "2022-12-01",
      "id_estado": 1,
      "volumenes_necesarios": 90,
      "nombre_apellido_donatario": "nestorcito ternerito",
      "cedula_donatario": "4995862",
      "telefono_contacto": "0994674986",
      "tipo_sangre": 3,
      "establecimiento": "ROSHKA"
  },
  {
      "id": 17,
      "created_at": "2022-11-29T12:53:48.000000Z",
      "updated_at": "2022-11-29T12:53:48.000000Z",
      "solicitud": " urgente…",
      "creado_por": 20,
      "fecha_limite": "2022-12-01",
      "id_estado": 1,
      "volumenes_necesarios": 3,
      "nombre_apellido_donatario": "Ken",
      "cedula_donatario": "125879",
      "telefono_contacto": "189723",
      "tipo_sangre": 2,
      "establecimiento": "SODEP"
  },
  {
      "id": 29,
      "created_at": "2022-11-29T14:02:29.000000Z",
      "updated_at": "2022-11-29T14:02:29.000000Z",
      "solicitud": " urgente",
      "creado_por": 20,
      "fecha_limite": "2022-12-01",
      "id_estado": 1,
      "volumenes_necesarios": 7,
      "nombre_apellido_donatario": "Gigi",
      "cedula_donatario": "12456",
      "telefono_contacto": "456789",
      "tipo_sangre": 5,
      "establecimiento": "EL CANTARO"
  },
  {
      "id": 37,
      "created_at": "2022-11-29T16:22:39.000000Z",
      "updated_at": "2022-11-29T16:22:39.000000Z",
      "solicitud": " urgent..",
      "creado_por": 43,
      "fecha_limite": "2022-12-01",
      "id_estado": 1,
      "volumenes_necesarios": 3,
      "nombre_apellido_donatario": "pepe",
      "cedula_donatario": "159780",
      "telefono_contacto": "980025",
      "tipo_sangre": 8,
      "establecimiento": "ROSHKA"
  },
  {
      "id": 8,
      "created_at": "2022-11-29T12:16:53.000000Z",
      "updated_at": "2022-11-29T12:16:53.000000Z",
      "solicitud": " :(",
      "creado_por": 20,
      "fecha_limite": "2022-12-02",
      "id_estado": 1,
      "volumenes_necesarios": 10,
      "nombre_apellido_donatario": "Hunter",
      "cedula_donatario": "456789",
      "telefono_contacto": "123456",
      "tipo_sangre": 5,
      "establecimiento": "EL CANTARO"
  },
  {
      "id": 21,
      "created_at": "2022-11-29T13:15:59.000000Z",
      "updated_at": "2022-11-29T13:15:59.000000Z",
      "solicitud": " Urgente..",
      "creado_por": 20,
      "fecha_limite": "2022-12-02",
      "id_estado": 1,
      "volumenes_necesarios": 3,
      "nombre_apellido_donatario": "Bod",
      "cedula_donatario": "159456",
      "telefono_contacto": "159789",
      "tipo_sangre": 8,
      "establecimiento": "EL CANTARO"
  },
  {
      "id": 20,
      "created_at": "2022-11-29T13:11:34.000000Z",
      "updated_at": "2022-11-29T13:11:34.000000Z",
      "solicitud": "Urgente..",
      "creado_por": 20,
      "fecha_limite": "2022-12-03",
      "id_estado": 1,
      "volumenes_necesarios": 2,
      "nombre_apellido_donatario": "Arenita",
      "cedula_donatario": "895246",
      "telefono_contacto": "123056",
      "tipo_sangre": 5,
      "establecimiento": "SODEP"
  },
  {
      "id": 22,
      "created_at": "2022-11-29T13:18:34.000000Z",
      "updated_at": "2022-11-29T13:18:34.000000Z",
      "solicitud": " URGENTE..",
      "creado_por": 20,
      "fecha_limite": "2022-12-03",
      "id_estado": 1,
      "volumenes_necesarios": 3,
      "nombre_apellido_donatario": "Calamardo",
      "cedula_donatario": "789236",
      "telefono_contacto": "158746",
      "tipo_sangre": 3,
      "establecimiento": "Surubi-i, Mariano"
  },
  {
      "id": 23,
      "created_at": "2022-11-29T13:20:08.000000Z",
      "updated_at": "2022-11-29T13:20:08.000000Z",
      "solicitud": " URGENTE",
      "creado_por": 20,
      "fecha_limite": "2022-12-03",
      "id_estado": 1,
      "volumenes_necesarios": 5,
      "nombre_apellido_donatario": "DONCANGREJO",
      "cedula_donatario": "1546789",
      "telefono_contacto": "12546",
      "tipo_sangre": 1,
      "establecimiento": "Surubi-i, Mariano"
  },
  {
      "id": 30,
      "created_at": "2022-11-29T14:19:01.000000Z",
      "updated_at": "2022-11-29T14:19:01.000000Z",
      "solicitud": " Urgente",
      "creado_por": 1,
      "fecha_limite": "2022-12-04",
      "id_estado": 1,
      "volumenes_necesarios": 12,
      "nombre_apellido_donatario": "Nestor",
      "cedula_donatario": "4995862",
      "telefono_contacto": "0994647974",
      "tipo_sangre": 2,
      "establecimiento": "Surubi-i, Mariano"
  },
  {
      "id": 49,
      "created_at": "2023-03-07T19:07:09.000000Z",
      "updated_at": "2023-03-07T19:07:09.000000Z",
      "solicitud": "Ayuda porfa Lorem ipsum sidofniunsfurnfdjjaskdj",
      "creado_por": 50,
      "fecha_limite": "2023-02-30",
      "id_estado": 1,
      "volumenes_necesarios": 5,
      "nombre_apellido_donatario": "Miguel Ozuna",
      "cedula_donatario": "1234",
      "telefono_contacto": "234881",
      "tipo_sangre": 1,
      "establecimiento": "Los Cantaros"
  },
  {
      "id": 50,
      "created_at": "2023-03-07T19:11:38.000000Z",
      "updated_at": "2023-03-07T19:11:38.000000Z",
      "solicitud": "Ayuda porfa Lorem",
      "creado_por": 50,
      "fecha_limite": "2023-02-30",
      "id_estado": 1,
      "volumenes_necesarios": 5,
      "nombre_apellido_donatario": "Miguel Ozuna",
      "cedula_donatario": "1234",
      "telefono_contacto": "234881",
      "tipo_sangre": 1,
      "establecimiento": "Los Cantaros"
  },
  {
      "id": 51,
      "created_at": "2023-03-07T19:15:08.000000Z",
      "updated_at": "2023-03-07T19:15:08.000000Z",
      "solicitud": "Ayuda porfa Lorem",
      "creado_por": 50,
      "fecha_limite": "2023-02-30",
      "id_estado": 1,
      "volumenes_necesarios": 5,
      "nombre_apellido_donatario": "Miguel Ozuna",
      "cedula_donatario": "1234",
      "telefono_contacto": "234881",
      "tipo_sangre": 1,
      "establecimiento": "Los Cantaros"
  },
  {
      "id": 56,
      "created_at": "2023-03-15T13:53:32.000000Z",
      "updated_at": "2023-03-15T13:53:32.000000Z",
      "solicitud": "Ayuda porfa Lorem",
      "creado_por": 50,
      "fecha_limite": "2023-02-30",
      "id_estado": 1,
      "volumenes_necesarios": 5,
      "nombre_apellido_donatario": "SEBAS VALLEJOS",
      "cedula_donatario": "1234",
      "telefono_contacto": "234881",
      "tipo_sangre": 1,
      "establecimiento": "Los Cantaros"
  },
  {
      "id": 57,
      "created_at": "2023-03-15T14:43:51.000000Z",
      "updated_at": "2023-03-15T14:43:51.000000Z",
      "solicitud": "Ayuda porfa Lorem ipsum sidofniunsfurnfdjjaskdj",
      "creado_por": 55,
      "fecha_limite": "2023-02-30",
      "id_estado": 1,
      "volumenes_necesarios": 5,
      "nombre_apellido_donatario": "Miguel Ozuna",
      "cedula_donatario": "1234",
      "telefono_contacto": "234881",
      "tipo_sangre": 1,
      "establecimiento": "Los Cantaros"
  },
  {
      "id": 59,
      "created_at": "2023-03-17T13:50:57.000000Z",
      "updated_at": "2023-03-17T13:50:57.000000Z",
      "solicitud": "AyudaAAAA",
      "creado_por": 50,
      "fecha_limite": "2023-02-30",
      "id_estado": 1,
      "volumenes_necesarios": 5,
      "nombre_apellido_donatario": "SEBAS VALLEJOS",
      "cedula_donatario": "1234",
      "telefono_contacto": "234881",
      "tipo_sangre": 1,
      "establecimiento": "Los Cantaros"
  },
  {
      "id": 60,
      "created_at": "2023-03-17T13:52:30.000000Z",
      "updated_at": "2023-03-17T13:52:30.000000Z",
      "solicitud": "oppppppp",
      "creado_por": 50,
      "fecha_limite": "2023-02-30",
      "id_estado": 1,
      "volumenes_necesarios": 5,
      "nombre_apellido_donatario": "SEBAS VALLEJOS",
      "cedula_donatario": "1234",
      "telefono_contacto": "234881",
      "tipo_sangre": 1,
      "establecimiento": "Los Cantaros"
  },
  {
      "id": 52,
      "created_at": "2023-03-08T13:13:38.000000Z",
      "updated_at": "2023-03-08T13:13:38.000000Z",
      "solicitud": " ",
      "creado_por": 52,
      "fecha_limite": "2023-03-08",
      "id_estado": 1,
      "volumenes_necesarios": 100,
      "nombre_apellido_donatario": "pepegrillo",
      "cedula_donatario": "1231241",
      "telefono_contacto": "12309812903",
      "tipo_sangre": 3,
      "establecimiento": "EL CANTARO"
  },
  {
      "id": 54,
      "created_at": "2023-03-10T18:07:56.000000Z",
      "updated_at": "2023-03-10T18:07:56.000000Z",
      "solicitud": " uk7lf76c",
      "creado_por": 53,
      "fecha_limite": "2023-06-10",
      "id_estado": 1,
      "volumenes_necesarios": 0,
      "nombre_apellido_donatario": "Carlos",
      "cedula_donatario": "5095791",
      "telefono_contacto": "0985980780",
      "tipo_sangre": 1,
      "establecimiento": "EL CANTARO"
  },
  {
      "id": 55,
      "created_at": "2023-03-13T18:06:54.000000Z",
      "updated_at": "2023-03-13T18:06:54.000000Z",
      "solicitud": "Sangre de la buena",
      "creado_por": 54,
      "fecha_limite": "2025-09-13",
      "id_estado": 1,
      "volumenes_necesarios": 17,
      "nombre_apellido_donatario": "Mauricio Aguero",
      "cedula_donatario": "1234567",
      "telefono_contacto": "0991882993",
      "tipo_sangre": 5,
      "establecimiento": "ROSHKA"
  },
  {
      "id": 58,
      "created_at": "2023-03-16T18:19:10.000000Z",
      "updated_at": "2023-03-16T18:19:10.000000Z",
      "solicitud": " ",
      "creado_por": 54,
      "fecha_limite": "2050-03-18",
      "id_estado": 1,
      "volumenes_necesarios": 98,
      "nombre_apellido_donatario": "osdfs",
      "cedula_donatario": "poolside",
      "telefono_contacto": "0981518790",
      "tipo_sangre": 8,
      "establecimiento": "ROSHKA"
  }
]

const GenerarSolicitudes = () => {
  // const [showSolicitudes, setShowSolicitudes] = useState(false);

  // const toggle = () => {
  //   setShowSolicitudes(!showSolicitudes);
  // };

  const keys = Object.keys(peticion);
  return (
    <div
      id="main-container"
      className="d-flex flex-column container-fluid align-items-center p-0 m-0"
    >
      <div id="solicitudes-header-container" className="d-flex container-fluid text-center p-3 m-0">
        <div id="solicitudes-header">Solicitudes</div>
        <div id="mas-button-container">
          <button
            id="btn-agregarSolicitud"
            className="btn btn-link"
          >
            <i className="bi bi-plus-square-fill"></i>
          </button>
        </div>
      </div>
      <div
        id="misSolicitudes-container"
        className="d-flex justify-content-center align-items-center"
      >
        Mis solicitudes <input id="check-misSolicitudes" type="checkbox" />
      </div>

      {keys.map((key, index) => {
        return <Info data={peticion[key]} idContainer={index} key={index}/>;
      })} 
    </div>
  );
};

export default GenerarSolicitudes;
