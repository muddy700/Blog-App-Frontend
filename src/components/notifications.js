import {React, useEffect} from 'react'
import '../styles/notifications.css'
import {fetchAllNotifications} from '../app/api';
import {Navbar} from './navbar'
import { TimeAgo } from './timeAgo'
import {useSelector, useDispatch}  from 'react-redux'
import { fetchNotifications, selectNotificationList } from '../slices/notificationSlice'

export const Notifications = () => {
    const dispatch = useDispatch()
    const notifications = useSelector(selectNotificationList)

    const pullNotifications = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}` } };

    try {
        const response = await fetchAllNotifications(config)
        dispatch(fetchNotifications(response))
    } catch (err) { console.log('Notifications Error : ' + err)}
}

    useEffect(() => {
        pullNotifications();
    }, [])


    return (
        // <div className="internal-card">
        <>
        <Navbar />
        <div className="notifications-container">
             {notifications.slice().sort((a, b) => b.date_created.localeCompare(a.date_created))
            .map(({id, sender_name, message, date_created}) => 
                <div className="notification-card" key={id}>
                    <p><b>{sender_name} </b> {message}</p> 
                    <TimeAgo timestamp={date_created} />
                </div>
            )}
            {/* </div> */}
        </div></>
    )
}

export default Notifications
