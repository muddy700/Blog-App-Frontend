import {React, useState, useEffect} from 'react'
import {Button} from '@material-ui/core/';
import '../styles/posts.css'
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { Link } from "react-router-dom";
import {Navbar} from './navbar'
import { TimeAgo } from './timeAgo'
import { useSelector } from 'react-redux'
import { fetchUserPosts } from '../slices/postSlice'
import { selectUserData} from '../slices/userSlice'

export const MyPosts = () => {

    const user = useSelector(selectUserData)
    // console.log(user)
    const userPosts = useSelector(state => fetchUserPosts(state, user.userId))

    return (<>
        <Navbar />
        <Link to="/post-form" className="links">
            <Button color="primary" variant="contained">Add Post</Button>
        </Link>
        <div className="posts-container">
            {userPosts.slice().sort((a, b) => b.date_updated.localeCompare(a.date_updated))
            .map((post) => (
                <div className="post-card" key={post.id}>
                    <h5>{post.title}</h5>
                    <p>By <b>{post.author_name}</b> 
                        <TimeAgo timestamp={post.date_updated} /></p>
                    <p className="post-body">{post.content} </p>
                    <div className="post-actions">
                        <Button color="primary"><ThumbUpIcon /> &nbsp; 12</Button>
                        <Button color="primary"><ThumbDownIcon />&nbsp; 5</Button>
                        <Link to={{pathname: `/posts/${post.id}/details`}}>
                            <Button variant="contained" color="primary" style={{float: 'right'}}>
                                View Post
                            </Button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default MyPosts
