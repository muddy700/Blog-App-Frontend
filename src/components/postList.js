import { React, useState } from 'react'
import IdleTimer from 'react-idle-timer';
import {Button} from '@material-ui/core/';
import '../styles/posts.css'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import { Link, useHistory } from "react-router-dom";
import {Navbar} from './navbar';
import { TimeAgo } from './timeAgo'
import { useSelector } from 'react-redux'
import { selectPostList } from '../slices/postSlice'
import { IdleTimeOutModal } from './idleModal'

export const PostList = () => {
    let history = useHistory();
    var idleTimer = null
    const postList = useSelector(selectPostList)
    const [isTimedOut, setIsTimedOut] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const handleLogout = () => {
        setShowModal(false)
        history.push('/login')
    }

    const handleClose = () => {
        setShowModal(false)
    }
    const onAction = (e) => {
        // console.log('User Did Something ', e)
        setIsTimedOut(false)
    }

    const onActive = (e) => {
        // console.log('User Is Active ', e)
        setIsTimedOut(false)
    }

    const onIdle = (e) => {
        // console.log('User Is Idle ', e)
        if (isTimedOut) {
            history.push('/login')
        }
        else {
            setShowModal(true)
            idleTimer.reset()
            setIsTimedOut(true)
        }
    }
    return (<>
          <IdleTimer
            ref={ref => {idleTimer = ref }}
            element={document}
            onActive={onActive}
            onIdle={onIdle}
            onAction={onAction}
            debounce={250}
            timeout={1000 * 5 * 1} />
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
        </div>
        <IdleTimeOutModal
            showModal={showModal}
            handleClose={handleClose}
            handleLogout={handleLogout}
        />
    </>
    )
}

export default PostList
