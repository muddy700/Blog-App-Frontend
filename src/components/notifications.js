import {React} from 'react'
import '../styles/notifications.css'
import {Navbar} from './navbar'
import { TimeAgo } from './timeAgo'
import {useSelector}  from 'react-redux'
import { selectNotificationList } from '../slices/notificationSlice'

export const Notifications = () => {
    const notifications = useSelector(selectNotificationList)

    return (
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
        </div></>
    )
}

export default Notifications
