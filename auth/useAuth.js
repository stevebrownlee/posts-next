import { useEffect, useState } from "react"

const useSimpleAuth = () => {
    const [loggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            setIsLoggedIn(true)
        }
    }, [])


    const isAuthenticated = () => loggedIn

    const login = (userIdentifier) => {
        localStorage.setItem("access_token", userIdentifier)
        setIsLoggedIn(true)
    }

    const logout = () => {
        localStorage.removeItem("access_token")
        setIsLoggedIn(false)
    }

    return { isAuthenticated, logout, login, loggedIn }
}

export default useSimpleAuth



