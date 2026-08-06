import { Route, Routes } from "react-router-dom";
import Signup from "../pages/Auth/Signup";



function AppRoutes () {
    return (
        <Routes>
            <Route path="/signup" element={<Signup />}/>
        </Routes>
    )
}




export default AppRoutes