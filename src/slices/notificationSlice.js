import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    notificationList: []
}

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        saveNotification: (state, action) => {
            state.notificationList.push(action.payload)
        },
        fetchNotifications: (state, action) => {
            state.notificationList = action.payload
        },
        deleteNotification: (state, action) => {
            state.notificationList = state.notificationList.filter((item) => item.id !== action.payload)
        },
    }
});


export const fetchUserNotifications = (state, uid) => {
    return state.notifications.notificationList.filter((item) => item.sender === uid)
}

export const { saveNotification, fetchNotifications, deleteNotification } = notificationSlice.actions
export const selectNotificationList = state => state.notifications.notificationList
export default notificationSlice.reducer