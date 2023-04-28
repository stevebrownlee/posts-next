import { useEffect } from "react";
import Navbar from "../components/NavBar";
import '../styles/globals.css'
import useSimpleAuth from "../auth/useAuth";
import { useRouter } from 'next/router'

const MyApp = ({ Component, pageProps }) => {
    const { loggedIn } = useSimpleAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loggedIn) {
            router.push("/login")
        }
    }, [loggedIn])

    return <>
        {loggedIn && <Navbar />}
        <Component {...pageProps} />
    </>
}

export default MyApp;
