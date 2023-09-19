import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import { Container } from '@mui/material'
import Title from './Title'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";

const UpdatePost = () => {

    const [state, setState] = useState({
        title: '',
        content: '',
        slug: '',
        user: '',
        userId: 0
    })

    const { title, content, user, userId } = state;
    let { id } = useParams()
    let navigate = useNavigate();
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/posts/${id}/edit`)
            .then(response => {
                const { title, content, slug, user, user_id } = response.data;
                setState({ ...state, title, content, slug, user, userId: user_id });
            })
            .catch(error => alert('Error loading single post'));
    }, []);

    const handleChange = name => event => {
        // console.log('name', name, 'event', event.target.value);
        setState({ ...state, [name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        // console.table({ title, content, user });
        axios
            .put(`http://127.0.0.1:8000/api/posts/${id}`, { title, content, user, userId })
            .then(response => {
                console.log(response);
                const { title, content, slug, user } = response.data;
                // empty state
                setState({ ...state, title, content, slug, user });
                // show sucess alert
                alert(`Post titled ${title} is updated`);
                return navigate("/");
            })
            .catch(error => {
                console.log(error.response);
                alert(error.response.data.error);
            });
    };

    const showUpdateForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="text-muted">Title</label>
                <input
                    onChange={handleChange('title')}
                    value={title}
                    type="text"
                    className="form-control"
                    placeholder="Post title"
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Content</label>
                <textarea
                    onChange={handleChange('content')}
                    value={content}
                    type="text"
                    className="form-control"
                    placeholder="Write something.."
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">User</label>
                <input
                    onChange={handleChange('user')}
                    value={user.name}
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    required
                />
            </div>
            <div>
                <button className="btn btn-primary">Update</button>
            </div>
        </form>
    );


    return (
        <div>
            <Nav />
            <Container>
                <Title name='Update a post' />
                <br />
                {showUpdateForm()}
                {/* <form>
                    <div className="form-group">
                        <label className='text-muted'>Title </label>
                        <input type="text" className='form-control' placeholder='Post Title' required />
                    </div>
                    <div className='form-group'>
                        <label className='text-muted'>Content </label>
                        <textarea type="text" className='form-control' placeholder='Write Something...' required />
                    </div>
                    <div className="form-group">
                        <label className='text-muted'>User </label>
                        <input type="text" className='form-control' placeholder='Your Name' required />
                    </div>
                    <div>
                        <button className='btn btn-primary' type='submit'>Update</button>
                    </div>
                </form> */}
            </Container>
        </div>
    )
}

export default UpdatePost