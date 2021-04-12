import React from 'react'
import '../styles/navbar.css'
import { Link, useHistory } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {logoutUser} from '../app/api'

export const Navbar = () => {
    const history = useHistory();
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    const endSession = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        };

        try {
            // const response = await logoutUser(config)
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('isLoggedIn');
            history.push("/blog/home")
        } catch (err) { console.log('Logout Error : ' + err) }
    }

    return (
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark" style={{width: '100%'}}>
                <div class="container-fluid">
                    <Link to="/blog/home" class="navbar-brand h1">Blog App</Link>
                    <button 
                        class="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span> 
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/blog/home" class="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/notifications" class="nav-link">Notifications</Link>
                        </li>
                        <li class="nav-item dropdown" >
                            <span
                            class="nav-link dropdown-toggle" 
                            data-bs-toggle="dropdown" 
                            // href="#" role="button" 
                            aria-expanded="false">My Activities</span>
                            <ul class="dropdown-menu">
                                <li><Link to="/my-posts" class="dropdown-item">My Posts</Link></li>
                                <li><Link to="/my-notifications" class="dropdown-item">My Notifications</Link></li>
                            </ul>
                        </li>
                    </ul>
                        {isLoggedIn ? <>
                        <button class="btn btn-info" style={{backgroundColor: 'inherit', border: 'none'}}>
                        <Tooltip title="Account" arrow> 
                            <Link to="/profile" >
                                <AccountCircleIcon fontSize="large" />
                            </Link>
                        </Tooltip>
                        </button>
                            <button 
                                class="btn btn-outline-danger"  
                                onClick={e => {e.preventDefault(); endSession()}}
                                style={{backgroundColor: 'inherit', border: 'none'}}>
                            <Tooltip title="Logout" arrow> 
                                    <PowerSettingsNewIcon fontSize="large" />
                            </Tooltip>
                            </button> </> : <>
                            <Link to="/sign-up" className="links">
                                <button class="btn btn-outline-primary"  
                                    style={{backgroundColor: 'inherit', border: 'none'}}> Register
                                </button> 
                            </Link>
                            <Link to="/login" className="links">
                                <button class="btn btn-outline-primary"  
                                    style={{backgroundColor: 'inherit', border: 'none'}}> LogIn
                                </button> 
                            </Link> </>
                         }
                    </div>
                </div>
            </nav>
    )
}

export default Navbar
