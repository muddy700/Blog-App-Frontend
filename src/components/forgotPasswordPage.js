import React from 'react'
import { Link } from "react-router-dom";

export const ForgotPasswordPage = () => {
    return (
        <div>
            <h1> Password Reset Page</h1>
            <button class="btn btn-outline ">
                <Link to="/login" style={{color: 'inherit'}} className="links"> Close </Link>
            </button>
        </div>
    )
}

export default ForgotPasswordPage
