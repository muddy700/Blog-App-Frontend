import {React, useState, useEffect} from 'react'
import {Button} from '@material-ui/core/';
import '../styles/posts.css'
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import {getSinglePost, deleteSinglePost} from '../app/api'
import {Navbar} from './navbar';
import {TimeAgo} from './timeAgo'

export const SinglePost = () => {
    
    let history = useHistory();
    const {postId} = useParams()
    const [singlePost, setSinglePost] = useState({})
    const activeUserId = localStorage.getItem('userId');

    const goToPreviousPage = () => {
        history.goBack()
    }

    const fetchSinglePost = async (id) => {

        try {
            const postData = await getSinglePost(id)
            setSinglePost(postData)
        } catch (err) {
            console.log('Single Post Error : ' + err)
        }
    }

     const deletePost = async (id) => {
         const config = {
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Token ${localStorage.getItem('token')}`
             }
         };

         try {
             const response = await deleteSinglePost(id, config)
             history.push('/my-posts')
         } catch (err) {
             console.log('Delete Post Error : ' + err)
         }
     }

    useEffect(() => {
        fetchSinglePost(postId);
    }, [])

    const {id, title, content, author_name, author, date_updated } = singlePost;
    return (<>
        <Navbar />
        <div className="posts-container">
            <div className="opened-post-card" key={id}>
                <h5>{title}</h5>
                <p>By <b>{author_name}</b>. 
                <TimeAgo timestamp={date_updated} /></p>
                <p className="opened-post-body"> {content} </p>
                 <div className="post-actions">
                    <Button color="primary"><ThumbUpIcon /> &nbsp; 12</Button>
                    <Button color="primary"><ThumbDownIcon />&nbsp; 5</Button>
                    {author == activeUserId ? <>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={e => {e.preventDefault(); deletePost(id)}}
                        style={{float: 'right', margin: '0 5px'}}>
                        Delete
                    </Button>
                    <Link to={{pathname: `/posts/${id}/edit`}}>
                        <Button variant="contained" color="primary" style={{float: 'right', margin: '0 5px'}}>
                            Edit
                        </Button>
                    </Link> </>: ''}
                    <Button variant="contained"
                        onClick={goToPreviousPage} color="primary" style={{float: 'right', margin: '0 5px'}}>
                        Back
                    </Button>
                 </div>
            </div>
        </div> </>
    )
}

export default SinglePost
