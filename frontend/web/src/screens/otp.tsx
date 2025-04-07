import axios from "axios";
import { Star } from "lucide-react";
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

    return <div className="h-screen w-full flex">


         <div className="h-full w-1/2 flex justify-center items-center">
                  <div className="h-1/2 w-2/3 shadow-xl justify-center gap-4 flex flex-col items-center rounded-xl">
                      
                      <div className="text-xl text-black flex justify-center items-center">
                    OTP Send to your Email Address
                      </div>

                      <div className="w-2/4">
                      <input ref={otp} className="border-1 border-gray-500 text-gray-400 outline-none h-10 w-full p-4 rounded-xl" placeholder="Enter OTP"/>
                      </div>

                      <button  onClick={verifyotp} className="h-10 w-2/4 text-white font-semibold cursor-pointer bg-[#7643ED] rounded-xl">Verify</button>
                  </div>
          </div>

          <div className="w-1/2 relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
          alt="Designer working"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-12 text-white">
          <h2 className="text-5xl font-bold mb-4 leading-tight">
            Connecting food With Everyone
          </h2>
          <p className="text-xl text-gray-200 mb-8">
          "One cannot think well, love well, sleep well, if one has not dined well."
          — Virginia Woolf          </p>
          
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/150?img=${i}`}
                  alt={`User ${i}`}
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="font-semibold text-xl">5.0</span>
            </div>
            <p className="text-gray-300">from over 100,000 reviews</p>
          </div>
        </div>
      </div>
    </div>
}
