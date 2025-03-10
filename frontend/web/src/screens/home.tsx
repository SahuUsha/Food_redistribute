import { Card } from "../components/card"
import { Navbar } from "../components/navbar"

export const Home=()=>{

    return <div className="h-screen w-full">
          <Navbar/>

          <div className="h-9/10 flex justify-center gap-4 flex-wrap w-1/2 bg-green-400">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
    </div>
}