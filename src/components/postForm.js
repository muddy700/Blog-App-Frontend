import {React, useState, useEffect} from 'react'
import '../styles/notifications.css'
import { useHistory, useParams } from "react-router-dom";
import {createPost, updatePost} from '../app/api'
import {getSinglePost} from '../app/api'
import {Card, TextField, Button, CardContent} from '@material-ui/core';

export const PostForm = () => {

    let history = useHistory();
    const {id} = useParams()
    const initialPost = {
        title: '',
        content: ''
    }
    const [postInfo, setPostInfo] = useState(initialPost)

    const goToPreviousPage = () => {
        history.goBack()
        setPostInfo(initialPost)
    }

    const handlePostForm = (e) => {
        e.preventDefault();
        setPostInfo({...postInfo,
            [e.target.name] : e.target.value
        })

    }

    const fetchSinglePost = async (postId) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        };

        try {
            const postData = await getSinglePost(postId, config)
            setPostInfo(postData)
        } catch (err) {
            console.log('Single Post Error : ' + err)
        }
    }

    useEffect(() => {
        fetchSinglePost(id);
    }, [])

    const onFinish = async (e) => {
        e.preventDefault();
        const payload = {
            author: localStorage.getItem('userId'),
            title: postInfo.title,
            content: postInfo.content,
        }
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        };
        
        try {
            let response;
            if(id) { response = await updatePost(id, payload, config) }
            else { response = await createPost(payload, config) }
            setPostInfo(initialPost)
            goToPreviousPage();
        } catch (err) {
            console.log('Create Or Update Post Error : ' + err)
        }
    }

    const IsFormValid = postInfo.title !== '' && postInfo.content !== '';
    return (
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
                    variant="outlined"
                    value={postInfo.title}
                    autoFocus />
                <TextField
                    style={{marginTop: 20}} 
                    id="outlined-basic" 
                    name="content"
                    className="form-input"
                    label="Content" 
                    variant="outlined"
                    multiline
                    rows={5}
                    value={postInfo.content}
                    onChange={handlePostForm}
                />
                <div style={{display: 'flex'}}>
                <Button variant="contained"
                    onClick={goToPreviousPage} color="secondary" style={{width: '40%', marginTop: 20}}>
                    Cancel
                </Button>
                <Button 
                    style={{marginTop: 20, marginLeft: 30, width: '40%'}} 
                    type="submit"
                    variant="contained" 
                    color="primary" 
                    className="form-input"
                    disabled={!IsFormValid} 
                    > {id ? "Update" : "Post"}</Button>
                </div>
            </form>

        </CardContent>
        </Card>
        </div> 
    )
}

export default PostForm
