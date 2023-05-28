import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

interface MapProps {
  location: {
    lat: number
    lng: number
  }
  initialCenter: {
    lat: number
    lng: number
  }
  zoom: number
}

export default function MapContainer({ location }: MapProps) {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  }

  const center = {
    lat: location.lat,
    lng: location.lng,
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyA28m7V-M_PyA-vuUQzwX_IczXhKNWScPM">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  )
}
