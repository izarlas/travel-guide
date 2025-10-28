"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Location } from "../../types/Location";
import { LocationCategory } from "../../enums/LocationCategory";

const greenMarketIcon = L.icon({
  iconUrl:
    "https://icones.pro/wp-content/uploads/2021/02/icone-de-broche-de-localisation-verte.png",
  iconSize: [60, 60],
});

const blueMarketIcon = L.icon({
  iconUrl:
    "https://static.vecteezy.com/system/resources/thumbnails/018/888/732/small/location-map-icon-png.png",
  iconSize: [40, 40],
});

const redMarketIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
});

export default function Map() {
  const hotelLocation: [number, number] = [41.37222, 2.15756];
  const locations: Location[] = [
    {
      name: "Moco Museum",
      position: [41.391841, 2.16492],
      category: LocationCategory.Museum,
    },
    {
      name: "Museu Picasso",
      position: [41.38527, 2.18002],
      category: LocationCategory.Museum,
    },
    {
      name: "Casa Batlló",
      position: [41.39164, 2.16486],
      category: LocationCategory.Museum,
    },

    {
      name: "Plaça d’Espanya",
      position: [41.37422, 2.14992],
      category: LocationCategory.Sightseeing,
    },
    {
      name: "Park Güell",
      position: [41.4145, 2.1527],
      category: LocationCategory.Sightseeing,
    },
    {
      name: "Parc de la Ciutadella",
      position: [41.388, 2.1867],
      category: LocationCategory.Sightseeing,
    },
    {
      name: "Palau Güell",
      position: [41.3786, 2.1744],
      category: LocationCategory.Sightseeing,
    },
    {
      name: "Basilica de Santa Maria del Mar",
      position: [41.3839, 2.1822],
      category: LocationCategory.Sightseeing,
    },
    {
      name: "Sagrada Família",
      position: [41.4036, 2.1744],
      category: LocationCategory.Sightseeing,
    },
    {
      name: "Casa Milà (La Pedrera)",
      position: [41.3953, 2.1619],
      category: " Sightseeing",
    },
    {
      name: "Parc de Montjuïc",
      position: [41.3634, 2.165],
      category: " Sightseeing",
    },
    {
      name: "Cathedral of Barcelona",
      position: [41.384, 2.176],
      category: LocationCategory.Sightseeing,
    },

    {
      name: "Gothic Quarter",
      position: [41.3839, 2.1764],
      category: LocationCategory.Sightseeing,
    },
    {
      name: "Barcelona Cathedral",
      position: [41.384, 2.176],
      category: LocationCategory.Sightseeing,
    },

    {
      name: "Le Romane (Italian)",
      position: [41.3907, 2.1601],
      category: LocationCategory.Food,
    },
    {
      name: "Sensi Bistro (Tapas)",
      position: [41.3809, 2.1773],
      category: LocationCategory.Food,
    },
    {
      name: "Arcano (Mediterranean)",
      position: [41.3851, 2.1797],
      category: LocationCategory.Food,
    },
    {
      name: "Pampa Grill (Argentinian)",
      position: [41.3857, 2.1688],
      category: LocationCategory.Food,
    },
    {
      name: "Jon Cake (Cheesecake)",
      position: [41.3828, 2.1792],
      category: LocationCategory.Food,
    },
    {
      name: "Runch Smokehouse (Burgers)",
      position: [41.3897, 2.1634],
      category: LocationCategory.Food,
    },
  ];

  return (
    <MapContainer
      center={hotelLocation}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "600px", width: "100%", borderRadius: "12px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={hotelLocation} icon={greenMarketIcon}>
        <Popup>Hotel - La França Travellers</Popup>
      </Marker>
      {locations.map((location) => (
        <Marker
          key={location.name}
          position={location.position as [number, number]}
          icon={
            location.category === LocationCategory.Food
              ? blueMarketIcon
              : redMarketIcon
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
