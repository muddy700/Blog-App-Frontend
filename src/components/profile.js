import React from 'react'
import '../styles/profile.css'
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
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

    const goToPreviousPage = () => {
        history.goBack()
    }

    return (
        <div className="profile-container">
            <div className={classes.root}>
             <Avatar  className={classes.large}>M</Avatar>
            </div>
            <div className="info-card">
                <div className="info-row"><b>Username: </b> <p>Mr-Doe</p> </div>
                <div className="info-row"><b>First Name: </b> <p>John</p> </div>
                <div className="info-row"><b>Last Name: </b> <p>John</p> </div>
                <div className="info-row"><b>Email: </b> <p> jdoe@gmail.com </p></div>
                <div className="info-row"><b>Date Joined: </b> <p>12/3/2021</p> </div>
            </div>
            <Button variant="contained"
                onClick={goToPreviousPage} color="secondary" style={{width: '40%', marginTop: 20}}>
                Close
            </Button>
        </div>
    )
}

export default Profile
