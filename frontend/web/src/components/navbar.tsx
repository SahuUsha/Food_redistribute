import { Link } from "react-router-dom"

export const Navbar=()=>{

    return <div className="h-1/10 w-full items-center shadow-lg font-sans flex justify-between">
             
             <img src="hh.png" className="h-24 cover ml-24" alt="" />

             <div className="list-none flex gap-8 mr-64">
                <li className="font-semibold cursor-pointer"><Link to="/"/>HOME</li>
                <li className="font-semibold cursor-pointer"><Link to="/"/>SIGNUP</li>
                <li className="font-semibold cursor-pointer"><Link to="/"/>ABOUT</li>
                <li className="font-semibold cursor-pointer"><Link to="/"/>CREATE</li>
             </div>

    </div>
}