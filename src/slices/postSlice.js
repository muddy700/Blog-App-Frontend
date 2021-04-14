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
            fetchPosts: (state, action) => {
                state.postList = action.payload
            },
        }
    });
    
  
export const fetchUserPosts = (state, uid) => {
        state.posts.postList.filter((post) => post.id === uid) }
  
export const getPostById = (state, postId) => {
    return state.posts.postList.find((post) => post.id === postId) }
        
export const { savePost, fetchPosts } = postSlice.actions
export const selectPostList = state => state.posts.postList
// export const selectUserPosts = state => state.posts.postList
export default postSlice.reducer