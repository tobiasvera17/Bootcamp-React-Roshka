import { Marker, Popup, useMapEvents } from "react-leaflet";
import axios from "axios";

const ClickMap = ({ setMousePos, setResumen_Ubicacion }) => {
  const map = useMapEvents({
    click: (event) => {
      if (event.latlng) {
        setMousePos(event.latlng);
        let data;
          axios
            .get(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${event.latlng.lat}&lon=${event.latlng.lng}`
            )
            .then((response) => {
              // console.log(response)
              if (response.status == 200) {
                data = response.data.display_name;
                // console.log(data);
                setResumen_Ubicacion(data);
              }
            });
      }
    },
  });
  return null;
};

export default ClickMap;
