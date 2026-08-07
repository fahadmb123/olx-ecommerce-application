import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/dispatchHook";
import Loader from "./Loader/Loader";



function ProtectedRoute() {

    const {isAuthenticated,checkingAuth} = useAppSelector(
        (state) => state.auth
    )

    if (checkingAuth) {
        return <Loader/>
    }
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute;