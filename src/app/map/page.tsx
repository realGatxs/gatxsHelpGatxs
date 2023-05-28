"use client";

import * as React from "react";
import MapContainer from "@/components/MapContainer";
import NeedList from "@/components/NeedList";
import SearchBar from "@/components/SearchBar";
import { Help } from "@prisma/client";
import { codes } from "@/lib/data";

export default function MapPage() {
	const [location, setLocation] = React.useState([51.334884, 12.407173]);
	const [helps, setHelps] = React.useState<Help[]>([]);
	const [zip, setZip] = React.useState(codes[0]);

	React.useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			setLocation([position.coords.latitude, position.coords.longitude]);
		});
	}, []);

	React.useEffect(() => {
		console.log(location);
	}, [location]);

	React.useEffect(() => {
		fetch(`/api/help?zip=${zip}`)
			.then((res) => res.json())
			.then((res) => setHelps(res.helps));
	}, [zip]);

	return (
		<>
			<SearchBar selected={zip} setSelected={setZip} fixed />
			<div className="bg-blue">
				<MapContainer
					location={{
						lat: location[0],
						lng: location[1],
					}}
					initialCenter={{
						lat: 51.325651338781235,
						lng: 12.40062237421821,
					}}
					zoom={10}
				/>
				{helps.map((help) => (
					<div key={help.id} className="text-white p-5">
						Need help with:
						<NeedList text={help.text} />
					</div>
				))}
			</div>
		</>
	);
}
