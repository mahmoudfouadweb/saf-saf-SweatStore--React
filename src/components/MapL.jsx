import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapL = () => {
  return (
    <MapContainer
      center={[30.562502965813092, 31.008290933034747]}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[30.559287925712667, 31.007951281598928]}>
        <Popup>
          فرع نيو صفصف <br /> أمام المحافظة، شبين الكوم، المنوفية <br />{" "}
          0482233150 \ 01062224488
        </Popup>
      </Marker>
      <Marker position={[30.56670618492769, 31.007105533089813]}>
        <Popup>
           Italian gelato فرع<br />
          أنور السادات، شبين الكوم، المنوفية <br /> 0482233150 \ 01062224488
        </Popup>
      </Marker>
      <Marker position={[30.557435551923962, 31.0106975548877]}>
        <Popup>
          فرع صف صف اجين <br />
          جمال عبد الناصر، شبين الكوم، المنوفية <br /> 0482311150 \ 01062224488
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default MapL;
