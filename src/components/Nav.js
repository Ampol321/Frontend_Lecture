import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';



const Nav = () => {
    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const [open, setOpen] = React.useState(false);
    const { email, password } = state;
    const navigate = useNavigate()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = name => event => {
        // console.log('name', name, 'event', event.target.value);
        setState({ ...state, [name]: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`http://127.0.0.1:8000/api/login`, { email, password })
            .then(response => {
                console.log(response)
                setOpen(false);
                return navigate("/");
            })
            .catch(error => {
                console.log(error.response)
                alert(error.response.data.error);
            })
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/"> <img src="/images/React1.png" width="42" height="35g  " alt="" /></Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">Create</Link>
                        </li>
                    </ul>
                    <Button variant="outlined" onClick={handleClickOpen}>Login</Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Login</DialogTitle>
                        <DialogContent>
                            {/* <form onSubmit={handleSubmit}> */}
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="email"
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange('email')}
                                    value={email}
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="password"
                                    label="Password"
                                    type="password"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange('password')}
                                    value={password}
                                />
                            {/* </form> */}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleSubmit}>Login</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </nav>
            {/* <nav className='navbar navbar-light bg-light'>
                <ul className='nav nav-tabs'>
                    <li className='nav-item pr-3 pt-3 pb-3'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='nav-item pr-3 pt-3 pb-3'>
                        <Link to="/create">Create</Link>
                    </li>
                </ul>
            </nav> */}
        </div>
    )
}

export default Nav