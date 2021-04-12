import {React, useState, useEffect} from 'react'
import {Button} from '@material-ui/core/';
import '../styles/posts.css'
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import { Link } from "react-router-dom";
import {fetchAllPosts} from '../app/api';
import {Navbar} from './navbar';
import {TimeAgo} from './timeAgo'

export const PostList = () => {
 
    const [posts, setPosts] = useState([])
    const [isLiked, setIsLiked] = useState(false)
    const [isDisliked, setisDisliked] = useState(false)
    const [likes, setLikes] = useState(0)
    const [disLikes, setDisLikes] = useState(0)

    const fetchPosts = async () => {
    
        try {
            const response = await fetchAllPosts()
            setPosts(response)
        } catch (err) { console.log('Posts Error : ' + err)}
    }

    const handleLikes = () => {
        if(isLiked) { }
        else{
            setLikes(likes + 1)
            setIsLiked(true)
            if(isDisliked){
                setisDisliked(false)
                setDisLikes(disLikes - 1)
            }
        }
        
    }

    const handleDislikes = () => {
        if(isDisliked) { }
        else{
            setisDisliked(true)
            setDisLikes(disLikes + 1)
            if(isLiked){
                setIsLiked(false)
                setLikes(likes -1)
            }
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (<>
        <Navbar />
        <div className="posts-container">
            {posts.slice().sort((a, b) => b.date_updated.localeCompare(a.date_updated))
            .map((post) => (
                <div className="post-card" key={post.id}>
                    <h5>{post.title}</h5>
                    <p>By <b>{post.author_name}</b>
                        <i><TimeAgo timestamp={post.date_updated} /></i></p>
                    <p className="post-body">{post.content} </p>
                    <div className="post-actions">
                        <Button color="primary" onClick={handleLikes}>
                            {isLiked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon /> }&nbsp; {likes}
                        </Button>
                        <Button color="primary" onClick={handleDislikes}>
                            {isDisliked ? <ThumbDownIcon /> : <ThumbDownOutlinedIcon /> }&nbsp; {disLikes}
                        </Button>
                        <Link to={{pathname: `/posts/${post.id}/details`}}>
                            <Button variant="contained" color="primary" style={{float: 'right'}}>
                                View Post
                            </Button>
                        </Link>
                    </div>
                </div>
            ))}
        </div> </>
    )
}

export default PostList
