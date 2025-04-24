import { FormField } from "../components/formfeild"
import { Navbar } from "../components/navbar"
import { UploadField } from "../components/uploadinputfield"

export const RaiseFund2=()=>{

    // const navigate=useNavigate();


    return <div className="h-screen w-full">
        <div>
             <Navbar/>
        </div>

             
        <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full flex mt-16 h-32 items-center justify-center flex">
                <h1 className="text-4xl">Upload Your Valid Documents</h1>
                </div>


                <div className="w-full mt-6 gap-8 flex flex-col items-center justify-center">
        
                    <UploadField/>

                    <div className="w-1/2">
                    <button className="border-1 bg-[#D6F34B]  cursor-pointer border-white px-20 py-4 rounded-full font-medium flex items-center gap-2">Proceed</button>
                    </div>
                </div>
               </div>

    </div>
}