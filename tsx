import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { pois } from '../data/pois';
import { useUserLocation } from '../lib/useUserLocation';

export default function ExplorePage() {
  const { location } = useUserLocation(); // Lokacioni live i përdoruesit në Tiranë

  // Qendra e Tiranës (Sheshi Skënderbej) si default
  const defaultCenter: [number, number] = [41.3275, 19.8187]; 
  const mapCenter = location ? [location.latitude, location.longitude] as [number, number] : defaultCenter;

  return (
    <div className="h-screen w-full p-4">
      <MapContainer center={mapCenter} zoom={14} className="h-[70vh] w-full rounded-xl shadow-lg">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Shfaq pikat e interesit të Tiranës */}
        {pois.map((poi) => (
          <Marker key={poi.id} position={[poi.latitude, poi.longitude]}>
            <Popup>
              <div className="p-2">
                <h3 className="font-bold">{poi.name}</h3>
                <p className="text-sm text-gray-600">{poi.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
