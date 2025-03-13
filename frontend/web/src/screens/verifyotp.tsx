import { useLocation, useNavigate } from "react-router-dom"
import { Navbar } from "../components/navbar"
import axios from "axios";
import { useRef } from "react";

export const VerifyOtp=()=>{
  const navigate=useNavigate();
  const data=useLocation().state;
  const otpRef=useRef<HTMLInputElement>(null);

  const verifyOTP=async()=>{
    if(otpRef.current?.value===""){
      alert("Enter Valid OTP");
      return;
    }
   else{
    console.log(data.email);
    console.log(data.addressId);
    console.log(otpRef.current?.value);
  const resp=await axios.post("http://localhost:3000/user/VerifyAddressOTP",{
      email:data.email,
      id:data.addressId,
      otp:otpRef.current?.value
    },{withCredentials:true})
    console.log(resp);
    if(resp.data.message==="Verified!!"){
         navigate("/");
    } else if(resp.data.message==="Not_found"){
      alert("Enter Your Email that Linked To your Account");
      return;
    }
   }
  }


    return <div className="h-screen w-full flex flex-col">
        <Navbar/>
          
          <div className="h-full w-full flex justify-center items-center">
                  <div className="h-1/2 w-1/3 shadow-xl justify-center gap-4 flex flex-col items-center rounded-xl">
                      
                      <div className="text-xl flex justify-center items-center">
                    OTP Send to your Email Address
                      </div>

                      <div>
                        <input ref={otpRef} className="h-10 w-64 border-1 outline-none p-4 rounded-xl" type="text" placeholder="Enter Your OTP Here" />
                      </div>

                      <button onClick={verifyOTP} className="h-10 w-64 text-white font-semibold cursor-pointer bg-[#7643ED] rounded-xl">Upload</button>
                  </div>
          </div>
    </div>
}