import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: {
        userId: localStorage.getItem('id'),
        isAuthenticated: localStorage.getItem('isLoggedIn'),
        username: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        token: localStorage.getItem('token')
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
            saveUser: (state, action) => {
                state.userData = action.payload
            },
    }
});

export const apiConfigurations = () => {
    return {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    }
}

export const { saveUser } = userSlice.actions
export const selectUserData = state => state.user.userData
export default userSlice.reducer