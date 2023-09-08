import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Create from './components/Create';
import Nav from './components/Nav';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [posts, setPosts] = useState([]);

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

  return (
    <div className="App ">
      <Nav />
      {posts.map((post, i) => (
        <div className='container'>
          <div className='row'>
            <h2 className='col-4'>{post.title}</h2>
            <p className='col-2'>{post.slug}</p>
            <p className='col-2'>{post.content}</p>
          </div>
        </div>
      ))};
    </div>
  );
}

export default App;
