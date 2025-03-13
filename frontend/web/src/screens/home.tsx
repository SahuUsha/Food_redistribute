import { useEffect, useState } from "react";
import { Card } from "../components/card"
import { Navbar } from "../components/navbar"
// import { GoogleMap,LoadScript,Marker } from "@react-google-maps/api"
import {Map, AdvancedMarker,Pin}  from '@vis.gl/react-google-maps';
import axios from "axios";
type Poi ={location: {lat:number;lng:number }}
// const locations: Poi[] =[];

export const Home=()=>{

  const [locations,setlocations]=useState<Poi[]>([]);

      useEffect(()=>{
         axios.get("http://localhost:3000/user/placesdata").then((resp)=>{
          console.log(resp);
           const formatedData=(resp.data.placesData).map((data:any)=>({
            location:{
              lat:data.Lattitude,
              lng:data.Longitude
            }
           }))
           setlocations(formatedData);
         })  
      },[])
    
      console.log("areay is : ",locations);
 
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
      defaultCenter={ { lat: 21.1458, lng: 79.0882 } } >
        <PoiMarkers pois={locations} />
   </Map>
          </div>
          
          </div>
    </div>
}

const PoiMarkers = (props: {pois: Poi[]}) => {


  console.log("pros are s:",props.pois);
  return (
    <>
  
  
      {props.pois.map( (poi: Poi) => (
        <AdvancedMarker
          position={poi.location}>
        <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
    </>
  );
};