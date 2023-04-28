import AuthRequired from "../components/AuthRequired";
import Navbar from "../components/NavBar";
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
    return <><Navbar />
        <Component {...pageProps} />
        </>
}

export default MyApp;
