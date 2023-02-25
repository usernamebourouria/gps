import './App.css';
import { MapContainer ,Marker, Popup, TileLayer } from 'react-leaflet';
function App() {
  return (
    <div className="App">
      <MapContainer center={[36.752887, 3.042048]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />          
  <Marker position={[36.752887, 3.042048]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div>
  );
}

export default App;
