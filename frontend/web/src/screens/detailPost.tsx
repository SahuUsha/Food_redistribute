import { Calendar, User } from "lucide-react"
import { Navbar } from "../components/navbar"

export const DetailPost = () => {
  return (
    <div className="min-h-screen bg-green-400 flex flex-col w-full">
      <Navbar />

      {/* Main content row */}
      <div className="flex w-full flex-1">
        {/* Left side */}
        <div className="w-1/2 flex flex-col bg-green-300 p-4">
          <div className="mt-16 w-full h-16 flex items-center justify-center rounded">
            <h1 className="text-3xl font-semibold">Medical Emergency: Need urgent Help</h1>
          </div>
          <div className="w-full flex items-center justify-center">
            <img className="cover rounded-xl h-80 w-[600px]" src="https://static.vecteezy.com/system/resources/thumbnails/039/030/117/small/ai-generated-sick-male-patient-sleeps-on-the-bed-in-the-hospital-a-man-in-a-hospital-bed-appearing-to-be-asleep-with-an-iv-drip-stand-next-to-the-bed-photo.jpg" alt="" />
          </div>


          <div className="w-6/8  p-2 ml-18">
               
          <div className="flex justify-between">
                 <h1 className="ml-2 text-xl">Raised: Rs.3000</h1>
                 <h1 className="mr-8 text-xl">10%</h1>
              </div>
              <div className=" flex text-md justify-between">
              <h1 className="ml-2 text-xl">Goal: Rs.13000</h1>
              <h1 className="mr-8 text-xl flex"> <h1 className="mr-1 h-2"> <Calendar/></h1> 45 days left</h1>
              </div>
          </div>


          <div className="ml-18 flex p-2">
              <User/>
        <h1 className="ml-1 text-xl">0 people Donated</h1>
          </div>

          <div className="w-[600px]">
            <h1 className="ml-18 text-xl mt-2">Description</h1>
          <p className="text-gray-600 ml-18 text-md mb-4 ml-2 mr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto veniam obcaecati cumque nulla nesciunt nostrum eveniet, rerum ratione repellendus.</p>
          </div>
        </div>

        {/* Right side */}
        <div className="w-1/2 bg-red-300"></div>
      </div>
    </div>
  )
}
