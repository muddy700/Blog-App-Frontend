import {React, useState, useEffect} from 'react'
import {Button} from '@material-ui/core/';
import '../styles/posts.css'
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import { Link } from "react-router-dom";
import {fetchAllPosts, fetchAllVotes} from '../app/api';
import {Navbar} from './navbar';
import {TimeAgo} from './timeAgo'

export const PostList = () => {
 
    const [posts, setPosts] = useState([])
    const [postsWithVotes, setPostsWithVotes] = useState([])
    const [votes, setVotes] = useState([])
    const [isLiked, setIsLiked] = useState(false)
    const [isDisliked, setisDisliked] = useState(false)
    const [likes, setLikes] = useState(0)
    const [disLikes, setDisLikes] = useState(0)
    const userId = localStorage.getItem('userId')

    const fetchPosts = async () => {
    
        try {
            const response = await fetchAllPosts()
            setPosts(response)
        } catch (err) { console.log('Posts Error : ' + err)}
    }

    const fetchVotes = async () => {
        try {
            const response = await fetchAllVotes()
            setVotes(response)
        } catch (err) { console.log('Votes Error : ' + err)}
    }

    const showThem = () => {
        
        const newPosts = posts.map((post) => {
            return{
                ...post,
                pVotes: votes.find((vote) => vote.post === post.id)
            }
        })
        // console.log(newPosts)
        setPostsWithVotes(newPosts)
    }

    useEffect(() => {
        fetchPosts();
        fetchVotes();
    }, [])

    useEffect(() => {
        showThem();
    }, [votes])
    

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
                        <Button color="primary" >
                             <ThumbUpOutlinedIcon /> &nbsp; 10
                            {/* {post.pVotes.up.find((vote) => vote == userId ) ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon /> }&nbsp; {post.pVotes.up.length} */}
                        </Button>
                        <Button color="primary" >
                            <ThumbDownOutlinedIcon /> &nbsp; 5
                            {/* {post.pVotes.down.find((vote) => vote == userId )  ? <ThumbDownIcon /> : <ThumbDownOutlinedIcon /> }&nbsp; {post.pVotes.down.length} */}
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
