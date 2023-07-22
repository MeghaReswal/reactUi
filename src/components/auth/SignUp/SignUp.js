import React, { useState } from "react";
import "../Login/styles.css";
import { auth } from "../../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { Link } from "react-router-dom";

function SignUP() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [disabledBtn, setDisabledBtn] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("email", email)
        setDisabledBtn(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                setDisabledBtn(false)
            }).catch((err) => {setDisabledBtn(false); console.log(err)})

    }

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Create Account</div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label>Username </label>
                            <input type="email" name="uname" onChange={(e) => setEmail(e.target.value)} value={email} required />

                        </div>
                        <div className="input-container">
                            <label>Password </label>
                            <input type="password" name="pass" onChange={(e) => setPassword(e.target.value)} value={password} required />

                        </div>
                        <div className="button-container" >
                        <button type="submit" disabled={disabledBtn}  >  sign up</button>
                          
                        </div>
                        <br />
                        <div>Already have an account <Link to="/login" >Login</Link></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUP;