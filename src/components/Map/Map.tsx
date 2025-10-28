"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Location } from "../../types/Location";
import { LocationCategory } from "../../enums/LocationCategory";
import {
  blueMarkerIcon,
  greenMarkerIcon,
  hotelLocation,
  redMarkerIcon,
} from "../../constants";

export default function Map() {
  const hotelCoordinates: [number, number] = [
    hotelLocation.latitude,
    hotelLocation.longitude,
  ];
  const locations: Location[] = [
    {
      name: "Moco Museum",
      coordinates: {
        latitude: 41.391841,
        longitude: 2.16492,
      },
      category: LocationCategory.Museum,
    },
    {
      name: "Museu Picasso",
      coordinates: {
        latitude: 41.38527,
        longitude: 2.18002,
      },
      category: LocationCategory.Museum,
    },
    {
      name: "Casa Batlló",
      coordinates: {
        latitude: 41.39164,
        longitude: 2.16486,
      },
      category: LocationCategory.Museum,
    },

    {
      name: "Plaça d’Espanya",
      coordinates: {
        latitude: 41.37422,
        longitude: 2.14992,
      },
      category: LocationCategory.Sightseeing,
    },
    {
      name: "Park Güell",
      coordinates: {
        latitude: 41.4145,
        longitude: 2.1527,
      },
      category: LocationCategory.Sightseeing,
    },
    {
      name: "Parc de la Ciutadella",
      coordinates: {
        latitude: 41.388,
        longitude: 2.1867,
      },
      category: LocationCategory.Sightseeing,
    },
    {
      name: "Palau Güell",
      coordinates: {
        latitude: 41.3786,
        longitude: 2.1744,
      },
      category: LocationCategory.Sightseeing,
    },
    {
      name: "Basilica de Santa Maria del Mar",
      coordinates: {
        latitude: 41.3839,
        longitude: 2.1822,
      },
      category: LocationCategory.Sightseeing,
    },
    {
      name: "Sagrada Família",
      coordinates: {
        latitude: 41.4036,
        longitude: 2.1744,
      },
      category: LocationCategory.Sightseeing,
    },
    {
      name: "Casa Milà (La Pedrera)",
      coordinates: {
        latitude: 41.3953,
        longitude: 2.1619,
      },
      category: " Sightseeing",
    },
    {
      name: "Parc de Montjuïc",
      coordinates: {
        latitude: 41.3634,
        longitude: 2.165,
      },
      category: " Sightseeing",
    },
    {
      name: "Cathedral of Barcelona",
      coordinates: {
        latitude: 41.384,
        longitude: 2.176,
      },
      category: LocationCategory.Sightseeing,
    },

    {
      name: "Gothic Quarter",
      coordinates: {
        latitude: 41.3839,
        longitude: 2.1764,
      },
      category: LocationCategory.Sightseeing,
    },
    {
      name: "Barcelona Cathedral",
      coordinates: {
        latitude: 41.384,
        longitude: 2.176,
      },
      category: LocationCategory.Sightseeing,
    },

    {
      name: "Le Romane (Italian)",
      coordinates: {
        latitude: 41.3907,
        longitude: 2.1601,
      },
      category: LocationCategory.Food,
    },
    {
      name: "Sensi Bistro (Tapas)",
      coordinates: {
        latitude: 41.3809,
        longitude: 2.1773,
      },
      category: LocationCategory.Food,
    },
    {
      name: "Arcano (Mediterranean)",
      coordinates: {
        latitude: 41.3851,
        longitude: 2.1797,
      },
      category: LocationCategory.Food,
    },
    {
      name: "Pampa Grill (Argentinian)",
      coordinates: {
        latitude: 41.3857,
        longitude: 2.1688,
      },
      category: LocationCategory.Food,
    },
    {
      name: "Jon Cake (Cheesecake)",
      coordinates: {
        latitude: 41.3828,
        longitude: 2.1792,
      },
      category: LocationCategory.Food,
    },
    {
      name: "Runch Smokehouse (Burgers)",
      coordinates: {
        latitude: 41.3897,
        longitude: 2.1634,
      },
      category: LocationCategory.Food,
    },
  ];

  return (
    <MapContainer
      center={hotelCoordinates}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "90vh", width: "100%", borderRadius: "12px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={hotelCoordinates} icon={greenMarkerIcon}>
        <Popup>Hotel - La França Travellers</Popup>
      </Marker>
      {locations.map((location) => (
        <Marker
          key={location.name}
          position={[
            location.coordinates.latitude,
            location.coordinates.longitude,
          ]}
          icon={
            location.category === LocationCategory.Food
              ? blueMarkerIcon
              : redMarkerIcon
          }
        >
          <Popup>
            <strong>{location.name}</strong>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
