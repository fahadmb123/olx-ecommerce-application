import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/dispatchHook";



function ProtectedRoute() {

    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated
    );
    console.log("isAuthenticated From Protected-----",isAuthenticated)
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute;