import {React, useState} from 'react'
import '../styles/notifications.css'

export const Notifications = () => {
    const [showCloser, setShowCloser] = useState(false)
    return (
        
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
            <div className="notification-card"
                onMouseOver={e => {e.preventDefault(); setShowCloser(true)}}
                onMouseLeave={e => {e.preventDefault(); setShowCloser(false)}}>
                <button className="notification-closer" hidden={!showCloser}>x</button>
                <p><b>John Doe </b> 
                Is Feel ing Good With Alice And 4 Oth ers. 
                Is Feeling Good With Alice And 4 Others. 
                </p> 
                <i>9 hours ago</i>
            </div>
            <div className="notification-card"
                onMouseOver={e => {e.preventDefault(); setShowCloser(true)}}
                onMouseLeave={e => {e.preventDefault(); setShowCloser(false)}}>
                <button className="notification-closer" hidden={!showCloser}>x</button>
                <p><b>John Doe </b> 
                Is Feel ing Go od With Alice And 4 Oth ers. 
                </p> 
                <i>9 hours ago</i>
            </div>
            <div className="notification-card"
                onMouseOver={e => {e.preventDefault(); setShowCloser(true)}}
                onMouseLeave={e => {e.preventDefault(); setShowCloser(false)}}>
                <button className="notification-closer" hidden={!showCloser}>x</button>
                <p><b>John Doe </b> 
                Is Feel ing Go od With Alice And 4 Oth ers. 
                Is Feel ing Go od With Alice And 4 Oth ers. 
                Is Feel ing Go od With Alice And 4 Oth ers. 
                </p> 
                <i>9 hours ago</i>
            </div>
            <div className="notification-card"
                onMouseOver={e => {e.preventDefault(); setShowCloser(true)}}
                onMouseLeave={e => {e.preventDefault(); setShowCloser(false)}}>
                <button className="notification-closer" hidden={!showCloser}>x</button>
                <p><b>John Doe </b> 
                Is Feel ing Go od With Alice And 4 Oth ers. 
                </p> 
                <i>9 hours ago</i>
            </div>
            <div className="notification-card"
                onMouseOver={e => {e.preventDefault(); setShowCloser(true)}}
                onMouseLeave={e => {e.preventDefault(); setShowCloser(false)}}>
                <button className="notification-closer" hidden={!showCloser}>x</button>
                <p><b>John Doe </b> 
                Is Feel ing Go od With Alice And 4 Oth ers. 
                Is Feel ing Go od With Alice And 4 Oth ers. 
                Is Feel ing Go od With Alice And 4 Oth ers. 
                </p> 
                <i>9 hours ago</i>
            </div>
            <div className="notification-card"
                onMouseOver={e => {e.preventDefault(); setShowCloser(true)}}
                onMouseLeave={e => {e.preventDefault(); setShowCloser(false)}}>
                <button className="notification-closer" hidden={!showCloser}>x</button>
                <p><b>John Doe </b> 
                Is Feel ing Go od With Alice And 4 Oth ers. 
                </p> 
                <i>9 hours ago</i>
            </div>
        </div>
    )
}

export default Notifications
