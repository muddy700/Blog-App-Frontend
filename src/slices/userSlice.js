import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: {
        userId: '',
        username: '',
        email: '',
        token: localStorage.getItem('token'),
        isAuthenticated: localStorage.getItem('isLoggedIn'),
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