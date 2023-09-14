import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const PostList = ({ post }) => {
    return (
        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Link to={`/post/${post.id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                    {/* <Typography variant='h3' gutterBottom>
                        {post.title}
                    </Typography> */}
                    <Typography variant="h5" color="text.secondary" component="div">
                        {post.slug}
                    </Typography>
                    <Typography variant="h5" color="text.secondary" component="div">
                        {post.content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default PostList