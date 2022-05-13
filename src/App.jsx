import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react"
import UserContext from "./contexts/UserContext";
import Home from "./routes/home/Home";
import ConfirmOrder from "./routes/confirmOrder/ConfirmOrder";

export default function App(){
    const [cart, setCart] = useState(null)
    const contextValues = {cart, setCart}
    return(
        <UserContext.Provider value={contextValues}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/:confirm" element={<ConfirmOrder/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}