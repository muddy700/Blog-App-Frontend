import {React} from 'react'
import '../styles/profile.css'
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Navbar } from './navbar';
import { useSelector } from 'react-redux'
import { selectUserData } from '../slices/userSlice'

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

export const Profile = ({pullUserData}) => {
    const classes = useStyles();
    let history = useHistory();
    const user = useSelector(selectUserData)
  
    const goToPreviousPage = () => {
        history.goBack()
    }

    return (<>
      <Navbar />
      <div className="profile-container">
            <div className={classes.root}>
             <Avatar  className={classes.large}></Avatar>
            </div>
            <div className="info-card">
                <div className="info-row"><b>Username: </b> <p>{user.username}</p> </div>
                <div className="info-row"><b>Email: </b> <p> {user.email} </p></div>
            </div>
            <Button variant="contained"
                onClick={goToPreviousPage} color="secondary" style={{width: '40%', marginTop: 20}}>
                Close
            </Button>
        </div> </>
    )
}

export default Profile
