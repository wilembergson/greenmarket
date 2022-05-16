import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react"
import UserContext from "./contexts/UserContext";
import { AuthProvider } from './contexts/AuthContext';
import ConfirmOrder from "./routes/confirmOrder/ConfirmOrder";
import Home from "./routes/home/Home"
import Login from "./pages/login.jsx";
import Register from "./pages/register";
import OrdersList from "./routes/ordersList/OrdersList";

export default function App(){
    const [cart, setCart] = useState(null)
    const [token, setToken] = useState(null)
    const [name, setName] = useState(null)
    const contextValues = {
        cart,
        setCart,
        name,
        setName,
        token,
        setToken
    }
    return(
        <AuthProvider>
            <UserContext.Provider value={contextValues}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/Register" element={<Register/>}/>
                        <Route path="/confirm" element={<ConfirmOrder/>}/>
                        <Route path="/ordersList" element={<OrdersList/>}/>
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </AuthProvider>
    )
}