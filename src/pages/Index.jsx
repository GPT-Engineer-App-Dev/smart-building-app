import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const BuildingMarkers = () => {
  const map = useMapEvents({
    click: () => {
      // Logic to display sensor data card
    },
  });

  const buildings = [
    // Array of 10 building objects with 'id', 'name', 'position', and 'sensorData'
    // Use random positions within Oslo's latitude and longitude range
  ];

  return (
    <>
      {buildings.map(building => (
        <Marker
          key={building.id}
          position={building.position}
          icon={new L.Icon({
            iconUrl: 'path/to/pin-icon.png', // Replace with the actual path to the pin icon
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })}
        >
          <Popup>{building.sensorData}</Popup>
        </Marker>
      ))}
    </>
  );
};

const Index = () => {
  return (
    <MapContainer center={[59.9139, 10.7522]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <BuildingMarkers />
    </MapContainer>
  );
};

export default Index;