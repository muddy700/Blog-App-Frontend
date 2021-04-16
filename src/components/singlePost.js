import {React} from 'react'
import {Button} from '@material-ui/core/';
import '../styles/posts.css'
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { deleteSinglePost} from '../app/api'
import { useHistory, Link, useLocation } from "react-router-dom";
import {Navbar} from './navbar';
import {TimeAgo} from './timeAgo'
import { useSelector, useDispatch } from 'react-redux'
import { getPostById, deletePost } from '../slices/postSlice'
import { selectUserData, apiConfigurations } from '../slices/userSlice'

export const SinglePost = () => {
    
    let history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch()
    const user = useSelector(selectUserData)
    const singlePost = useSelector(state => getPostById(state, location.pid))
    const config = useSelector(apiConfigurations)

    const goToPreviousPage = () => {
        history.goBack()
    }

    const removePost = async (id2) => {
        const pid2 = id2;
        try {
            const response = await deleteSinglePost(id2, config)
            console.log(response.date_joined)
            history.push('/my-posts')
            dispatch(deletePost(pid2))
        } catch (err) {
            console.log('Delete Post Error : ' + err)
        }
    }
    
    const { id, title, content, author_name, author, date_updated } = singlePost ? singlePost : ''
    
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
                    {author === user.userId ? <>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={e => {e.preventDefault(); removePost(id)}}
                        style={{float: 'right', margin: '0 5px'}}>
                        Delete
                    </Button>
                    <Link to={{pathname: "/edit-post", pid:id, title, content}}>
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
