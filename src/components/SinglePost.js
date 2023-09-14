import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav';

const SinglePost = () => {

    const [post, setPost] = useState({});
    let { id } = useParams();
    console.log(id);

    const fetchPost = () => {
        axios.get(`http://localhost:8000/api/posts/${id}`)
            .then(response => {
                console.log(response.data);
                setPost(response.data);
            })
            .catch(error => alert('Error Fetching Posts'));
    }

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        // <div>SinglePost</div>
        <div>
            <Nav />
            <div className='container pb-5'>
                <br />
                <h1>{post.title}</h1>
                <p className='lead'>{post.content}</p>
                <p>
                    Author <span className='badge'>{post.user}</span>Published on{''}
                    <span className='badge'> {new Date(post.created_at).toLocaleString()}</span>
                </p>
            </div>
        </div>
    )
}

export default SinglePost