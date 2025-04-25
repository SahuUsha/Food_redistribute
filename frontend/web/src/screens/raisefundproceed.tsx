import { useLocation, useNavigate } from "react-router-dom";
import { FormField } from "../components/formfeild"
import { Navbar } from "../components/navbar"
import { UploadField } from "../components/uploadinputfield"
import { useRef, useState } from "react";
import axios from "axios";

export const RaiseFund2=()=>{

    const navigate=useNavigate();

    const Location=useLocation().state;
    const QRref=useRef<HTMLInputElement>(null);
    const ThumnailRef=useRef<HTMLInputElement>(null);
    const DocumentRef=useRef<HTMLInputElement>(null);
    const UPIidRef=useRef<HTMLInputElement>(null);

    const [img,setimg]=useState("");


    const hanldefiles=async(event:any)=>{
        const file=event.target.files[0];
        console.log("my images",file)
        // console.log(imgRef.current.value)
        if(!file) return;

        const data=new FormData();
        data.append("file",file);
        data.append("upload_preset","employapp");
        data.append("cloud_name","dnlqcnhoy");
        const resp=await axios.post("https://api.cloudinary.com/v1_1/dnlqcnhoy/image/upload",data);
       
        // console.log("from cludinary response : ",resp.data.url);
        setimg(resp.data.url)

        console.log("url is ",resp.data.url)
    }


    console.log("final url hain",img)


    const handleupload=()=>{
          




    }

    return <div className="h-screen w-full">
        <div>
             <Navbar/>
        </div>

             
        <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full flex mt-16 h-32 items-center justify-center flex">
                <h1 className="text-4xl">Upload Your Valid Documents</h1>
                </div>


                <div className="w-full mt-6 gap-8 flex flex-col items-center justify-center">
        
                    <UploadField handlefn={hanldefiles} inputref={ThumnailRef} title="Upload Thumnail/CoverImage"/>
                    <UploadField handlefn={hanldefiles} inputref={DocumentRef} title="Upload any Valid Document proof for fund raising"/>
                   <div className="flex flex-col w-full items-center">
                   <UploadField handlefn={hanldefiles} inputref={QRref} title="Upload QR Code"/>
                   <h1>Or continue with UPI ID</h1>
                    <FormField inputref={UPIidRef} type="text" title="Enter UPI ID" placeholder="Enter Valid UPI Id e.g (user@axisbank)"/>
                   </div>

                    <div className="w-1/2">
                    <button onClick={handleupload} className="border-1 bg-[#D6F34B]  cursor-pointer border-white px-20 py-4 rounded-full font-medium flex items-center gap-2">Proceed</button>
                    </div>
                </div>
               </div>

    </div>
}