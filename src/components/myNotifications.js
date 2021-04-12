import {React, useState, useEffect} from 'react'
import '../styles/notifications.css'
import {Button} from '@material-ui/core/';
import { Link } from "react-router-dom";
import {fetchUserNotifications, deleteSingleNotification} from '../app/api';

export const MyNotifications = () => {
    const [showCloser, setShowCloser] = useState(false)
    const [userNotifications, setUserNotifications] = useState([])

    const pullUserNotifications = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        };

        try {
            const response = await fetchUserNotifications(config)
            setUserNotifications(response)
        } catch (err) {
            console.log('User Notifications Error : ' + err)
        }
    }


     const deleteNotification = async (id) => {
         const config = {
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Token ${localStorage.getItem('token')}`
             }
         };

         try {
             const response = await deleteSingleNotification(id, config)
             setUserNotifications(userNotifications.filter((item) => item.id !== id))
         } catch (err) {
             console.log('Delete Notification Error : ' + err)
         }
     }
   
    useEffect(() => {
        pullUserNotifications();
    }, [])


    return (<>
        <Link to="/notification-form" className="links">
            <Button color="primary" variant="contained">Add Notification</Button>
        </Link>
        <div className="notifications-container">
            <div className="notification-card"
                onMouseOver={e => {e.preventDefault(); setShowCloser(true)}}
                onMouseLeave={e => {e.preventDefault(); setShowCloser(false)}}>
                <button className="notification-closer" hidden={!showCloser}>x</button>
                <p><b>John Doe </b> 
                Is Feel ing Go od With Alice And 4 Oth ers. 
                Is Fee ling Good With Alice And 4 Others. 
                Is Feel ing Good With Alice And 4 Others. 
                Is Feeling Good With Alice And 4 Others. 
                </p> 
                <i>9 hours ago</i>
            </div>
            {userNotifications.map(({id, sender, message, date_created}) => 
                <div className="notification-card" key={id}
                    onMouseOver={e => {e.preventDefault(); setShowCloser(true)}}
                    onMouseLeave={e => {e.preventDefault(); setShowCloser(false)}}>
                    <button className="notification-closer" 
                        hidden={!showCloser}
                        onClick={e =>{e.preventDefault(); deleteNotification(id)}}>x</button>
                    <p><b>{sender} </b> {message}</p> 
                    <i>{date_created} ago</i>
                </div>
            )}
        </div> </>
    )
}

export default MyNotifications
