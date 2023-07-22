import { Link, useLocation } from "react-router-dom"


const Navbar = () => {

    const location = useLocation()
console.log(location.pathname)

    return (
        <div>
        {location.pathname !== "/login"? 
            <div>
            <Link to="/">Home</Link><br />
            <Link to="/signup" >Sign Up</Link><br />
            <Link to="/login" >Login</Link><br />
            <Link to="/user" >User</Link>
            </div>
            : null

        }
           
        </div>
    )
}

export default Navbar