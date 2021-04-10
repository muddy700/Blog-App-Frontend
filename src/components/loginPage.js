import React from 'react'
import { Link } from "react-router-dom";

export const LoginPage = () => {
    return (
        <div>
            <h1 >Login Page</h1>
            <button class="btn btn-outline-success ">
                <Link to="/" style={{color: 'inherit'}}> Login </Link>
            </button>  <br />
            <button class="btn btn-outline-success ">
                <Link to="/signUp" style={{color: 'inherit'}}> No Account ? SignUp </Link>
            </button>
        </div>
    )
}

export default LoginPage
