import React from 'react'
import '../styles/navbar.css'
import { Link } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

export const Navbar = () => {
    return (
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark" style={{width: '100%'}}>
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand h1">Blog App</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span> 
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" class="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/notifications" class="nav-link">Notifications</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/myPosts" class="nav-link">My Posts</Link>
                        </li>
                    </ul>
                    {/* <form class="d-flex"> */}
                        <button class="btn btn-outline-danger">
                        <Tooltip title="Logout" arrow> 
                            <Link to="/login" style={{color: 'inherit'}}>
                                <PowerSettingsNewIcon />
                            </Link>
                        </Tooltip>
                        </button>
                    {/* </form> */}
                    </div>
                </div>
            </nav>
    )
}

export default Navbar
