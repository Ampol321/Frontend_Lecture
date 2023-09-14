import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SinglePost = () => {

    const [post, setPost] = useState({});
    let { id } = useParams();
    console.log(id);

    return (
        <div>SinglePost</div>
    )
}

export default SinglePost