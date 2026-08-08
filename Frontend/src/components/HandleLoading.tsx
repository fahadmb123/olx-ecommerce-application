import { useAppSelector } from "../hooks/dispatchHook";
import Loader from "./Loader/Loader";
import AppRoutes from '../routes/AppRoutes'


function HandleLoading() {
    const loading = useAppSelector(
        state => state.globalLoading.globalLoading
    );

    return (
        <>
            {loading && <Loader />}
            <AppRoutes />
        </>
    );
}

export default HandleLoading