import { useState } from "react"

export const User = () => {

    type AuthUser = {
        name: string
        email: string
    }

    // We can set the initial value and the value it will get in the future
    // const [user, setUser] = useState<AuthUser | null>(null)
   
    // Or we can use Type Assertion to tell Typescript that the initial value is an empty object of type AuthUSer
    // We must use this only if we know that user will be initialized soon after the component is mounted
    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setUser({ name: 'Luis', email: 'luis@gmail.com' })
    }

    const handleLogout = () => {
        // setUser(null)
        setUser({} as AuthUser)
    }
    // console.log(user)
    return (<>
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user.name || 'Avatar'} </div>
            <div>User email is {user.email || 'avatar@gmail.com'} </div>
        </div>
    </>)
}