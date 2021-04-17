import {React, useState, useEffect} from 'react'
import '../styles/notifications.css'
import {Button} from '@material-ui/core/';
import { Link } from "react-router-dom";
import {Navbar} from './navbar'
import { deleteSingleNotification} from '../app/api';
import { TimeAgo } from './timeAgo'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserNotifications, deleteNotification } from '../slices/notificationSlice'
import { selectUserData, apiConfigurations} from '../slices/userSlice'

export const MyNotifications = () => {
    const [showCloser, setShowCloser] = useState(false)
    const user = useSelector(selectUserData)
    const dispatch = useDispatch()
    const config = useSelector(apiConfigurations)

    const userNotifications = useSelector(state =>
        fetchUserNotifications(state, user.userId))

     const removeNotification = async (id) => {
         const id2 = id;
         try {
             const response = await deleteSingleNotification(id, config)
             console.log(response)
             dispatch(deleteNotification(id2))
         } catch (err) {
             console.log('Delete Notification Error : ' + err)
         }
     }
   
    return (<>
        <Navbar />
        <Link to="/notification-form" className="links">
            <Button color="primary" variant="contained">Add Notification</Button>
        </Link>
        {userNotifications.length ?
            <div className="notifications-container">
                {userNotifications.slice().sort((a, b) => b.date_created.localeCompare(a.date_created))
                    .map(({ id, sender_name, message, date_created }) =>
                        <div className="notification-card" key={id}
                            onMouseOver={e => { e.preventDefault(); setShowCloser(true) }}
                            onMouseLeave={e => { e.preventDefault(); setShowCloser(false) }}>
                            <button className="notification-closer"
                                hidden={!showCloser}
                                onClick={e => { e.preventDefault(); removeNotification(id) }}>x</button>
                            <p>From
                                <b>{sender_name === user.username ? 'You' : sender_name} </b>
                                <br /> {message}</p>
                            <TimeAgo timestamp={date_created} />
                    
                        </div>
                    )}
            </div> :
            <div className="notification-card">
                <p>
                    You Don't Have Any Notification Yet.
                    Click The Button Above To Add
                </p>
            </div>
        }
         </>
    )
}

export default MyNotifications
