import { useNavigate } from "react-router-dom"


 

export const Card=({name,id,Price,Address,Description,email,phoneNo,Lattitude,Longitude}:any)=>{
  const navigate=useNavigate();
  // console.log("my data arrive ",name);
  // console.log("my place data arrive ",placedata);
  const data={name,id,Price,Address,Description,email,phoneNo,Lattitude,Longitude}
   const viewdetails=()=>{
      navigate("/details",{state:data})
   }


    return <div  onClick={viewdetails} className="h-80 w-80 mt-2 ml-4 shadow-xl cursor-pointer rounded-xl">
           
           <img className="h-48 w-80 p-2 rounded-xl cover" src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?cs=srgb&dl=pexels-houzlook-3797991.jpg&fm=jpg" alt="" />
            
            <div>
             
             <div className="flex ml-2">
                <img className="h-6 cover" src="https://icons.veryicon.com/png/o/miscellaneous/commonly-used-icon-1/location-113.png" alt="" />
               <h1>{Address}</h1>
             </div>
              
              <div className="ml-4">
                Details : {Description}
              </div>

              <div className="ml-3 p-1">
                Amount: {Price}
              </div>

              <div className="h-10 w-full flex items-center justify-center rounded-xl ">
              <button className="h-full w-72 text-white font-semibold cursor-pointer bg-[#7643ED] rounded-xl">View Details</button>
              </div>

            </div>
    </div>
}