import { useState } from "react"
import Router from "next/router"
import useSimpleAuth from "../auth/useAuth"
import styles from "../styles/Login.module.css"

const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const { login } = useSimpleAuth()

    const handleLogin = async (event) => {
        event.preventDefault()

        // Check if the username and password match a user in the database
        const response = await fetch(`http://localhost:8088/users?email=${username}&password=${password}`)
        const users = await response.json()

        if (users.length) {
            login(users[0].id)
            // Redirect to the home page if the login is successful
            Router.push("/")
        } else {
            setErrorMessage("Invalid username or password")
        }
    }

    return (
        <div className={styles.login__container}>
            <h1>Login Page</h1>
            <form className={styles.login__form} onSubmit={handleLogin}>
                <label className="form-label">
                    Username:
                    <input className="form-input"
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input className="form-input"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <br />
                <button className="login-button" type="submit">Log in</button>
                <p style={{ color: "red" }}>{errorMessage}</p>
            </form>
        </div>
    )
}

export default LoginPage
