import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../slices/postSlice'
import userReducer from '../slices/userSlice'
import notificationReducer from '../slices/notificationSlice'

export const store = configureStore({
  reducer: {
    posts: postReducer,
    user: userReducer,
    notifications: notificationReducer
  },
});
