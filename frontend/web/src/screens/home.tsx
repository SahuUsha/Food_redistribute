import { useEffect } from "react";
import { Card } from "../components/card"
import { Navbar } from "../components/navbar"
// import { GoogleMap,LoadScript,Marker } from "@react-google-maps/api"
import {Map, AdvancedMarker, MapCameraChangedEvent,Pin}  from '@vis.gl/react-google-maps';
type Poi ={ key: string, location: google.maps.LatLngLiteral }
const locations: Poi[] = [
  // {key: 'Pension Nagar', location: { lat: 21.14631, lng: 79.08491 }},
  // {key: 'Pension Nagar', location: { lat: 20.14631, lng: 79.78491 }},
  // {key: 'Pension Nagar', location: { lat: 20.15631, lng: 79.78491 }},
  // {key: 'Pension Nagar', location: { lat: 20.16631, lng: 79.78491 }},
  // {key: 'Pension Nagar', location: { lat: 22.14631, lng: 79.48491 }},
  // {key: 'Pension Nagar', location: { lat: 21.54631, lng: 80.08491 }},
  // {key: 'Pension Nagar', location: { lat: 21.14631, lng: 79.08491 }},
  // {key: 'wardha', location: { lat: 20.7453, lng: 78.6022 }},
  // // {key: 'Pension Nagrar', location: { lat: 25.14631, lng: 72.08491 }},
  // // {key: 'Pension Nagrar', location: { lat: 29.14631, lng: 79.08491 }},
  // {key: 'Wardha', location: { lat: 18.5925785, lng: 73.7183639 }},
];

export const Home=()=>{


    
 
    return <div className="h-screen w-full">
          <Navbar/>

          <div className="flex">
          <div className="h-9/10 flex justify-center gap-4 flex-wrap w-1/2">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>

          <div className="rounded-xl h-[600px] w-1/2 mt-8">
         
   <Map
      defaultZoom={13}
      mapId='83980e1ef53c852d'
      defaultCenter={ { lat: 21.1458, lng: 79.0882 } }
      onCameraChanged={ (ev: MapCameraChangedEvent) =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
      }>
        <PoiMarkers pois={locations} />
   </Map>
          </div>
          
          </div>
    </div>
}

const PoiMarkers = (props: {pois: Poi[]}) => {


  console.log("cookies are : ",document.cookie);
  return (
    <>
      {props.pois.map( (poi: Poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}>
        <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
    </>
  );
};