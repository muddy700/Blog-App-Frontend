import {React, useState, useEffect} from 'react'
import '../styles/notifications.css'
import {fetchAllNotifications} from '../app/api';
import {Navbar} from './navbar'
import {TimeAgo} from './timeAgo'

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
        <><Navbar />
        <div className="notifications-container">
             {notifications.slice().sort((a, b) => b.date_created.localeCompare(a.date_created))
            .map(({id, sender_name, message, date_created}) => 
                <div className="notification-card" key={id}>
                    <p><b>{sender_name} </b> {message}</p> 
                    <TimeAgo timestamp={date_created} />
                </div>
            )}
        </div> </>
    )
}

export default Notifications
