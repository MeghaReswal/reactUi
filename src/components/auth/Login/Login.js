import React, { useState } from "react";
import "./styles.css";
import { auth } from "../../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Link } from "react-router-dom";
import AuthDetails from "../AuthDetails"


function Login() {
    const [email, setEmail] = useState()
    const [password , setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("email", email)
        signInWithEmailAndPassword(auth, email , password)
            .then((userCredential) => {
                console.log(userCredential)
            }).catch((err)=> console.log(err) )
           
    }

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Login</div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label>Username </label>
                            <input type="email" name="uname" onChange={(e) => setEmail(e.target.value )} value={email} required />

                        </div>
                        <div className="input-container">
                            <label>Password </label>
                            <input type="password" name="pass" onChange={(e) => setPassword(e.target.value)} value={password} required />

                        </div>
                        <div className="button-container">
                            <input type="submit" />
                        </div>
                        <br />
                        <div>Please create a Account <Link to="/signup" >Sign Up</Link></div>
                    </form>
                </div>
            </div>
            <AuthDetails />
        </div>
    );
}

export default Login;