import { useNavigate } from "react-router-dom"
import { Navbar } from "../components/navbar"

export const Create=()=>{

    const navigate=useNavigate();

    return <div className="h-screen w-full">
             <Navbar/>
         
            <div className="w-full h-9/10 flex justify-center items-center">
            <div className="h-8/10 shadow-xl w-1/3 flex flex-col items-center">
           <div className="w-full flex justify-center items-center">
           <h1 className="text-black text-xl">upload correct details only</h1>
           </div>

           <div className="flex flex-col gap-6 outline-none w-1/2 mt-16">
            <input className="h-10 rounded-xl border-1 p-2" type="text" placeholder="Enter Your Name"/>
            <input className="h-10 rounded-xl border-1 p-2" type="text" placeholder="Enter Your Mobile No."/>
            <input className="h-10 rounded-xl border-1 p-2" type="text" placeholder="Description.."/>
            <input className="h-10 rounded-xl border-1 p-2" type="text" placeholder="Set Price"/>
            <input type="file"/>
            <button onClick={()=>navigate("/location")} className="h-10 w-64 text-white font-semibold cursor-pointer bg-[#7643ED] rounded-xl">Step 1/3</button>
           </div>

           </div>
            </div>
           
    </div>
}