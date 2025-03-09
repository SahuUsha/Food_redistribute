import {Route, Routes } from "react-router-dom"
import { SignIn } from "../screens/signin"
import { SignUp } from "../screens/signup"

export const AppRoutes=()=>{

    return <div>
      <Routes>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/"/>
      </Routes>
    </div>
}