import {React, useState} from 'react'
import { Link } from "react-router-dom";
import '../App.css'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Backdrop from '@material-ui/core/Backdrop';
// import CircularProgress from '@material-ui/core/CircularProgress';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#" className="links">
        BrungasInc.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//End Of Copyright Function
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export const LoginPage = () => {
    const classes = useStyles();
    const credentials = {
        username: '',
        password: ''
    }

    const [loginCredentials, setLoginCredentials] = useState(credentials)
    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [usernameErrorMessage, setUsernameErrorMessage] = useState('')
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')


    const handleLoginCredentials = (e) => {
        e.preventDefault()
        setLoginCredentials({
            ...loginCredentials,
            [e.target.name]: e.target.value
        })
        if (e.target.name === 'username') {
            setUsernameError(false)
        }
        if (e.target.name === 'password') {
            setPasswordError(false)
        }
    }

    const onFinish = (e) => {
        e.preventDefault()
        const username = e.target.username.value;
        const password = e.target.password.value;
        console.log(loginCredentials)
        setLoginCredentials(credentials)
    }


    return (
        <Container component="main" maxWidth="xs" className="login-container">
            <CssBaseline />
                <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form}  name="loginForm" noValidate={false} onSubmit={onFinish}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="username"
                    label="username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={handleLoginCredentials}
                    error={usernameError}
                    helperText={usernameError  ?  usernameErrorMessage : ''}
                    value={loginCredentials.username}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password"
                    onChange={handleLoginCredentials}
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    error={passwordError}
                    helperText={passwordError ? passwordErrorMessage : ''}
                    value={loginCredentials.password}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    <Link to="/" style={{color: 'inherit' , textDecoration: 'none'}} > Login </Link>
                </Button>
                <Grid container>
                    <Grid item xs>
                    <Link href="#" variant="body2" className="links">
                        <Link to="/forgot-password" style={{color: 'inherit', textDecoration: 'none'}}>Forgot Password</Link>
                    </Link>
                    </Grid>
                    <Grid item>
                    <Link href="#" variant="body2" className="links" >
                        <Link to="/signUp" style={{color: 'inherit', textDecoration: 'none'}}> No Account ? SignUp </Link>
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
            {/* <Backdrop 
                className={classes.backdrop} 
                open={openBackDrop} 
                >
                <CircularProgress color="inherit" />
            </Backdrop> */}
    </Container> )
        }
export default LoginPage
