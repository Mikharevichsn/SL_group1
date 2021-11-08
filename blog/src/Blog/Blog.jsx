import React, { useEffect, useState } from 'react'

export const Blog = () => {
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('/posts');
            const data = await response.json();
            console.log("🚀 ~ file: Blog.jsx ~ line 8 ~ useEffect ~ data", data);
            if (data && Array.isArray(data)) setPosts(data);
        } catch(err) {
            console.log('!!! err = ', err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deletePost = async (id) => {
        try{
            const response = await fetch('/posts/' + id,
            { 
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await response.json();
            if (data) fetchData();
        } catch(err) {
            console.log('error = ', err);
        }
    }


    return (
        <div>
            <h1>Блог</h1>
            MY BLOG!!!!
            {posts.map((post) => {
                return <div key={post.id}>
                    <h4>№ {post.id} - {post.title} <button onClick={() => deletePost(post.id)}>Удалить</button></h4>
                </div>
            })}
        </div>
    )
}
