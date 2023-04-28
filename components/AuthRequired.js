import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useSimpleAuth from '../auth/useAuth'

const AuthRequired = ({ children }) => {
    const { loggedIn } = useSimpleAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loggedIn) {
            router.push('/login')
        }
    }, [])

    return <>{loggedIn && children}</>
}

export default AuthRequired
