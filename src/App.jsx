import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react"
import UserContext from "./contexts/UserContext";
import { AuthProvider } from './contexts/AuthContext';
import Home from "./routes/home/Home";
import ConfirmOrder from "./routes/confirmOrder/ConfirmOrder";
import Login from "./pages/login";

export default function App(){
    const [cart, setCart] = useState(null)
    const contextValues = {cart, setCart}
    return(
        <AuthProvider>
        <UserContext.Provider value={contextValues}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/:confirm" element={<ConfirmOrder/>}/>
                    <Route path="/Login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
        </AuthProvider>
    )
}