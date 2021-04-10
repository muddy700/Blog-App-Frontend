import {React, useState} from 'react'
import { Link } from "react-router-dom";
import '../App'

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


export const SignUpPage = () => {
    const classes = useStyles();
    const credentials = {
        username: '',
        email: '',
        password: ''
    }


    const [signUpCredentials, setSignUpCredentials] = useState(credentials)
    const [usernameError, setUsernameError] = useState(false)
    const [emailError, setEmailerror] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [usernameErrorMessage, setUsernameErrorMessage] = useState('')
    const [emailErrorMessage, setEmailErrorMessage] = useState('')
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')


    const handleSignUpCredentials = (e) => {
        e.preventDefault()
        setSignUpCredentials({
            ...signUpCredentials,
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
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(signUpCredentials)
        setSignUpCredentials(credentials)
    }


    return (
        <Container component="main" maxWidth="xs" className="login-container">
            <CssBaseline />
                <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up Form
                </Typography>
                <form className={classes.form}  name="loginForm" onSubmit={onFinish}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    error={usernameError}
                    value={signUpCredentials.username}
                    onChange={handleSignUpCredentials}
                    helperText={usernameError ? usernameErrorMessage : ''}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    onChange={handleSignUpCredentials}
                    error={emailError}
                    helperText={emailError  ?  emailErrorMessage : ''}
                    value={signUpCredentials.email}
                    autoComplete="email"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password"
                    onChange={handleSignUpCredentials}
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    error={passwordError}
                    helperText={passwordError ? passwordErrorMessage : ''}
                    value={signUpCredentials.password}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    <Link to="/login" style={{color: 'inherit' , textDecoration: 'none'}} > Submit </Link>
                </Button>
                <Grid container>
                    <Grid item>
                    <Link href="#" variant="body2" className="links">
                        <Link to="/login" style={{color: 'inherit', textDecoration: 'none'}}> Have Account ? Sign In </Link>
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
export default SignUpPage
