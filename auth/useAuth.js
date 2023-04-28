import { useState } from "react"

const useSimpleAuth = () => {

    const [loggedIn, setIsLoggedIn] = useState(false)

    const login = (userIdentifier) => {
        localStorage.setItem("access_token", userIdentifier)
        setIsLoggedIn(true)
    }

    const logout = () => {
        localStorage.removeItem("access_token")
        setIsLoggedIn(false)
    }

    return { loggedIn, logout, login }
}

export default useSimpleAuth



