import React, { useState } from "react";

import "./styles.css";

function Login() {
    const[data, setData ] = useState({
        email : "",
        pass: ""
    })
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const authData = {
            email : data?.email,
            password : data?.pass
        }
        console.log(authData)
    }

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="email" name="uname" onChange={(e)=> setData({...data, email : e.target.value})} value={data.email} required />
                    
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" onChange={(e)=> setData({...data, pass :  e.target.value})} value={data.pass} required />
                   
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
            </div>
        </div>
    );
}

export default Login;