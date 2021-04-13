import {React, useState} from 'react'
import '../styles/notifications.css'
import { useHistory } from "react-router-dom";
import {createNotification} from '../app/api'
import {Card, TextField, Button, CardContent} from '@material-ui/core';
import {Navbar} from './navbar'

export const NotificationForm = () => {

    let history = useHistory();
    const [notificationBody, setnotificationBody] = useState('')

    const goToPreviousPage = () => {
        history.goBack()
    }

    const handleForm = (e) => {
        e.preventDefault();
        setnotificationBody(e.target.value)

    }

    const onFinish = async (e) => {
        e.preventDefault();
        const payload = {
            sender: localStorage.getItem('userId'),
            message: notificationBody
        }
         
        try {
            const response = await createNotification(payload)
            history.push('my-notifications')
            setnotificationBody('');
        } catch (err) { console.log('Create Notification Error : ' + err)}
    }

    const IsFormValid = notificationBody !== '';

    return (<><Navbar />
        <div className="notifications-container">
      <Card className="new-message-card">
        <CardContent style={{textAlign: 'center'}} >
            <form 
                name="messageForm" 
                autoComplete
                className="post-form"
                onSubmit={onFinish}>
                <TextField
                    style={{marginTop: 20}} 
                    id="outlined-basic" 
                    name="content"
                    className="form-input"
                    label="Content" 
                    variant="filled"
                    multiline
                    rows={5}
                    value={notificationBody}
                    onChange={handleForm}
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
                    > Push </Button>
                </div>
            </form>

        </CardContent>
        </Card>
        </div> </>
    )
}

export default NotificationForm
