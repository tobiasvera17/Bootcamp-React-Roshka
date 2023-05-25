import DoubleAccordion from "./Componentes/DoubleAccordion";
import Card from "./Componentes/Card";
import MultiAccordion from "./Componentes/MultiAccordion";

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
    </>
  );
}

export default App;
