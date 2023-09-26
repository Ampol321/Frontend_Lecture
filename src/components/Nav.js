import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Login from './Login';
import { getUser, logout } from './helpers';

const pages = ['Home', 'Create', 'Login'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



const Nav = () => {
    // const [state, setState] = useState({
    //     email: '',
    //     password: '',
    // });
    // const { email, password } = state;
    // const handleChange = name => event => {
    //     // console.log('name', name, 'event', event.target.value);
    //     setState({ ...state, [name]: event.target.value });
    // }

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     axios.post(`http://127.0.0.1:8000/api/login`, { email, password })
    //         .then(response => {
    //             console.log(response)
    //             setOpen(false);
    //             return navigate("/");
    //         })
    //         .catch(error => {
    //             console.log(error.response)
    //             alert(error.response.data.error);
    //         })
    // };

    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/"> <img src="/images/React1.png" width="42" height="35g  " alt="" /></Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">Create</Link>
                        </li>
                    </ul>
                    <Button variant="contained" onClick={handleClickOpen}>Login</Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Login</DialogTitle>
                        <DialogContent>
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
                        </DialogContent>
                        <DialogActions>
                            <Button variant="outlined" onClick={handleSubmit}>Login</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </nav> */}
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
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link href="/" variant="body2">
                                        Home
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link href="/create" variant="body2">
                                        Create
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link onClick={handleClickOpen} variant="body2">
                                        Login
                                    </Link>
                                </MenuItem>

                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                component={Link} to="/"
                            >Home
                            </Button>
                            {/* { getUser() && <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                component={Link} to="/create"
                            >Create
                            </Button>} */}
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                component={Link} to="/create"
                            >Create
                            </Button>
                            {/* { getUser() ? <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={() => logout(() => navigate('/'))}
                            >Logout
                            </Button> : <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={handleClickOpen}
                            >Login
                            </Button>} */}
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={handleClickOpen}
                            >Login
                            </Button>

                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {open && <Login openDialog={open} handleClose={handleClose} />}

        </div>
    )
}

export default Nav