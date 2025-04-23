'use client'

import { IPost } from "@/interfaces/post.interface"
import { useEffect, useState } from "react"

export default function Posts() {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        async function getPosts() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const json = await response.json()
            setPosts(json)
        }

        getPosts()
    }, [])

    return (
        <div>
            <h1>Lista de Posts</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    posts.map((post) => (
                        <div 
                            key={post.id}
                            className="border-1 p-2"
                        >
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    ))
                }
            </div>
            
        </div>
    )
}