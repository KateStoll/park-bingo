"use client";

import "../lib/leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface Park {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

interface ParkMapProps {
  parks: Park[];
  onCheckIn: (parkId: string) => void;
}

export default function ParkMap({ parks, onCheckIn }: ParkMapProps) {
  return (
    <MapContainer
      center={[41.5, -81.7]}
      zoom={7}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='© OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {parks.map((park) => (
        <Marker key={park.id} position={[park.lat, park.lng]}>
          <Popup>
            <strong>{park.name}</strong>
            <br />
            <button onClick={() => onCheckIn(park.id)}>
              Check in
            </button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
