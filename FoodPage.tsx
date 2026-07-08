import { foodPlaces } from '../data/foodPlaces';
import { useUserLocation } from '../lib/useUserLocation';
import { getDistanceInKm } from '../lib/distance';

// Brenda komponentit:
const { location } = useUserLocation();

const placesWithDistance = foodPlaces.map(place => {
  if (!location) return { ...place, distance: null };
  const dist = getDistanceInKm(location.latitude, location.longitude, place.latitude, place.longitude);
  return { ...place, distance: dist };
}).sort((a, b) => (a.distance || 0) - (b.distance || 0));
