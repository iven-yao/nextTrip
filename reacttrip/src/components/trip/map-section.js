import TestMap from "../TestMap";
import { GoogleMap, MarkerF, DirectionsRenderer } from "@react-google-maps/api";
import getRoute from "../mockapi/directionsServices";

// const MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY || '';
const places = [{pos:{lat:34.0438524,lng:-118.2758077}, id:1},
                {pos:{lat:34.0524322,lng:-118.2720017}, id:2},
                {pos:{lat:34.0681401,lng:-118.2603378}, id:3}];
const zoom = 13;

const getCenter = (points) => {
    let count = points.length;
    let lat = 0;
    let lng = 0;

    points.map((point) => { 
        lat += point.pos.lat;
        lng += point.pos.lng;
    });

    return {lat: lat/count, lng: lng/count};
}

export default function MapSection(props) {
    const center = getCenter(places);
    return (
        <div className='flex h-full flex-col px-3 py-4 md:px-2'>
            <div className="mb-2 h-full items-start justify-start rounded-md bg-blue-600 p-2">
                <GoogleMap
                    center={center}
                    zoom={zoom}
                    mapContainerStyle={{ width: "100%", height: "100%", borderRadius:"5px" }}
                    options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                    }}
                >
                    <MarkerF position={center} />
                    {props.route && (
                    <DirectionsRenderer directions={props.route} />
                    )}
                </GoogleMap>
            </div>
        </div>
    );
}