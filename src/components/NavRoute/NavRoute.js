import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../Home/Home'
import Login from "../auth/Login/Login"
import Signup from "../auth/SignUp/SignUp"
import User from "../User/User"
import Navbar from "../Navbar/Navbar"


const NavRoute = () => {
    return (
        <div>
            <BrowserRouter>
             <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="user" element={<User />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default NavRoute