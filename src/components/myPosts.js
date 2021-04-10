import React from 'react'
import {Button} from '@material-ui/core/';
import '../styles/posts.css'
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { Link } from "react-router-dom";


export const MyPosts = () => {
    return (
        <div className="posts-container">
            <div className="post-card">
                <h5>Post Title Must Be As Long As The Text Comes From The Database</h5>
                <p>By Mbungi Boy. <i>4 Minutes Ago.</i></p>
                <p className="post-body">Post Body Is Where The Message Of The Post Is Contained So That
                 Other Users Can Read And Understand What The Post us About.
                 </p>
                 <div className="post-actions">
                    <Button color="primary"><ThumbUpIcon /> &nbsp; 12</Button>
                    <Button color="primary"><ThumbDownIcon />&nbsp; 5</Button>
                    <Link to="/postDetails">
                        <Button variant="contained" color="primary" style={{float: 'right'}}>
                            View Post.
                        </Button>
                    </Link>
                 </div>
            </div>
            <div className="post-card">
                <h5>Post Title Must Be As Long As The Text Comes From The Database</h5>
                <p>By Mbungi Boy. <i>4 Minutes Ago.</i></p>
                <p className="post-body">Post Body Is Where The Message Of The Post Is Contained So That
                 Other Users Can Read And Understand What The Post us About.
                 </p>
                 <div className="post-actions">
                    <Button color="primary"><ThumbUpIcon /> &nbsp; 12</Button>
                    <Button color="primary"><ThumbDownIcon />&nbsp; 5</Button>
                    <Link to="/postDetails">
                        <Button variant="contained" color="primary" style={{float: 'right'}}>
                            View Post.
                        </Button>
                    </Link>
                 </div>
            </div>
            <div className="post-card">
                <h5>Post Title Must Be As Long As The Text Comes From The Database</h5>
                <p>By Mbungi Boy. <i>4 Minutes Ago.</i></p>
                <p className="post-body">Post Body Is Where The Message Of The Post Is Contained So That
                 Other Users Can Read And Understand What The Post us About.
                 </p>
                 <div className="post-actions">
                    <Button color="primary"><ThumbUpIcon /> &nbsp; 12</Button>
                    <Button color="primary"><ThumbDownIcon />&nbsp; 5</Button>
                    <Link to="/postDetails">
                        <Button variant="contained" color="primary" style={{float: 'right'}}>
                            View Post.
                        </Button>
                    </Link>
                 </div>
            </div>
            <div className="post-card">
                <h5>Post Title Must Be As Long As The Text Comes From The Database</h5>
                <p>By Mbungi Boy. <i>4 Minutes Ago.</i></p>
                <p className="post-body">Post Body Is Where The Message Of The Post Is Contained So That
                 Other Users Can Read And Understand What The Post us About.
                 </p>
                 <div className="post-actions">
                    <Button color="primary"><ThumbUpIcon /> &nbsp; 12</Button>
                    <Button color="primary"><ThumbDownIcon />&nbsp; 5</Button>
                    <Link to="/postDetails">
                        <Button variant="contained" color="primary" style={{float: 'right'}}>
                            View Post.
                        </Button>
                    </Link>
                 </div>
            </div>
            <div className="post-card">
                <h5>Post Title Must Be As Long As The Text Comes From The Database</h5>
                <p>By Mbungi Boy. <i>4 Minutes Ago.</i></p>
                <p className="post-body">Post Body Is Where The Message Of The Post Is Contained So That
                 Other Users Can Read And Understand What The Post us About.
                 </p>
                 <div className="post-actions">
                    <Button color="primary"><ThumbUpIcon /> &nbsp; 12</Button>
                    <Button color="primary"><ThumbDownIcon />&nbsp; 5</Button>
                    <Link to="/postDetails">
                        <Button variant="contained" color="primary" style={{float: 'right'}}>
                            View Post.
                        </Button>
                    </Link>
                 </div>
            </div>
        </div>
    )
}

export default MyPosts
