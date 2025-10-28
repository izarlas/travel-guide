import Image from "next/image";
import greenMarker from "../../../public/greenMarker.png";
import blueMarker from "../../../public/blueMarker.png";
import redMarker from "../../../public/redMarker.png";

export default function MapFooter() {
  return (
    <div className="flex items-center gap-2 mt-3">
      <div>Location Markers | </div>
      <div className="flex flex-row items-center">
        Hotel
        <Image
          src={greenMarker}
          width={35}
          height={35}
          alt="Green Location Marker"
        />
      </div>
      <div className="flex flex-row items-center">
        Food
        <Image
          src={blueMarker}
          width={35}
          height={35}
          alt="Blue Location Marker"
        />
      </div>
      <div className="flex flex-row items-center">
        Attractions
        <Image
          className="ml-1"
          src={redMarker}
          width={30}
          height={30}
          alt="Red Location Marker"
        />
      </div>
    </div>
  );
}
