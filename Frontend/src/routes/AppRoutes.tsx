import { Route, Routes } from "react-router-dom";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";



function AppRoutes () {
    return (
        <Routes>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}




export default AppRoutes