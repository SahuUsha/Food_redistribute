import {Route, Routes } from "react-router-dom"
import { SignIn } from "../screens/signin"
import { SignUp } from "../screens/signup"
import { Dashboard } from "../screens/dashboard"
import { Create } from "../screens/create"
import { About } from "../screens/about"
import { VerifyAcc } from "../screens/verifyacc"
import { VerifyOtp } from "../screens/verifyotp"
import { Waiting } from "../screens/waiting"
import { OTP } from "../screens/otp"
import { Location } from "../screens/location"
import { Details } from "../screens/details"
import { Meeting } from "../screens/meeting"
import { Home } from "../screens/home"

export const AppRoutes=()=>{

    return <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/verifyacc" element={<VerifyAcc/>}/>
        <Route path="/verifyotp" element={<VerifyOtp/>}/>
        <Route path="/uploading" element={<Waiting/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/otp" element={<OTP/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/meeting" element={<Meeting/>}/>
      </Routes>
    </div>
}