import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

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

    const logoutUser=async()=>{
     const resp=await axios.post("http://localhost:3000/user/logout",{},{withCredentials:true});
     if(resp.data.message==="logout"){
        navigate("/signin");
     }
     console.log(resp);
    }

    return <div className="h-1/10 w-full items-center shadow-lg font-sans flex justify-between">
             
             <img src="hh.png" className="h-24 cover ml-24" alt="" />

             <div className="list-none justify-center items-center flex gap-8 mr-64">
                <li onClick={()=> navigate("/")} className="font-semibold cursor-pointer"><Link to="/"/>HOME</li>
                {auth? <li onClick={logoutUser} className="font-semibold cursor-pointer">LOGOUT</li> :
                <li onClick={()=> navigate("/signup")} className="font-semibold cursor-pointer"><Link to="/signup"/>SIGNUP</li>}
                <li onClick={()=> navigate("/about")} className="font-semibold cursor-pointer"><Link to="/about"/>ABOUT</li>
                <button onClick={()=> navigate("/create")} className="h-10 w-36 text-white font-semibold flex justify-center items-center cursor-pointer bg-[#7643ED] rounded-xl">Create <span className="text-3xl ml-1 mb-1">+</span></button>
             </div>

    </div>
}