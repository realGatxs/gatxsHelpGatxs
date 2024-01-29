import { codeCoordinates } from "@/lib/data";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { withCoalescedInvoke } from "next/dist/lib/coalesced-function";
import React, { useEffect, useState } from "react";
import { HiScale } from "react-icons/hi";
import NeedList from "./NeedList";

interface MapProps {
	location: {
		lat: number;
		lng: number;
	};
	initialCenter: {
		lat: number;
		lng: number;
	};
	zoom: number;
	zipCodes: Array<{
		code: string;
		coordinates: {
			lat: number;
			lng: number;
		};
	}>;
	selectedZip: string;
	setSelectedZip: React.Dispatch<React.SetStateAction<string>>;
}

export const MapContainer: React.FunctionComponent<MapProps> = ({
	location,
	zipCodes,
	setSelectedZip,
}) => {
	const mapContainerStyle = {
		width: "100%",
		height: "400px",
	};

	const center = {
		lat: location.lat,
		lng: location.lng,
	};

	const [markers, setMarkers] = useState(zipCodes);

	console.log(window);

	function iconSize() {
		if (window.google) return new window.google.maps.Size(24, 24);
		return;
	}

	// async function scale(){
	// 	const scale = await new window.google.maps.Size(24, 24)
	// 	return
	// }

	// const iconSize = new window.google.maps.Size(24, 24);

	return (
		<LoadScript googleMapsApiKey="AIzaSyA28m7V-M_PyA-vuUQzwX_IczXhKNWScPM">
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				center={center}
				zoom={10}
			>
				{markers.map((marker, idx) => (
					<>
						<Marker
							icon={{
								url: "https://cdn.icon-icons.com/icons2/2248/PNG/512/cat_icon_138789.png",
								scaledSize: iconSize(),
							}}
							key={`${marker.code}` + `-${idx}`}
							position={marker.coordinates}
							onClick={() => {
								setSelectedZip(marker.code);
							}}
						/>
					</>
				))}
			</GoogleMap>
		</LoadScript>
	);
};

//   const [coordinates, setCoordinates] = React.useState<GeocodeResult[]>([]);

//   React.useEffect(() =>{
// Promise.all(zipCodes.map(geocodeZIPCode) ).then(setCoordinates).catch(console.error);
//   },
//  [zipCodes, setCoordinates]);

// return (
//    <LoadScript googleMapsApiKey="AIzaSyA28m7V-M_PyA-vuUQzwX_IczXhKNWScPM">
//     <GoogleMap
//       mapContainerStyle={mapContainerStyle}
//       center={center}
//       zoom={10}
//     >
//       {
//         coordinates.map((coordinates)=>{
//            let coordinate = {
//             lat: coordinates.latitude,
//             lng: coordinates.longitude
//            }
//           return <>
//           <Marker position={coordinate} />
//           </>
//         })
//       }
//     </GoogleMap>
//   </LoadScript>
// )

export default MapContainer;
