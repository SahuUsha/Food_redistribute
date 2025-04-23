import { Calendar } from "lucide-react"
import { User } from "../svg/user"

export const FundingCard=()=>{

    return <div className="h-[500px] w-1/4 rounded-xl shadow-xl">
              <div className="h-[200px] w-full">
                <img className="cover rounded-xl h-full w-full" src="https://static.vecteezy.com/system/resources/thumbnails/039/030/117/small/ai-generated-sick-male-patient-sleeps-on-the-bed-in-the-hospital-a-man-in-a-hospital-bed-appearing-to-be-asleep-with-an-iv-drip-stand-next-to-the-bed-photo.jpg" alt="" />
              </div>

            <div className="p-4">
            <div>
                <h1 className="text-xl font-semibold p-2">Medical Emergency: Need urgent Help</h1>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 ml-2 mr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto veniam obcaecati cumque nulla nesciunt nostrum eveniet, rerum ratione repellendus.</p>
              </div>


              <div className="flex justify-between">
                 <h1 className="ml-2">Raised: Rs.3000</h1>
                 <h1 className="mr-8">10%</h1>
              </div>
              <div className=" flex justify-between">
              <h1 className="ml-2">Goal: Rs.13000</h1>
              <h1 className="mr-8 flex"> <h1 className="mr-1 h-2"> <Calendar/></h1> 45 days left</h1>
              </div>


              <div className="flex ml-1 mt-2 p-1">
                <User/>
                <h1 className="ml-1">0 people Donated</h1>
              </div>

              <div className="p-2 flex w-full items-center justify-center">
              <button className="border-1 bg-[#D6F34B] cursor-pointer px-12 py-2 rounded-full font-medium flex items-center gap-2">Donate Now</button>
              </div>
            </div>

    </div>
}