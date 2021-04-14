import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    postList: []
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
            savePost: (state, action) => {
                state.postList.push(action.payload)
            },
        postUpdated: (state, action) => {
            state.postList.map((post) => post.id === action.payload.id ?
                action.payload : post)
            },
            fetchPosts: (state, action) => {
                state.postList = action.payload
            },
            deletePost: (state, action) => {
                state.postList = state.postList.filter((post) => post.id !== action.payload)
            },
        }
    });
    
  
export const fetchUserPosts = (state, uid) => {
    return state.posts.postList.filter((post) => post.author === uid) }
  
export const getPostById = (state, pid) => {
    return state.posts.postList.find((post) => post.id === pid) }
        
export const { savePost, fetchPosts, postUpdated, deletePost } = postSlice.actions
export const selectPostList = state => state.posts.postList
// export const selectUserPosts = state => state.posts.postList
export default postSlice.reducer