import DoubleAccordion from "./Componentes/DoubleAccordion";
import Card from "./Componentes/Card";
import MultiAccordion from "./Componentes/MultiAccordion";
import BotonNormal from "./Componentes/Botones/BotonNormal";
import BotonNormalSecundario from "./Componentes/Botones/BotonNormalSecundario";
import BotonNormalDisabled from "./Componentes/Botones/BotonNormalDisabled";
import BotonMasIzquierdaNormal from "./Componentes/Botones/BotonMasIzquierdaNormal";
import BotonMasIzquierdaSecundario from "./Componentes/Botones/BotonMasIzquierdaSecundario";
import BotonMasIzquierdaDisabled from "./Componentes/Botones/BotonMasIzquierdaDisabled";
import BotonMasDerechaNormal from "./Componentes/Botones/BotonMasDerechaNormal";
import BotonMasDerechaSecundario from "./Componentes/Botones/BotonMasDerechaSecundario";
import BotonMasDerechaDisabled from "./Componentes/Botones/BotonMasDerechaDisabled";
import BotonOutlined from "./Componentes/Botones/BotonOutlined";
import BotonOutlinedSecundario from "./Componentes/Botones/BotonOutlinedSecundario";
import BotonOutlinedDisabled from "./Componentes/Botones/BotonOutlinedDisabled";
import BotonMasIzquierdaOutlined from "./Componentes/Botones/BotonMasIzquierdaOutlined";
import BotonMasIzquierdaOutlinedSecundario from "./Componentes/Botones/BotonMasIzquierdaOutlinedSecundario";
import BotonMasIzquierdaOutlinedDisabled from "./Componentes/Botones/BotonMasIzquierdaOutlinedDisabled";
import BotonMasDerechaOutlined from "./Componentes/Botones/BotonMasDerechaOutlined";
import BotonMasDerechaOutlinedSecundario from "./Componentes/Botones/BotonMasDerechaOutlinedSecundario";
import BotonMasDerechaOutlinedDisabled from "./Componentes/Botones/BotonMasDerechaOutlinedDisabled";
import BotonVacio from "./Componentes/Botones/BotonVacio";
import BotonMasIzquierdaVacio from "./Componentes/Botones/BotonMasIzquierdaVacio";
import BotonMasDerechaVacio from "./Componentes/Botones/BotonMasDerechaVacio";

let elements = [
  [
    {
      title: "titulo 1",
      content:
        "Culpa do Lorem quis irure nostrud exercitation dolore exercitation laboris laboris excepteur occaecat. Velit esse esse aliqua magna Lorem do veniam sunt laborum. Aute deserunt mollit deserunt est elit voluptate officia. Do consequat sit aute eiusmod veniam ea dolor dolor elit. Qui labore eu ea aliqua enim qui non nostrud dolore tempor laborum aute dolore occaecat. Nulla non mollit fugiat eiusmod ex commodo elit adipisicing.",
    },
    {
      title: "titulo 2",
      content:
        "Occaecat commodo proident cillum labore proident laboris mollit culpa in voluptate pariatur. Dolore laboris voluptate amet tempor. Laboris ut ad ipsum sunt. Et nulla cillum non sit nostrud cupidatat id qui pariatur minim. Enim qui dolor id elit voluptate irure exercitation anim mollit nisi Lorem excepteur id.",
    },
    {
      title: "titulo 3",
      content:
        "Eu ut ad excepteur dolor velit quis laboris. Enim ad esse est id ullamco commodo officia pariatur incididunt enim velit adipisicing commodo esse. Qui mollit nisi irure nisi eu dolore et consequat reprehenderit aute eiusmod ullamco. Irure pariatur anim elit qui nulla.",
    },
  ],
  [
    {
      title: "titulo 4",
      content:
        "Culpa do Lorem quis irure nostrud exercitation dolore exercitation laboris laboris excepteur occaecat. Velit esse esse aliqua magna Lorem do veniam sunt laborum. Aute deserunt mollit deserunt est elit voluptate officia. Do consequat sit aute eiusmod veniam ea dolor dolor elit. Qui labore eu ea aliqua enim qui non nostrud dolore tempor laborum aute dolore occaecat. Nulla non mollit fugiat eiusmod ex commodo elit adipisicing.",
    },
    {
      title: "titulo 5",
      content:
        "Occaecat commodo proident cillum labore proident laboris mollit culpa in voluptate pariatur. Dolore laboris voluptate amet tempor. Laboris ut ad ipsum sunt. Et nulla cillum non sit nostrud cupidatat id qui pariatur minim. Enim qui dolor id elit voluptate irure exercitation anim mollit nisi Lorem excepteur id.",
    },
    {
      title: "titulo 6",
      content:
        "Eu ut ad excepteur dolor velit quis laboris. Enim ad esse est id ullamco commodo officia pariatur incididunt enim velit adipisicing commodo esse. Qui mollit nisi irure nisi eu dolore et consequat reprehenderit aute eiusmod ullamco. Irure pariatur anim elit qui nulla.",
    },
  ],
];

let elements2 = [
  {
    title: "titulo 1",
    content:
      "Culpa do Lorem quis irure nostrud exercitation dolore exercitation laboris laboris excepteur occaecat. Velit esse esse aliqua magna Lorem do veniam sunt laborum. Aute deserunt mollit deserunt est elit voluptate officia. Do consequat sit aute eiusmod veniam ea dolor dolor elit. Qui labore eu ea aliqua enim qui non nostrud dolore tempor laborum aute dolore occaecat. Nulla non mollit fugiat eiusmod ex commodo elit adipisicing.",
    imgSrc: "./images/AI-0.jpg",
  },
  {
    title: "titulo 2",
    content:
      "Occaecat commodo proident cillum labore proident laboris mollit culpa in voluptate pariatur. Dolore laboris voluptate amet tempor. Laboris ut ad ipsum sunt. Et nulla cillum non sit nostrud cupidatat id qui pariatur minim. Enim qui dolor id elit voluptate irure exercitation anim mollit nisi Lorem excepteur id.",
    imgSrc: "./images/AI-1.jpg",
  },
  {
    title: "titulo 3",
    content:
      "Eu ut ad excepteur dolor velit quis laboris. Enim ad esse est id ullamco commodo officia pariatur incididunt enim velit adipisicing commodo esse. Qui mollit nisi irure nisi eu dolore et consequat reprehenderit aute eiusmod ullamco. Irure pariatur anim elit qui nulla.",
    imgSrc: "./images/AI-2.jpg",
  },
];

function App() {
  return (
    <>
      <DoubleAccordion data={elements} id={1}></DoubleAccordion>

      <Card
        imgSrc={"./images/0.jpg"}
        title={"It's Closing Time"}
        content={
          "Veniam qui nulla eu in labore. Amet ad ad exercitation dolor aliquip commodo fugiat dolor. Est sit veniam ut cupidatat fugiat consequat quis laborum incididunt laborum nostrud. Ad pariatur ullamco occaecat labore adipisicing minim exercitation velit ea."
        }
        buttons={["STATE", "COST", "ORPHAN"]}
        date={"04/05/2022"}
        rLink={"#"}
        downloadLink={"#"}
        id={1}
      />

      <MultiAccordion data={elements2} id={2} />
      <div className="container">
        <BotonNormal content="hola" />
        <BotonNormalSecundario content="hola" />
        <BotonNormalDisabled content="hola" />
        <br/>
        <BotonMasIzquierdaNormal content="hola"/>
        <BotonMasIzquierdaSecundario content="hola"/>
        <BotonMasIzquierdaDisabled content="hola"/>
        <br/>
        <BotonMasDerechaNormal content="hola"/>
        <BotonMasDerechaSecundario content="hola"/>
        <BotonMasDerechaDisabled content="hola"/>
        <br/>
        <BotonOutlined content="hola"/>
        <BotonOutlinedSecundario content="hola"/>
        <BotonOutlinedDisabled content="hola"/>
        <br/>
        <BotonMasIzquierdaOutlined content="hola"/>
        <BotonMasIzquierdaOutlinedSecundario content="hola"/>
        <BotonMasIzquierdaOutlinedDisabled content="hola"/>
        <br/>
        <BotonMasDerechaOutlined content="hola"/>
        <BotonMasDerechaOutlinedSecundario content="hola"/>
        <BotonMasDerechaOutlinedDisabled content="hola"/>
        <br/>
        <BotonVacio content={"hola"} bgcolor="transparent" color="#1155cc"/> 
        <BotonVacio content={"hola"} bgcolor="transparent" textDecoration="underline" color="#1155cc"/>
        <BotonMasDerechaVacio content="hola"/>
        <BotonMasIzquierdaVacio content="hola"/>
      </div>
    </>
  );
}

export default App;
