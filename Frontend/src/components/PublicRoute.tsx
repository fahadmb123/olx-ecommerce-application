import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/dispatchHook"

function PublicRoute() {

    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated
    );
    
    if (isAuthenticated) {
        console.log("Worked")
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}

export default PublicRoute;