import {React, useState,useEffect} from 'react'
import '../styles/profile.css'
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import {getUserInfo} from '../app/api'
import {Navbar} from './navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    backgroundColor: 'black',
  },
}));

export const Profile = () => {
    const classes = useStyles();
    let history = useHistory();
    const [userProfile, setUserProfile] = useState({})

    const goToPreviousPage = () => {
        history.goBack()
    }

    const getUserData = async () => {
      const config= {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${localStorage.getItem('token')}` } };
    
          try {
              const profile = await getUserInfo(config)
            setUserProfile(profile)
            } catch (err) { console.log('Profile Error : ' + err)}
    }

    useEffect(() => {
      getUserData();
    }, [])

    return (<>
      <Navbar />
      <div className="profile-container">
            <div className={classes.root}>
             <Avatar  className={classes.large}></Avatar>
            </div>
            <div className="info-card">
                <div className="info-row"><b>Username: </b> <p>{userProfile.username}</p> </div>
                {/* <div className="info-row"><b>First Name: </b> <p>John</p> </div> */}
                {/* <div className="info-row"><b>Last Name: </b> <p>Doe</p> </div> */}
                <div className="info-row"><b>Email: </b> <p> {userProfile.email} </p></div>
                <div className="info-row"><b>Date Joined: </b> <p> {userProfile.date_joined}  </p> </div>
            </div>
            <Button variant="contained"
                onClick={goToPreviousPage} color="secondary" style={{width: '40%', marginTop: 20}}>
                Close
            </Button>
        </div> </>
    )
}

export default Profile
