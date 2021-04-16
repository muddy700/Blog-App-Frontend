import React from 'react'
import {Navbar} from './navbar'

export const PageNotFound = () => {
    return (
        <div style={{width: '100%', textAlign: 'center'}}>
        <Navbar />
            <h1 style={{marginTop: '50%'}}>404! Page Not Found</h1>
        </div>
    )
}

export default PageNotFound
