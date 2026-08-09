import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import ProtectedRoute from "../components/ProtectedRoute"
import PublicRoute from "../components/PublicRoute";
import { useAppDispatch } from "../hooks/dispatchHook";
import { checkAuthThunk } from "../features/auth/authThunk";
const Layout = lazy(()=> import("../components/Layout/Layout"))
const Signup = lazy(()=> import("../pages/Auth/Signup"))
const Login = lazy(()=> import("../pages/Auth/Login"))
const Home = lazy(()=> import("../pages/Home/Home"))
const Sell = lazy(()=> import("../pages/Sell/Sell"))
const Cart = lazy(()=> import("../pages/Cart/Cart"))
const Checkout = lazy(()=> import("../pages/Checkout/Checkout"))
const ProductDetails = lazy(()=> import("../pages/ProductDetails/ProductDetails"))
const AddEditProduct = lazy(()=>import("../pages/AddEditProduct/AddEditProduct"))
const OrderPlaced = lazy(()=>import("../pages/OrderPlaced/OrderPlaced"))



function AppRoutes () {
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(checkAuthThunk())
    },[dispatch])
    return (
        <Routes>
            <Route element={<PublicRoute/>}>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/login" element={<Login />}/>
            </Route>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="details/:id" element={<ProductDetails />}/>
                <Route element={<ProtectedRoute/>}>
                    <Route path="sell" element={<Sell />}/>
                    <Route path="cart" element={<Cart />}/>
                    <Route path="checkout" element={<Checkout />}/>
                    <Route path="addedit" element={<AddEditProduct />}/>
                    <Route path="addedit/:id" element={<AddEditProduct />}/>
                    <Route path="orderplaced" element={<OrderPlaced />}/>
                </Route>
            </Route>
        </Routes>
    )
}




export default AppRoutes