import L from "leaflet";
import { LocationCoordinates } from "./types/Location";

export const greenMarketIcon: L.Icon = L.icon({
  iconUrl:
    "https://icones.pro/wp-content/uploads/2021/02/icone-de-broche-de-localisation-verte.png",
  iconSize: [60, 60],
});

export const blueMarketIcon: L.Icon = L.icon({
  iconUrl:
    "https://static.vecteezy.com/system/resources/thumbnails/018/888/732/small/location-map-icon-png.png",
  iconSize: [40, 40],
});

export const redMarketIcon: L.Icon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
});

export const hotelLocation: LocationCoordinates = {
  latitude: 41.37222,
  longitude: 2.15756,
};
