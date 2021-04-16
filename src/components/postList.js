import {React} from 'react'
import {Button} from '@material-ui/core/';
import '../styles/posts.css'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import { Link } from "react-router-dom";
import {Navbar} from './navbar';
import { TimeAgo } from './timeAgo'
import {useSelector}  from 'react-redux'
import { selectPostList} from '../slices/postSlice'

export const PostList = () => {
    const postList = useSelector(selectPostList)

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
                             <ThumbUpOutlinedIcon /> &nbsp; {post.id * 3}
                        </Button>
                        <Button color="primary" >
                            <ThumbDownOutlinedIcon /> &nbsp; {post.id * 2}
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
