import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { Star } from 'lucide-react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignIn=()=>{
    const navigate=useNavigate();
    const email=useRef<HTMLInputElement>(null);
      const password=useRef<HTMLInputElement>(null);

  const handleManualSignIn=async()=>{
    if(password.current?.value==="" || email.current?.value===""){
        alert("Enter Valid Details Only");
        return;
    }
     else{
     
           const resp=await axios.post("http://localhost:3000/user/signin",{
                email:email.current?.value,
                password:password.current?.value
            },{withCredentials:true})
         
            console.log("custom backend",resp);
            if(resp.data.message==="not_found"){
                alert("Email Does Not Exists");
                return;
                } else if(resp.data.message==="found"){
                    navigate("/");
                }
     }

}


const handleSignIn=useGoogleLogin({
    onSuccess:(response)=>{
    const accessToken=response.access_token;

    axios.get("https://www.googleapis.com/oauth2/v3/userinfo",{
     headers:{
         Authorization: `Bearer ${accessToken}`,  
     }
  }).then((response:any)=>{
    if(response){
  axios.post("http://localhost:3000/user/signin",{
         email:response.data.email,
     },{withCredentials:true}).then((resp:any)=>{
         console.log("from backend!!!",resp);
        //  if(resp.data.data==="OTP_Send"){

        //      console.log("email aa gaya!!",email);
        //      navigate("/otp",{state:{email:resp.data.email}})
        //  } else if(resp.data.message==="Email_exists"){
        //      alert("Email Already Exists");
        //      return;
        //  }

        if(resp.data.message==="not_found"){
        alert("Email Does Not Exists");
        return;
        } else if(resp.data.message==="found"){
            navigate("/");
        }
     })

    }
 })
 }

})

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Sign Up Form */}

      <div className="w-1/2 p-12 flex items-center">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-2">Enter Your Credentials</h1>
          
         
            <div className="mb-6">
              <label className="block mb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ref={email}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ref={password}
                required
              />
            </div>

            <button  onClick={handleManualSignIn}
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
            >
              Continue
            </button>


            <div onClick={()=>handleSignIn()} className="mt-3 border-gray-500 border-1 text-red-400 cursor-pointer flex justify-center items-center h-10 w-full rounded">
                    <img src="Google__G__logo.svg.png" className="h-8 cover" alt="" />
                    </div>  

            <p className="mt-6 text-center text-gray-600">
              Don't have an account?
              <a onClick={()=>navigate("/signup")}  href="#" className="text-indigo-600 text-blue-400 hover:underline">
                Click Here
              </a>
            </p>
         
        </div>
      </div>

      {/* Right Section - Hero */}
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
  );
}