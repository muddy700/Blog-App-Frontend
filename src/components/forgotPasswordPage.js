import React from 'react'
import { Link } from "react-router-dom";

export const ForgotPasswordPage = () => {
    return (
        <div>
            <h1> Password Reset</h1>
            <button class="btn btn-outline-success ">
                <Link to="/login" style={{color: 'inherit'}}> Reset </Link>
            </button>
        </div>
    )
}

export default ForgotPasswordPage
