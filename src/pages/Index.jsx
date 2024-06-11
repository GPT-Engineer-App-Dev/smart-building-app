import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { Box, Text, VStack } from '@chakra-ui/react';

// Define the icon for the building pins
const pinIcon = new L.Icon({
  iconUrl: require('../assets/pin-icon.png'),
  iconRetinaUrl: require('../assets/pin-icon.png'),
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
});

// Dummy sensor data for the buildings
const buildingsData = [
  { id: 1, name: 'Building 1', sensors: { temperature: '20°C', humidity: '30%' } },
  { id: 2, name: 'Building 2', sensors: { temperature: '22°C', humidity: '25%' } },
  // ... add dummy data for 10 buildings
];

const Index = () => {
  const [activeBuilding, setActiveBuilding] = useState(null);

  // Function to create markers for the buildings
  const BuildingMarkers = () => {
    const map = useMapEvents({
      click() {
        setActiveBuilding(null); // Deselect building when map is clicked
      },
    });

    return buildingsData.map((building) => (
      <Marker
        key={building.id}
        position={[59.9139 + Math.random() * 0.01, 10.7522 + Math.random() * 0.01]} // Random positions around Oslo
        icon={pinIcon}
        eventHandlers={{
          click: () => {
            setActiveBuilding(building);
          },
        }}
      />
    ));
  };

  return (
    <MapContainer center={[59.9139, 10.7522]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <BuildingMarkers />
      {activeBuilding && (
        <Popup
          position={[59.9139 + Math.random() * 0.01, 10.7522 + Math.random() * 0.01]}
          onClose={() => {
            setActiveBuilding(null);
          }}
        >
          <VStack>
            <Text fontWeight="bold">{activeBuilding.name}</Text>
            <Text>Temperature: {activeBuilding.sensors.temperature}</Text>
            <Text>Humidity: {activeBuilding.sensors.humidity}</Text>
          </VStack>
        </Popup>
      )}
    </MapContainer>
  );
};

export default Index;