import { useState } from "react"


export const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false) // Type Inference
    

    const handleLogin = () => { 
        setIsLoggedIn(true)
    }
    const handleLogout = () => { 
        setIsLoggedIn(false)
     }
    
    return (
        <div>
            <button onClick={ handleLogin }>Login</button>
            <button onClick={handleLogin}>Logout</button>
            <div>User is { isLoggedIn ? 'logged in' : 'logged out' }</div>
        </div>
    )
}