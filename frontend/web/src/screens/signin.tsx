import { useNavigate } from "react-router-dom"

export const SignIn=()=>{

    const navigate=useNavigate();

    return   <div className="h-screen flex flex-col justify-center bg-[#292A2D] text-white items-center w-full">
    
        <img src="hh.png" className="h-32 cover" alt="" />
              
              <div className="h-2/3 flex flex-col items-center">
               <div className="w-full flex justify-center mb-4">
                <h1>
                One account is all you need to access to all services.
                </h1>
               </div>
    
    
               <div className="w-full  flex justify-center mb-8">
                <h1>
               Verify Your Valid Credentials to Continue
                </h1>
               </div>
    
               <div className="w-72">
                <div className="w-full mb-6">
                    <input className=" border-1 border-gray-500 outline-none h-10 p-4 w-full rounded-xl" placeholder="Enter Your Email"/>
                </div>
    
    
                <div className="w-full mb-6">
                    <input className="border-1 border-gray-500 outline-none h-10 w-full p-4 rounded-xl" placeholder="Enter Your Password"/>
                </div>
    
    
                <div className="w-full flex flex-col items-center">
                   <button className=" mb-3 bg-[#3D4FA9] cursor-pointer h-10 w-full rounded">SignIn</button>
    
                   <div className="mb-3 border-gray-500 border-1 text-red-400 cursor-pointer flex justify-center items-center h-10 w-full rounded">
                    <img src="Google__G__logo.svg.png" className="h-8 cover" alt="" />
                    </div>  
                 
                   <h1>Don't have an Account?? <span onClick={()=>navigate("/signup")} className="cursor-pointer text-blue-300">Click here</span></h1>
                </div>
    
    
               </div>
    
    
              </div>
        </div>
    }