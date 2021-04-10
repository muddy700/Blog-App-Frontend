import React from 'react'
import { Link } from "react-router-dom";

export const SignUpPage = () => {
    return (
        <div>
            <h1 >SignUp Page</h1>
            <button class="btn btn-outline-success ">
                <Link to="/login" style={{color: 'inherit'}}> SignUp </Link>
            </button>
        </div>
    )
}

export default SignUpPage
