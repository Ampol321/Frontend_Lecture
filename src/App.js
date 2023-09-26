import './App.css';
import Nav from './components/Nav';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Typography } from '@mui/material';
import { PostList } from './components/PostList';

function App() {

  const [posts, setPosts] = useState([]);
  const config = {
    headers:{
      //  authorization: `Bearer ${getToken()}`
    }
  }

  const fetchPost = () => {
    axios
      .get(`http://127.0.0.1:8000/api/posts`)
      // .get(`${process.env.REACT_APP_API}/posts`)
      .then(response => {
        console.log(response);
        setPosts(response.data)
      })
      .catch(error => alert('Error fetching posts'));
  }

  useEffect(() => {
    fetchPost();
  }, []);
  console.log(posts)

  return (
    <div>
      <Nav /><br />
      <div className='container pb-5' >
        {/* <Title title='Welcome to my blog' user='John Wick' /> */}
        {posts.length >0 ? posts.map((post, i) => (
          <div className='container'>
            <PostList post={post} key={post.id} fetchPosts={fetchPost}/><br />
          </div>
        )):<Typography>No posts yet</Typography>}
      </div>
    </div>
  );
}

export default App;
