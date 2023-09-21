import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/"> <img src="/images/React.png" width="35" height="35g  " alt="" /></Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">Create</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Login</Link>
                        </li>
                    </ul>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="#">Login</Link>
                    </li> */}
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