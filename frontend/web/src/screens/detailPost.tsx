import { Calendar, User } from "lucide-react"
import { Navbar } from "../components/navbar"
import { Donate } from "../svg/donate"

export const DetailPost = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />

      {/* Main content row */}
      <div className="flex w-full flex-1">
        {/* Left side */}
        <div className="w-2/3 flex flex-col p-4">
          <div className="mt-16 w-full h-16 flex items-center justify-center rounded">
            <h1 className="text-3xl font-semibold">Medical Emergency: Need urgent Help</h1>
          </div>
          <div className="w-full flex items-center justify-center">
            <img className="cover rounded-xl h-80 w-[600px]" src="https://static.vecteezy.com/system/resources/thumbnails/039/030/117/small/ai-generated-sick-male-patient-sleeps-on-the-bed-in-the-hospital-a-man-in-a-hospital-bed-appearing-to-be-asleep-with-an-iv-drip-stand-next-to-the-bed-photo.jpg" alt="" />
          </div>


          <div className="w-6/8  p-2 ml-18">
               
          <div className="flex ml-16 justify-between">
                 <h1 className="ml-2 text-xl">Raised: Rs.3000</h1>
                 <h1 className="mr-8 text-xl">10%</h1>
              </div>
              <div className="ml-16 flex text-md justify-between">
              <h1 className="ml-2 text-xl">Goal: Rs.13000</h1>
              <h1 className="mr-8 text-xl flex"> <h1 className="mr-1 h-2"> <Calendar/></h1> 45 days left</h1>
              </div>
          </div>


          <div className="ml-32 flex p-2">
              <User/>
        <h1 className="ml-1 text-xl">0 people Donated</h1>
          </div>

          <div className="w-[600px] ml-32">
            <h1 className=" text-xl mt-2">Description</h1>
          <p className="text-gray-600  text-md mb-4 ml-2 mr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto veniam obcaecati cumque nulla nesciunt nostrum eveniet, rerum ratione repellendus.</p>
          </div>
        </div>

        {/* Right side */}
        <div className="w-1/2 flex flex-col">
           
           <div className="mt-20 h-96 shadow-2xl w-2/3 h-full ml-8">
             <div className="flex mt-4 justify-between p-6 items-center h-10">
             <div className="flex p-2">
               <Donate/>
               <h1 className="text-xl">Donate</h1>
               </div>

               <div className=" flex">
              <User/>
        <h1 className="ml-1 text-xl">0 people Donated</h1>
          </div>

             </div>


             <div className="w-full h-24 p-4 ml-4">
               <h1 className="text-xl">Raised</h1>
               <h1 className="text-xl">Rs.3000 of Rs.13,000</h1>
             </div>


             <div className="w-full flex items-center justify-center h-12">
                <button className="h-12 w-2/3 cursor-pointer rounded-3xl font-bold text-white bg-green-400">Scan QR Below</button>
             </div>

             <div className="w-full flex items-center flex-col justify-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS1GUPLH_5eU_Lx5W4cYuye3vc_rdlEObN3_JdyGeQ3doFxzRSu1mv56LleETrpPhYp6E&usqp=CAU" alt="" />
          <p>Scan & donate with any app</p>

          <div className="flex items-center p-4">
            <img className="h-10 border-1 border-gray-400 rounded-3xl cover" src="https://img.icons8.com/fluent/512/bhim.png" alt="" />
            <img className="h-12 cover" src="https://www.citypng.com/public/uploads/preview/paytm-circle-logo-hd-png-701751694706614zmho56voff.png" alt="" />
            <img className="h-10  border-1 border-gray-400 rounded-3xl cover" src="https://toppng.com/uploads/preview/google-pay-gpay-logo-11530962961mwws81tde9.png" alt="" />
          </div>
             </div>

           </div>
        </div>
      </div>
    </div>
  )
}
