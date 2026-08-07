import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
const Signup = lazy(()=> import("../pages/Auth/Signup"))
const Login = lazy(()=> import("../pages/Auth/Login"))
const Home = lazy(()=> import("../pages/Home/Home"))



function AppRoutes () {
    return (
        <Routes>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/" element={<Home />}/>
        </Routes>
    )
}




export default AppRoutes