import { useLocation, useNavigate } from "react-router-dom"
import { Navbar } from "../components/navbar"
// import { PoiMarkers } from "./home";
import {Map, Marker}  from '@vis.gl/react-google-maps';
import Cal from "@calcom/embed-react";
import { Meeting } from "./meeting";


// import { CalcomWidget } from '@calcom/react-widget';

// import { useState } from "react";

export const Details=()=>{
    const navigate=useNavigate();
    const data=useLocation().state;
   let location={
        lat:data.Lattitude,
        lng:data.Longitude
      }


    return <div className="h-screen w-full overflow-none">
        <Navbar/>
          
          <div className="w-full h-9/10 flex flex-col mt-12 items-center">
               <div className="w-2/3 h-9/10">
               <button onClick={()=>navigate("/")} className="h-10 w-full mt-2 text-white font-semibold cursor-pointer bg-[#7643ED] rounded-xl">Back</button>
               <button onClick={()=>navigate("/meeting")} className="h-10 w-full mt-2 text-white font-semibold cursor-pointer bg-[#7643ED] rounded-xl">Want to talk?</button>
               <div className="flex ml-2 h-20 mt-4 flex flex-col justify-center rounded-xl shadow-md">
                <div className="flex items-center mt-4 ml-2">
                <img src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" className="h-6 w-6 cover" alt="" />
                <h1 className="text-xl font-semibold">Vedant Khasbage</h1>
                </div>
             </div>

             <div>
              
             </div>

             <div>
             </div>

             <div className="w-full h-5/10 mt-4 shadow-xl rounded-xl">
                image will be here
             </div>

             <div className="h-screen w-full mt-4">
                  
                  <div className="h-1/2 w-1/2">
                   <div className="w-full shadow-xl h-full">
                   <div className="flex h-10 shadow-md w-full font-bold items-center">
                     <div className="h-8 p-2">More Detail</div>
                   </div>
                     <div className="h-10 border-gray-300 mt-2 rounded-xl border-1 w-full flex items-center p-2">
                   <img src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" className="h-6 w-6 cover" alt="" />
                     <h1 className="font-md">{data.name}</h1>
                     </div>
                     <div className="h-10 border-gray-300 mt-2 rounded-xl border-1 w-full flex items-center p-2">
                    <img className="h-6 cover ml-2" src="https://www.svgrepo.com/show/342558/description.svg" alt="" />
                     <h1 className="p-1">Description : {data.Description}</h1>
                     </div>

                      <div className="h-10 border-gray-300 mt-2 rounded-xl border-1 w-full flex items-center p-2">
                         <img className="h-6 ml-2 w-6 cover" src="https://www.svgrepo.com/show/14478/email.svg" alt="" />
                        <h1 className="p-2">{data.email}</h1>
                      </div>

                      <div className="h-10 border-gray-300 mt-2 rounded-xl border-1 w-full flex items-center p-2">
                      <img className="h-6 cover" src="https://icons.veryicon.com/png/o/miscellaneous/commonly-used-icon-1/location-113.png" alt="" />
                      <h1 className="p-1">{data.Address}</h1>
                      </div>

                       <div className="h-10 border-gray-300 mt-2 rounded-xl border-1 w-full flex items-center p-2">
                        <img className="h-6 w-6 cover" src="https://www.svgrepo.com/show/352417/rupee-sign.svg" alt="" />
                        <h1 className="p-1">{data.Price} </h1>
                       </div>

                       <div className="h-10 border-gray-300 mt-2 rounded-xl border-1 w-full flex items-center p-2">
                           <img className="h-6 w-6 cover" src="https://www.svgrepo.com/show/309853/phone.svg" alt="" />
                          <h1 className="p-1">{data.phoneNo}</h1>
                       </div>
                   </div>
                  
                  </div>
                  {/* <div className="h-full w-1/2 bg-red-400"></div> */}
             <div className="w-full h-1/2">
                <Map
                     defaultZoom={13}
                     mapId='83980e1ef53c852d'
                     defaultCenter={ { lat: data.Lattitude, lng: data.Longitude } } >
                       <Marker position={location}/>
                  </Map>
             </div>
             </div>
               </div>
          </div>
    </div>
}