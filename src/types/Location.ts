export type LocationCoordinates = {
  latitude: number;
  longitude: number;
};

export type Location = {
  name: string;
  coordinates: LocationCoordinates;
  category: string;
  // walkingDistance: number;
  // price?: number;
  // websiteUrl?: string;
};
