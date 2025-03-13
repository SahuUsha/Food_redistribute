import { data, useNavigate } from "react-router-dom"
import { Navbar } from "../components/navbar"
import axios from "axios";
import { useRef } from "react";

export const Create=()=>{

    const navigate=useNavigate();
    const nameRef=useRef<HTMLInputElement>(null);
    const mobRef=useRef<HTMLInputElement>(null);
    const DesciptionRef=useRef<HTMLInputElement>(null);
    const PriceRef=useRef<HTMLInputElement>(null);

    const putDataIntoDB=async()=>{

        console.log("indide db fn")

        if(mobRef.current?.value==="" || nameRef.current?.value==="" || DesciptionRef.current?.value==="" || PriceRef.current?.value===""){
            alert("Please Enter Valid Details");
            return;
        }
         else{
          const resp=await axios.post("http://localhost:3000/user/create",{
                mobileNo:mobRef.current?.value,
                name:nameRef.current?.value,
                description:DesciptionRef.current?.value,
                price:PriceRef.current?.value
   
            },{withCredentials:true})
            if(resp.data.message==="data_added"){
                console.log(resp.data)
                navigate("/location",{state:resp.data.id});
            }
            console.log(resp);
         }
    }

    return <div className="h-screen w-full">
             <Navbar/>
         
            <div className="w-full h-9/10 flex justify-center items-center">
            <div className="h-8/10 shadow-xl w-1/3 flex flex-col items-center">
           <div className="w-full flex justify-center items-center">
           <h1 className="text-black text-xl">upload correct details only</h1>
           </div>

           <div className="flex flex-col gap-6 outline-none w-1/2 mt-16">
            <input ref={nameRef} className="h-10 rounded-xl border-1 p-2" type="text" placeholder="Enter Your Name"/>
            <input ref={mobRef} className="h-10 rounded-xl border-1 p-2" type="text" placeholder="Enter Your Mobile No."/>
            <input ref={DesciptionRef} className="h-10 rounded-xl border-1 p-2" type="text" placeholder="Description.."/>
            <input ref={PriceRef} className="h-10 rounded-xl border-1 p-2" type="text" placeholder="Set Price"/>
            <input type="file"/>
            <button onClick={putDataIntoDB} className="h-10 w-64 text-white font-semibold cursor-pointer bg-[#7643ED] rounded-xl">Step 1/3</button>
           </div>

           </div>
            </div>
           
    </div>
}