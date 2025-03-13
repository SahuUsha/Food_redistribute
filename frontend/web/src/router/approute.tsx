import {Route, Routes } from "react-router-dom"
import { SignIn } from "../screens/signin"
import { SignUp } from "../screens/signup"
import { Home } from "../screens/home"
import { Create } from "../screens/create"
import { About } from "../screens/about"
import { VerifyAcc } from "../screens/verifyacc"
import { VerifyOtp } from "../screens/verifyotp"
import { Waiting } from "../screens/waiting"
import { OTP } from "../screens/otp"
import { Location } from "../screens/location"

export const AppRoutes=()=>{

    return <div>
      <Routes>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/verifyacc" element={<VerifyAcc/>}/>
        <Route path="/verifyotp" element={<VerifyOtp/>}/>
        <Route path="/uploading" element={<Waiting/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/otp" element={<OTP/>}/>
      </Routes>
    </div>
}