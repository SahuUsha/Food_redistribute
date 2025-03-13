import { useEffect, useRef, useState } from "react";
import { Navbar } from "../components/navbar";
import { useLocation, useNavigate } from "react-router-dom";
// import { InfoWindow } from "react-google-maps";
import axios from "axios";

export const Location=()=>{
    const navigate=useNavigate();
    const addressId=useLocation().state;
    console.log("my address Id is : ",location);

     const mapRef = useRef<HTMLDivElement>(null);
      const myLatlng = { lat:19.0760, lng:72.8777};

      const [lattitude,setlattitude]=useState("");
      const [longitude,setlongitude]=useState("");
      const addressRef=useRef<HTMLInputElement>(null);


      const handleAddress=async()=>{

        if(addressRef.current?.value===""){
            alert("Please Enter Valid Address");
            return;
        } else{
            const resp=await axios.post("http://localhost:3000/user/address",{
                id:addressId,
                lattitude:lattitude,
                longitude:longitude,
                address:addressRef.current?.value
            },{withCredentials:true})
            if(resp.data.message==="done"){
                navigate("/verifyacc",{state:addressId})
            }
    
            console.log(resp);
        }
     
      }
    
    
      useEffect(() => {
        async function initMap() {
          // Load the Maps API
          const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    
          if (mapRef.current) {
            const map = new google.maps.Map(mapRef.current, {
              zoom: 4,
              center: myLatlng,
            });
    
            let infoWindow = new google.maps.InfoWindow({
              content: "Click the map to get Your Location!",
              position: myLatlng,
            });
    
            infoWindow.open(map);
    
            map.addListener("click", (mapsMouseEvent: any) => {
              infoWindow.close();
              infoWindow = new google.maps.InfoWindow({
                position: mapsMouseEvent.latLng,
              });
              console.log(mapsMouseEvent.latLng.toJSON())
              setlattitude(mapsMouseEvent.latLng.toJSON().lat);
              setlongitude(mapsMouseEvent.latLng.toJSON().lng);
              infoWindow.setContent(
                JSON.stringify("Thanks for Sharing Your Location")
              );
              infoWindow.open(map);
            });
          }
        }
    
        initMap();
      }, []);

    return <div className="h-screen w-full flex flex-col items-center">
      <Navbar/>
     <div className="w-full flex justify-center flex-col mt-8 items-center">
     <h1 className="text-xl font-semibold mb-8">Click On Your Exact Location From Below Map</h1>
       </div>
       <div className="h-1/2 w-2/3 flex " ref={mapRef}>
     </div>

     <div className="w-full flex flex-col justify-center items-center mt-4">
     <input ref={addressRef} className="h-10 w-1/2 rounded-xl border-1 p-2" type="text" placeholder="Enter Your Correct Address"/>
     <button onClick={handleAddress} className="h-10 w-1/2 mt-2 text-white font-semibold cursor-pointer bg-[#7643ED] rounded-xl">Step 2/3</button>
     <button onClick={()=>navigate("/create")} className="h-10 w-1/2 mt-2 text-white font-semibold cursor-pointer bg-[#7643ED] rounded-xl">Back</button>

     </div>
    </div>
}