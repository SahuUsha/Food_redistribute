import { Link, useNavigate } from "react-router-dom"

export const Navbar=()=>{

    const navigate=useNavigate();

    return <div className="h-1/10 w-full items-center shadow-lg font-sans flex justify-between">
             
             <img src="hh.png" className="h-24 cover ml-24" alt="" />

             <div className="list-none justify-center items-center flex gap-8 mr-64">
                <li onClick={()=> navigate("/")} className="font-semibold cursor-pointer"><Link to="/"/>HOME</li>
                <li onClick={()=> navigate("/signup")} className="font-semibold cursor-pointer"><Link to="/signup"/>SIGNUP</li>
                <li onClick={()=> navigate("/about")} className="font-semibold cursor-pointer"><Link to="/about"/>ABOUT</li>
                <button onClick={()=> navigate("/create")} className="h-10 w-36 text-white font-semibold flex justify-center items-center cursor-pointer bg-[#7643ED] rounded-xl">Create <span className="text-3xl ml-1 mb-1">+</span></button>
             </div>

    </div>
}