import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Post.module.css'
import '../styles/Home.module.css'


const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/posts`)
                .then(response => response.json())
                .then((postData) => {
                    setPosts(postData)
                })
        },
        []
    )

    return <>
        <h1>Posts</h1>
        {
            posts.map(post => {
                return <div className={styles.post}>
                    <Link href={`/posts/${post.id}`}>{ post.title }</Link>
                </div>
            })
        }
    </>
}

export default Home
