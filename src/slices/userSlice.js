import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: {
        userId: '',
        isAuthenticated: false,
        username: '',
        email: '',
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

export const { saveUser } = userSlice.actions
export const selectUserData = state => state.user.userData
export default userSlice.reducer