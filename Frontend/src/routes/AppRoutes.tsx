import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
const Signup = lazy(()=> import("../pages/Auth/Signup"))
const Login = lazy(()=> import("../pages/Auth/Login"))




function AppRoutes () {
    return (
        <Routes>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}




export default AppRoutes