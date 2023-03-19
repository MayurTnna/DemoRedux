import axios from 'axios'
import * as types from '../constent'

export const fetchpostart=()=>({
    type:types.FETCH_POST_START
})

export const fetchpostsuccess=(posts)=>({
    type:types.FETCH_POST_SUCCESS,
    payload:posts
})

export const fetchpostfail=(error)=>({
    type:types.FETCH_POST_FAIL,
    payload:error
})

export const deleteuser=(id)=>({
    type:types.USER_DELETE,
    payload:id
})

export const editeuser=(edit)=>({
    type:types.USER_EDIT,
    payload: edit
})

export function fetchposts(){
    return function(dispatch){
        dispatch(fetchpostart())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const posts = response.data;
            dispatch(fetchpostsuccess(posts))
        }).catch((error)=>{
            dispatch(fetchpostfail(error.message));
        })
      
    }
}