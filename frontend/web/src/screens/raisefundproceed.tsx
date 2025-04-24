import { useNavigate } from "react-router-dom";
import { FormField } from "../components/formfeild"
import { Navbar } from "../components/navbar"
import { UploadField } from "../components/uploadinputfield"

export const RaiseFund2=()=>{

    const navigate=useNavigate();


    const handleupload=()=>{
        alert("Post Created Successfully")
         navigate("/raise-fund")
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
        
                    <UploadField title="Upload Thumnail/CoverImage"/>
                    <UploadField title="Upload any Valid Document proof for fund raising"/>
                   <div className="flex flex-col w-full items-center">
                   <UploadField title="Upload QR Code"/>
                   <h1>Or continue with UPI ID</h1>
                    <FormField type="text" title="Enter UPI ID" placeholder="Enter Valid UPI Id e.g (user@axisbank)"/>
                   </div>

                    <div className="w-1/2">
                    <button onClick={handleupload} className="border-1 bg-[#D6F34B]  cursor-pointer border-white px-20 py-4 rounded-full font-medium flex items-center gap-2">Proceed</button>
                    </div>
                </div>
               </div>

    </div>
}