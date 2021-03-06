import {React, useState} from 'react'
import { Link, useHistory } from "react-router-dom";
import '../App.css'
import {authenticateUser} from '../app/api'
import {getUserInfo} from '../app/api'
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
import { useDispatch, useSelector } from 'react-redux'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { saveUser, apiConfigurations } from '../slices/userSlice'

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
  const history = useHistory();
  const dispatch = useDispatch()

  const credentials = {
      username: '',
      password: ''
  }

    const [loginCredentials, setLoginCredentials] = useState(credentials)
    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [usernameErrorMessage, setUsernameErrorMessage] = useState('')
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
  const [openBackDrop, setOpenBackDrop] = useState(false)

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
    
  const formValidator = (e) => {
      e.preventDefault()
      const username = e.target.username.value;
      const password = e.target.password.value;

      if (username === '') {
          setUsernameError(true)
          setUsernameErrorMessage('Username Cannot Be Blank!')
          return false;
      } else if (password === '') {
          setPasswordError(true)
          setPasswordErrorMessage('Password Cannot Be Blank!')
          return false;
      } else {
          setUsernameError(false);
          setPasswordError(false);
          setUsernameErrorMessage('');
          setPasswordErrorMessage('');
          return true;
      }
  }

    const onFinish = async (e) => {
      e.preventDefault()
      // setOpenBackDrop(true)
      const validation = formValidator(e);
      const config1 = { headers: { 'Content-Type': 'application/json'} };
       
      if (validation) {
        try {
          const response = await authenticateUser(loginCredentials, config1)
          setLoginCredentials(credentials)
          console.log('authenticated')
          const config2 = {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Token ${response.token}`
              }
          }
          try {
            const profile = await getUserInfo(config2)
            dispatch(saveUser({
              token: response.token,
              isAuthenticated: true,
              userId: profile.id,
              username: profile.username,
              email: profile.email
            }))
            localStorage.setItem('token', response.token);
            history.push("/")
            setOpenBackDrop(false);
          } catch (err) {
            console.log('Profile Error : ' + err)
            // setOpenBackDrop(false)
          }
        }
        catch (err) {
          setOpenBackDrop(false)
          setUsernameError(true)
          setUsernameErrorMessage('Incorrect username Or Password')
          console.log('Login Error : ' + err)
        }
      }
      else {
        console.log('Login Form Is Invalid')
        setOpenBackDrop(false)
      }
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
                <form className={classes.form}  name="loginForm" onSubmit={onFinish}>
                <TextField
                    variant="filled"
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
                    variant="filled"
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
                    Login
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link to="/forgot-password" className="links">Forgot Password</Link>
                    </Grid>
                    <Grid item>
                        <Link to="/sign-up" className="links"> No Account ? SignUp </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
            <Backdrop 
                className={classes.backdrop} 
                open={openBackDrop} 
                >
                <CircularProgress color="inherit" />
            </Backdrop>
    </Container> )
        }
export default LoginPage
