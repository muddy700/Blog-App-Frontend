import {React, useState, useEffect} from 'react'
import '../styles/notifications.css'
import {fetchAllNotifications} from '../app/api';

export const Notifications = () => {
    const [showCloser, setShowCloser] = useState(false)
    const [notifications, setNotifications] = useState([])

    const fetchNotifications = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}` } };

    try {
        const response = await fetchAllNotifications(config)
        setNotifications(response)
    } catch (err) { console.log('Notifications Error : ' + err)}
}

    useEffect(() => {
        fetchNotifications();
    }, [])


    return (
        
        <div className="notifications-container">
            <div className="notification-card">
                <p><b>John Doe </b> 
                Is Feel ing Go od With Alice And 4 Oth ers. 
                Is Fee ling Good With Alice And 4 Others. 
                Is Feel ing Good With Alice And 4 Others. 
                Is Feeling Good With Alice And 4 Others. 
                </p> 
                <i>9 hours ago</i>
            </div>
            {notifications.map(({id, sender, message, date_created}) => 
                <div className="notification-card" key={id}>
                    <p><b>{sender} </b> {message}</p> 
                    <i>{date_created} ago</i>
                </div>
            )}
        </div>
    )
}

export default Notifications
