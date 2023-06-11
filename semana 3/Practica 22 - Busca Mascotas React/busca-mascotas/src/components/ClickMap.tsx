import { Marker, Popup, useMapEvents } from "react-leaflet";

const ClickMap = ({ setMousePos, mousePos }) => {
  const map = useMapEvents({
    click: (event) => {
      if (event.latlng) {
        setMousePos(event.latlng);
      }
    },
  });
  return null;
};

export default ClickMap;
