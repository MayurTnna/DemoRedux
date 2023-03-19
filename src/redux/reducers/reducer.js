import * as types from '../constent'


const initialState = {
    posts: [],
    loading: false,
    error: null,
}


function reducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_POST_START:
            return {
                ...state,
                loading: true,
                // posts: action.payload
            }
        case types.FETCH_POST_SUCCESS:
            
            return {
                ...state,
               
                posts: action.payload,
                 loading: false,
            }
        case types.FETCH_POST_FAIL:
            return {
                ...state,
                loading: false,
                posts: action.payload
            }
        case types.USER_DELETE:
            let temp=[...state.posts]
            temp.splice(state.posts.findIndex(item=>item.id===action.payload),1)
            return{
                ...state,
                posts:temp,
                
            }


        case types.USER_EDIT:
            const changedata=state.posts.findIndex(item=>item.id===action.payload.id)
           state.posts[changedata].name = action.payload.name
           state.posts[changedata].email = action.payload.email
           state.posts[changedata].phone = action.payload.phone
           state.posts[changedata].website = action.payload.website
            return{
                ...state,
                posts:[...state.posts]
            }
        default:
            return state 

    }
}

export default reducer