import axios from "axios"
import { FormField } from "../components/formfeild"
import { Navbar } from "../components/navbar"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

export const RaiseFundPost=()=>{

    const titleRef=useRef<HTMLInputElement>(null);
    const MobileRef=useRef<HTMLInputElement>(null);
    const NameRef=useRef<HTMLInputElement>(null);
    const DescriptionRef=useRef<HTMLInputElement>(null);
    const AmountRef=useRef<HTMLInputElement>(null);

    const navigate=useNavigate();


    return <div className="h-screen w-full">
          
          <Navbar/>

          <div className="w-full flex flex-col h-screen">
               <div className="h-1/2 flex-col mt-32  w-full flex items-center justify-center">
                <h1 className="text-7xl font-semibold">"Launch Your Compaign!"</h1>
                <p className="text-center p-2">Change doesn’t begin with a title. It begins with someone who cares.
                <br/> You don’t need power to lead—just heart.</p>
               </div>



               <div className="w-full p-8">
                <div className="w-full items-center justify-center flex">
                <h1 className="text-4xl">Fill Your Information</h1>
                </div>


                <div className="w-full mt-10 gap-8 flex flex-col items-center justify-center">
        
                    <FormField inputref={titleRef} title="Title for Campaign" placeholder="Enter Your Title" type="text"/>
                    <FormField inputref={NameRef} title="Enter Your Name" placeholder="Enter Your Name" type="text"/>
                    <FormField inputref={MobileRef} title="Enter Your Ph.Number" placeholder="Enter Your Mob" type="text"/>
                    <FormField inputref={DescriptionRef} title="Description" placeholder="Description" type="text"/>
                    <FormField inputref={AmountRef} title="Amount to Raise" placeholder="Enter Amount" type="text"/>

                    <div className="w-1/2">
                    <button onClick={()=>navigate("/upload-documents")} className="border-1 bg-[#D6F34B]  cursor-pointer border-white px-20 py-4 rounded-full font-medium flex items-center gap-2">Proceed</button>
                    </div>
                </div>
               </div>
          </div>
    </div>
}