import {React, useState, useEffect} from 'react'
import '../styles/notifications.css'
import { useHistory, Redirect, useLocation } from "react-router-dom";
import {createPost, updatePost} from '../app/api'
import {getSinglePost} from '../app/api'
import {Card, TextField, Button, CardContent} from '@material-ui/core';
import { Navbar } from './navbar';
import {useDispatch} from 'react-redux'
import { savePost, postUpdated } from '../slices/postSlice'
import { selectUserData} from '../slices/userSlice'
import { useSelector } from 'react-redux';
import '../App.css'

export const PostForm = () => {

    let history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch()
    const user = useSelector(selectUserData)

    const { pid } = location
    const initialPost = {
        title: '',
        content: ''
    }
    const activePost = {
        title: location.title,
        content: location.content
    }
    const [postInfo, setPostInfo] = useState(pid ? activePost : initialPost)

    const goToPreviousPage = () => {
        if (pid) {
            history.push({pathname: '/post-details', pid: pid})
        }
        else {
            history.goBack()
        }
        setPostInfo(initialPost)
    }

    const handlePostForm = (e) => {
        e.preventDefault();
        setPostInfo({...postInfo,
            [e.target.name] : e.target.value
        })
    }

    const onFinish = async (e) => {
        e.preventDefault();
        const payload = {
            author: user.userId,
            title: postInfo.title,
            content: postInfo.content,
        }
        
        try {
            let response;
            if (pid) {
                response = await updatePost(pid, payload)
                dispatch(postUpdated(response))
                history.push({pathname: '/post-details', pid: response.id})
            }
            else {
                response = await createPost(payload)
                dispatch(savePost(response))
                history.push({pathname: '/post-details', pid: response.id})
                // goToPreviousPage();
            }
            setPostInfo(initialPost)
        } catch (err) {
            console.log('Create Or Update Post Error : ' + err)
        }
    }

    const IsFormValid = postInfo.title !== '' && postInfo.content !== '';
    return (<>
     <Navbar />
      <div className="posts-container">
      <Card className="new-message-card">
        <CardContent style={{textAlign: 'center'}} >
            <form 
                name="messageForm" 
                className="post-form"
                onSubmit={onFinish}>
                <TextField  
                    id="outlined-basic" 
                    name="title" 
                    onChange={handlePostForm} 
                    className="form-input" 
                    label="title" 
                    variant="filled"
                    value={postInfo.title}
                    autoFocus />
                <TextField
                    style={{marginTop: 20}} 
                    id="outlined-basic" 
                    name="content"
                    className="form-input"
                    label="Content" 
                    variant="filled"
                    multiline
                    rows={5}
                    value={postInfo.content}
                    onChange={handlePostForm}
                />
                <div style={{ display: 'flex' }}>
                            <Button variant="contained"
                                onClick={goToPreviousPage}
                    color="secondary" style={{width: '40%', marginTop: 20}}>
                    Cancel
                </Button>
                <Button 
                    style={{marginTop: 20, marginLeft: 30, width: '40%'}} 
                    type="submit"
                    variant="contained" 
                    color="primary" 
                    className="form-input"
                    disabled={!IsFormValid} 
                    > {pid ? "Update" : "Post"}</Button>
                </div>
            </form>

        </CardContent>
        </Card>
        </div> </>
    )
}

export default PostForm
