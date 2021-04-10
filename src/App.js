import React from 'react';
import './App.css';
import {Navbar } from './components/navbar'
import {PostList } from './components/postList'
import {MyPosts } from './components/myPosts'
import {Notifications } from './components/notifications'
import {PageNotFound } from './components/pageNotFound'
import LoginPage from './components/loginPage';
import SignUpPage from './components/signUpPage';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="app-container">
          <Switch>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/signUp">
              <SignUpPage />
            </Route>
            <Route exact path="/myPosts">
              <Navbar />
              <MyPosts />
            </Route>
            <Route exact path="/notifications">
              <Navbar />
              <Notifications />
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
