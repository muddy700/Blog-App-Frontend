import {React, useEffect} from 'react';
import './App.css';
import {PostList } from './components/postList'
import {MyPosts } from './components/myPosts'
import {PrivateRoute} from './components/privateRoute'
import {Notifications } from './components/notifications'
import {PageNotFound } from './components/pageNotFound'
import LoginPage from './components/loginPage';
import SignUpPage from './components/signUpPage';
import ForgotPasswordPage from './components/forgotPasswordPage';
import Profile from './components/profile';
import SinglePost from './components/singlePost';
import MyNotifications from './components/myNotifications';
import { fetchAllPosts, getUserInfo, fetchAllNotifications } from './app/api';
import { fetchPosts } from './slices/postSlice'
import { saveUser, selectUserData, apiConfigurations } from './slices/userSlice'
import { useSelector, useDispatch}  from 'react-redux'
import { fetchNotifications } from './slices/notificationSlice'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import PostForm from './components/postForm';
import NotificationForm from './components/notificationForm';

export const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserData)
  const config = useSelector(apiConfigurations)
  
    const pullUserData = async () => {
      try {
      const profile = await getUserInfo(config)
      dispatch(saveUser({
          token: user.token,
          isAuthenticated: true,
          userId: profile.id,
          username: profile.username,
          email: profile.email
      }))
      } catch (err) { console.log('Profile Error : ' + err) }
    }
   
    const pullPosts = async () => {
      try {
          const response = await fetchAllPosts()
          dispatch(fetchPosts(response))
      } catch (err) { console.log('Posts Error : ' + err)}
    }

    const pullNotifications = async () => {
      try {
          const response = await fetchAllNotifications(config)
          dispatch(fetchNotifications(response))
      } catch (err) { console.log('Notifications Error : ' + err)}
}

    useEffect(() => {
      pullPosts();
      pullUserData();
      pullNotifications();
    }, [])
  
  return (
    <Router>
      <div className="app">
        <div className="app-container">
          <Switch>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/sign-up">
              <SignUpPage />
            </Route>
            <Route exact path="/forgot-password">
              <ForgotPasswordPage />
            </Route>
            <PrivateRoute exact path="/my-posts"
              component={MyPosts} >
            </PrivateRoute>
            <PrivateRoute exact path="/profile"
              component={Profile}>
            </PrivateRoute>
            <PrivateRoute exact path="/post-details"
              component={SinglePost} >
            </PrivateRoute>
            <Route exact path="/notifications">
              <Notifications />
            </Route>
            <PrivateRoute exact path="/my-notifications"
              component={MyNotifications} >
            </PrivateRoute>
            <PrivateRoute exact path={["/edit-post", "/post-form"]}
              component={PostForm} >
            </PrivateRoute>
            <PrivateRoute exact path="/notification-form"
              component={NotificationForm}>
            </PrivateRoute>
            <Route exact path={["/blog/home", "/"]}>
              <PostList/>
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}
