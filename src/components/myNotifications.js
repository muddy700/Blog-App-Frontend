import {React, useState, useEffect} from 'react'
import '../styles/notifications.css'
import {Button} from '@material-ui/core/';
import { Link } from "react-router-dom";
import {Navbar} from './navbar'
import {fetchUserNotifications, deleteSingleNotification} from '../app/api';
import {TimeAgo} from './timeAgo'

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
        <Navbar />
        <Link to="/notification-form" className="links">
            <Button color="primary" variant="contained">Add Notification</Button>
        </Link>
        <div className="notifications-container">
            {userNotifications.slice().sort((a, b) => b.date_created.localeCompare(a.date_created))
            .map(({id, sender_name, message, date_created}) => 
                <div className="notification-card" key={id}
                    onMouseOver={e => {e.preventDefault(); setShowCloser(true)}}
                    onMouseLeave={e => {e.preventDefault(); setShowCloser(false)}}>
                    <button className="notification-closer" 
                        hidden={!showCloser}
                        onClick={e =>{e.preventDefault(); deleteNotification(id)}}>x</button>
                    <p><b>{sender_name} </b> {message}</p> 
                    <TimeAgo timestamp={date_created} />
                    
                </div>
            )}
        </div> </>
    )
}

export default MyNotifications
