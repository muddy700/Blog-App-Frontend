import {React, useEffect} from 'react'
import {Button} from '@material-ui/core/';
import '../styles/posts.css'
// import ThumbDownIcon from '@material-ui/icons/ThumbDown';
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import { Link } from "react-router-dom";
import {fetchAllPosts, getUserInfo } from '../app/api';
import {Navbar} from './navbar';
import { TimeAgo } from './timeAgo'
import {useSelector, useDispatch}  from 'react-redux'
import { selectPostList, fetchPosts } from '../slices/postSlice'
import { saveUser, selectUserData } from '../slices/userSlice'


export const PostList = () => {
 
    const postList = useSelector(selectPostList)
    const dispatch = useDispatch();
    // const user = useSelector(selectUserData)

    const pullPosts = async () => {
        try {
            const response = await fetchAllPosts()
            dispatch(fetchPosts(response))
        } catch (err) { console.log('Posts Error : ' + err)}
    }

    useEffect(() => {
        pullPosts();
    }, [])

    return (<>
        <Navbar />
        <div className="posts-container">
            {postList.slice().sort((a, b) => b.date_updated.localeCompare(a.date_updated))
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
                        
                        <Link to={{pathname: `/post-details`, pid:post.id }}>
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
