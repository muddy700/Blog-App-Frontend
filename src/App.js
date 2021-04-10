import React from 'react';
import './App.css';
import {Navbar } from './components/navbar'
import {PostList } from './components/postList'
import {MyPosts } from './components/myPosts'
import {Notifications } from './components/notifications'
import {PageNotFound } from './components/pageNotFound'
import LoginPage from './components/loginPage';
import SignUpPage from './components/signUpPage';
import ForgotPasswordPage from './components/forgotPasswordPage';
import Profile from './components/profile';
import SinglePost from './components/singlePost';
import MyNotifications from './components/myNotifications';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import PostForm from './components/postForm';
import NotificationForm from './components/notificationForm';

export const App = () => {
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
            <Route exact path="/my-posts">
              <Navbar />
              <MyPosts />
            </Route>
            <Route exact path="/profile">
              <Navbar />
              <Profile />
            </Route>
            <Route exact path="/post-details">
              <Navbar />
              <SinglePost />
            </Route>
            <Route exact path="/notifications">
              <Navbar />
              <Notifications />
            </Route>
            <Route exact path="/my-notifications">
              <Navbar />
              <MyNotifications />
            </Route>
            <Route exact path="/post-form">
              <Navbar />
              <PostForm />
            </Route>
            <Route exact path="/notification-form">
              <Navbar />
              <NotificationForm />
            </Route>
            <Route exact path="/">
              <Navbar />
              <PostList />
            </Route>
            <Route path="*">
              <Navbar />
              <PageNotFound />
            </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}
