import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom"
import { Heart, ArrowRight } from 'lucide-react';



export const Navbar=()=>{

    const navigate=useNavigate();
    const [auth,setauths]=useState(false);

    useEffect(()=>{
      axios.get("http://localhost:3000/user/auths",{withCredentials:true}).then((resp)=>{
        console.log("check auths :",resp);
        if(resp.data.message==="authenticated"){
            setauths(true);
        }
      })
    },[])

    // const logoutUser=async()=>{
    //  const resp=await axios.post("http://localhost:3000/user/logout",{},{withCredentials:true});
    //  if(resp.data.message==="logout"){
    //     navigate("/signin");
    //  }
    //  console.log(resp);
    // }

    return  <nav className="fixed w-full bg-white z-50 px-6 py-4 shadow-sm">
    <div className="flex items-center justify-between">
      <div onClick={()=>navigate("/")} className="flex cursor-pointer items-center gap-2">
        <Heart className="w-8 h-8 text-emerald-600" />
        <span className="text-sm font-bold text-gray-500">FOOD REDISTRIBUTION</span>
      </div>
      
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-6">
          <a onClick={()=>navigate("/")} className=" cursor-pointer font-medium">Home</a>
          <a onClick={()=>navigate("/dashboard")} className="font-medium cursor-pointer">Dashboard</a>
          <a onClick={()=>navigate("/about")} className="font-medium cursor-pointer">About</a>
        </div>
        <button className="bg-[#D6F34B] text-black px-6 py-3 rounded-full font-medium flex items-center gap-2">
          Contact Us
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </nav>
}




