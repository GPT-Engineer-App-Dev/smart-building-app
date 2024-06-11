// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const pinIcon = new L.Icon({
  iconUrl: require('../assets/pin-icon.png'),
  iconRetinaUrl: require('../assets/pin-icon.png'),
  iconSize: new L.Point(30, 30),
  className: 'leaflet-div-icon'
});

const buildings = [
  { id: 1, name: 'Building 1', sensors: { temperature: '20°C', humidity: '30%' }, lat: 59.9139, lng: 10.7522 },
  // Add 9 more buildings with unique coordinates and dummy sensor data
];

const Index = () => {
  return (
    <MapContainer center={[59.9139, 10.7522]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {buildings.map((building) => (
        <Marker key={building.id} position={[building.lat, building.lng]} icon={pinIcon}>
          <Popup>
            <div>
              <h2>{building.name}</h2>
              <p>Temperature: {building.sensors.temperature}</p>
              <p>Humidity: {building.sensors.humidity}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Index;
