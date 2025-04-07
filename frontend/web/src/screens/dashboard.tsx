import { useEffect, useState } from "react";
import { Card } from "../components/card"
import { Navbar } from "../components/navbar"
// import { GoogleMap,LoadScript,Marker } from "@react-google-maps/api"
import {Map, AdvancedMarker,Pin}  from '@vis.gl/react-google-maps';
import axios from "axios";
import { useNavigate } from "react-router-dom";
type Poi ={location: {lat:number;lng:number }}
// const locations: Poi[] =[];

export const Dashboard=()=>{
  const navigate=useNavigate();

 const [locations,setlocations]=useState<Poi[]>([]);
  const [carddata,setcarddata]=useState([]);

      useEffect(()=>{
         axios.get("http://localhost:3000/user/placesdata").then((resp)=>{
          console.log(resp);
          setcarddata(resp.data.placesData)
           const formatedData=(resp.data.placesData).map((data:any)=>({
            location:{
              lat:data.Lattitude,
              lng:data.Longitude
            }
           }))
           setlocations(formatedData);
         })  
      },[])
    
      // console.log("areay is : ",locations);
      console.log("card data is : ",carddata)
 
    return <div className="h-screen w-full">
          <Navbar/>
          <div className="flex h-screen w-full justify-between p-16 items-center">
            <div className="items-center flex flex-col justify-center">
              <button onClick={()=>navigate("/create")} className="h-12 cursor-pointer w-48 rounded-3xl bg-[#D6F34B]">Contribute</button>
              <h1 className="font-semibold">
              "There are people in the world so hungry, that God cannot appear to them except in the form of bread."
              </h1>
            </div>

          <div className="rounded-xl h-[600px] w-1/2 mt-24">
         
   <Map
      defaultZoom={13}
      mapId='83980e1ef53c852d'
      defaultCenter={ { lat: 21.1458, lng: 79.0882 } } >
        <PoiMarkers pois={locations} />
   </Map>
          </div>
          </div>

          {/* <div>
          <div className="max-h-9/10 flex gap-4 flex-wrap w-1/2">
          { carddata.map(({img,id,email,name,Address,Description,Price,phoneNo,Lattitude,Longitude})=>
          // console.log(data)
             <Card img={img} Lattitude={Lattitude} Longitude={Longitude} phoneNo={phoneNo} id={id} name={name} email={email} Description={Description} Address={Address} Price={Price}/>
          )
           
          }
          </div>
          </div> */}
    </div>
}

export const PoiMarkers = (props: {pois: Poi[]}) => {


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