import Map from "../../components/Map/Map";
import MapFooter from "../../components/MapFooter/MapFooter";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Places to visit | Barcelona</h1>
      <Map />
      <MapFooter />
    </main>
  );
}
