import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/"> <img src="/images/React.png" width="35" height="35" alt="" /></Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">Create</Link>
                        </li>
                    </ul>
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