import { useEffect } from "react";
import { Card } from "../components/card"
import { Navbar } from "../components/navbar"
// import { GoogleMap,LoadScript,Marker } from "@react-google-maps/api"
import {Map, AdvancedMarker, MapCameraChangedEvent,Pin}  from '@vis.gl/react-google-maps';
type Poi ={ key: string, location: google.maps.LatLngLiteral }
const locations: Poi[] = [
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