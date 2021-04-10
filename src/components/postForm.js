import {React, useState} from 'react'
import '../styles/notifications.css'
import { useHistory } from "react-router-dom";
import {Card, TextField, Button, CardContent} from '@material-ui/core';

export const PostForm = () => {

    let history = useHistory();
    const initialPost = {
        title: '',
        content: ''
    }
    const [postInfo, setPostInfo] = useState(initialPost)

    const goToPreviousPage = () => {
        history.goBack()
    }

    const handlePostForm = (e) => {
        e.preventDefault();
        setPostInfo({...postInfo,
            [e.target.name] : e.target.value
        })

    }

    const onFinish = (e) => {
        e.preventDefault();
        console.log(postInfo)
        setPostInfo(initialPost)
        history.push('post-details')
    }

    const IsFormValid = postInfo.title !== '' && postInfo.content !== '';
    return (
      <div className="posts-container">
      <Card className="new-message-card">
        <CardContent style={{textAlign: 'center'}} >
            <form 
                name="messageForm" 
                autoComplete
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
                    > Post </Button>
                </div>
            </form>

        </CardContent>
        </Card>
        </div> 
    )
}

export default PostForm
