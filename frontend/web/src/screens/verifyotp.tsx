import { useNavigate } from "react-router-dom"
import { Navbar } from "../components/navbar"

export const VerifyOtp=()=>{
  const navigate=useNavigate();

    return <div className="h-screen w-full flex flex-col">
        <Navbar/>
          
          <div className="h-full w-full flex justify-center items-center">
                  <div className="h-1/2 w-1/3 shadow-xl justify-center gap-4 flex flex-col items-center rounded-xl">
                      
                      <div className="text-xl flex justify-center items-center">
                    OTP Send to your Email Address
                      </div>

                      <div>
                        <input className="h-10 w-64 border-1 outline-none p-4 rounded-xl" type="text" placeholder="Enter Your OTP Here" />
                      </div>

                      <button  onClick={()=>navigate("/uploading")} className="h-10 w-64 text-white font-semibold cursor-pointer bg-[#7643ED] rounded-xl">Upload</button>
                  </div>
          </div>
    </div>
}