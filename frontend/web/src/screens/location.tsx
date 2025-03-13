import { useEffect, useRef } from "react";
import { Navbar } from "../components/navbar";
import { useNavigate } from "react-router-dom";
import { InfoWindow } from "react-google-maps";

export const Location=()=>{
    const navigate=useNavigate();

     const mapRef = useRef<HTMLDivElement>(null);
      const myLatlng = { lat:19.0760, lng:72.8777};
    
    
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
              infoWindow.setContent(
                JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2),
                // JSON.stringify("Thanks for Sharing Your Location")
              );
              infoWindow.open(map);
              console.log("Info : ",infoWindow)
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
     <input className="h-10 w-1/2 rounded-xl border-1 p-2" type="text" placeholder="Enter Your Correct Address"/>
     <button onClick={()=>navigate("/verifyacc")} className="h-10 w-1/2 mt-2 text-white font-semibold cursor-pointer bg-[#7643ED] rounded-xl">Step 2/3</button>
     <button onClick={()=>navigate("/create")} className="h-10 w-1/2 mt-2 text-white font-semibold cursor-pointer bg-[#7643ED] rounded-xl">Back</button>

     </div>
    </div>
}