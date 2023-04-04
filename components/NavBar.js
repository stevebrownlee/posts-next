import Link from 'next/link'
import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import styles from "./NavBar.module.css"


const NavBar = () => {
    const router = useRouter()
    const [token, setToken] = useState(null)

    useEffect(
        () => {
            setToken(localStorage.getItem("lu_token"))
        },
        []
    )

    const logout = () => {
        localStorage.removeItem("lu_token")
        router.push({ pathname: "/login" })
    }


    return (
        <ul className={styles.navbar}>
            {
                (token !== null)
                    ? <>
                        <li className={styles.navbar__item}>
                            Navigation link
                        </li>
                        <li className={styles.navbar__item}>
                            Navigation link
                        </li>
                        <li className={styles.navbar__item}>
                            Navigation link
                        </li>
                        <li className="nav-item">
                            <button className="nav-link fakeLink"
                                onClick={logout}
                            >Logout</button>
                        </li>
                    </>
                    : <>
                        <li className="nav-item">
                            <Link className="nav-link" href="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}

export default NavBar
