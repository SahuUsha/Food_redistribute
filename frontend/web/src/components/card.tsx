export const Card=()=>{

    return <div className="h-80 w-80 mt-2 shadow-xl cursor-pointer rounded-xl">
           
           <img className="h-48 w-80 p-2 rounded-xl cover" src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?cs=srgb&dl=pexels-houzlook-3797991.jpg&fm=jpg" alt="" />
            
            <div>
             
             <div className="flex ml-2">
                <img className="h-6 cover" src="https://icons.veryicon.com/png/o/miscellaneous/commonly-used-icon-1/location-113.png" alt="" />
               <h1>Gitti khadan katol road nagpur</h1>
             </div>
              
              <div className="ml-4">
                Details :
              </div>

              <div className="ml-3 p-1">
                Amount: 
              </div>

              <div className="h-10 w-full flex items-center justify-center rounded-xl ">
              <button className="h-full w-72 text-white font-semibold cursor-pointer bg-[#7643ED] rounded-xl">View Details</button>
              </div>

            </div>
    </div>
}