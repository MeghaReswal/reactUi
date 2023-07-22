import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../firebase"
import { Redirect } from 'react-router-dom';



const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })
    }, [])

    return (
        <div>{authUser ? "signed in" : "signed out "}</div>
    )
}

export default AuthDetails