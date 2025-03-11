import axios from "axios";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom"


export const OTP=()=>{
    const otp=useRef<HTMLInputElement>(null);
    const location = useLocation();
    const email = location.state?.email || ""; 
    console.log("location is :",email)
const navigate=useNavigate();

 async function verifyotp(){
    console.log("inside fu")
  const resp=await axios.post("http://localhost:3000/user/verifyotp",{otp:otp.current?.value,email:email},{withCredentials:true})
     if(resp.data.message==="Verified!!"){
        navigate("/")
     } 
  console.log("otp backend response ",resp);

}

    return <div className="h-screen w-full bg-[#292A2D]">


<div className="h-full w-full flex justify-center items-center">
                  <div className="h-1/2 w-1/3 shadow-xl justify-center gap-4 flex flex-col items-center rounded-xl">
                      
                      <div className="text-xl text-white flex justify-center items-center">
                    OTP Send to your Email Address
                      </div>

                      <div>
                      <input ref={otp} className="border-1 border-gray-500 text-gray-400 outline-none h-10 w-full p-4 rounded-xl" placeholder="Enter OTP"/>
                      </div>

                      <button  onClick={verifyotp} className="h-10 w-56 text-white font-semibold cursor-pointer bg-[#7643ED] rounded-xl">Verify</button>
                  </div>
          </div>
    </div>
}