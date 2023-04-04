import Link from 'next/link';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export default function Post() {
    const [post, setPost] = useState({})

    const router = useRouter()
    const { postId } = router.query

    useEffect(
        () => {
            if (postId) {
                fetch(`http://localhost:8088/posts/${postId}`)
                    .then(response => response.json())
                    .then((postData) => {
                        setPost(postData)
                    })
            }
        },
        [postId]
    )

    return <>
        <Link href="/">back to list</Link>

        <article>
            <header>
                <h2>{post.title}</h2>
            </header>

            <section className='post__description'>
                {post.description}
            </section>

            <section className='post__image'>
                <img src={post.imageURL} width="500em" />
            </section>


        </article>
    </>
}