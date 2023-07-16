import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../Home/Home'
import Login from "../Login/Login"
import User from "../User/User"



const NavRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="user" element={<User />} />
                    <Route path="login" element={<Login />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default NavRoute