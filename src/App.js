import React from 'react';
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
            <PrivateRoute exact path="/my-posts"
              component={MyPosts} >
            </PrivateRoute>
            <PrivateRoute exact path="/profile"
              component={Profile}>
            </PrivateRoute>
            <PrivateRoute exact path="/posts/:postId/details"
              component={SinglePost} >
            </PrivateRoute>
            <Route exact path="/notifications">
              <Notifications />
            </Route>
            <PrivateRoute exact path="/my-notifications"
              component={MyNotifications} >
            </PrivateRoute>
            <PrivateRoute exact path={["/posts/:id/edit", "/post-form"]}
              component={PostForm} >
            </PrivateRoute>
            <PrivateRoute exact path="/notification-form"
              component={NotificationForm}>
            </PrivateRoute>
            <Route exact path="/blog/home">
              <PostList/>
            </Route>
            <Route exact path="/">
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
