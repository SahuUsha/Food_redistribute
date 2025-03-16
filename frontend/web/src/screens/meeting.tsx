import Cal from "@calcom/embed-react";
import { Navbar } from "../components/navbar";
import { useEffect, useState } from "react";
export const Meeting = ()=>{
    const [reload,setleload]=useState(false);

  if(reload){ useEffect(()=>{
         window.location.reload();
         setleload(true);
    },[])}
  return  <div className="h-screen w-full ">
    <Navbar/>
    <div className="flex flex-col h-9/10 items-center justify-center w-full">

    <Cal style={{ width: "60vw", height: "50vh" }} calLink="vedantkhasbage/call-link"></Cal>
    </div>
  </div>     
};