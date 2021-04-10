import React from 'react'
import {Button} from '@material-ui/core/';
import '../styles/posts.css'
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const SinglePost = () => {
    
    let history = useHistory();

    const goToPreviousPage = () => {
        history.goBack()
    }

    return (
        <div className="posts-container">
            <div className="opened-post-card">
                <h5>Post Title Must Be As Long As The Text Comes From The Database</h5>
                <p>By Mbungi Boy. <i>4 Minutes Ago.</i></p>
                <p className="opened-post-body">
                    Post Body Is Where The Message Of The Post Is Contained So That
                    Other Users Can Read And Understand What The Post us About.
                    Post Body Is Where The Message Of The Post Is Contained So That
                    Other Users Can Read And Understand What The Post us About.
                    Post Body Is Where The Message Of The Post Is Contained So That
                    Other Users Can Read And Understand What The Post us About.
                    Post Body Is Where The Message Of The Post Is Contained So That
                    Other Users Can Read And Understand What The Post us About.
                    Post Body Is Where The Message Of The Post Is Contained So That
                    Other Users Can Read And Understand What The Post us About.
                 </p>
                 <div className="post-actions">
                    <Button color="primary"><ThumbUpIcon /> &nbsp; 12</Button>
                    <Button color="primary"><ThumbDownIcon />&nbsp; 5</Button>
                    <Button variant="contained" color="secondary" style={{float: 'right', margin: '0 5px'}}>
                        Delete
                    </Button>
                    <Link to="/post-details">
                        <Button variant="contained" color="primary" style={{float: 'right', margin: '0 5px'}}>
                            Edit
                        </Button>
                    </Link>
                    <Button variant="contained"
                        onClick={goToPreviousPage} color="primary" style={{float: 'right', margin: '0 5px'}}>
                        Back
                    </Button>
                 </div>
            </div>
        </div>
    )
}

export default SinglePost
