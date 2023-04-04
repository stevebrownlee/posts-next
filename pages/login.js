import React, { useRef } from "react"
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from "../styles/Login.module.css"


const Login = () => {
    const username = useRef()
    const password = useRef()
    const invalidDialog = useRef()
    const router = useRouter()

    const handleLogin = (e) => {
        e.preventDefault()
        const user = {
            username: username.current.value,
            password: password.current.value
        }
        loginUser(user)
            .then(res => {
                if ("id" in res) {
                    localStorage.setItem("lu_token", res.id)
                    router.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Username or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Level Up</h1>
                    <h2>Please sign in</h2>
                    <fieldset className={styles.fieldset}>
                        <label htmlFor="inputUsername"> Username address </label>
                        <input ref={username} type="username" id="username" className="form-control" placeholder="Username address" required autoFocus />
                    </fieldset>
                    <fieldset className={styles.fieldset}>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" id="password" className="form-control" placeholder="Password" required />
                    </fieldset>
                    <fieldset className={styles.fieldset} style={{
                        textAlign: "center"
                    }}>
                        <button className="btn btn-1 btn-sep icon-send" type="submit">Sign In</button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link href="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}

export default Login
