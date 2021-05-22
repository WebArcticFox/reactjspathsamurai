const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postArray: [
        {
            postId: 1,
            postH1: 'My travel story',
            postText: 'Hi',
            likeCount: '28'
        },
        {
            postId: 1,
            postH1: 'My workout in Belarus',
            postText: 'It\'s my first post',
            likeCount: '13'
        }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    let copyState = {}
    switch(action.type) {
        case ADD_POST:
            copyState = {
                ...state,
                postArray: [...state.postArray]
            }
            let newPost = {
                postId: 5,
                postH1: 'Test',
                postText: state.newPostText,
                likeCount: 0
            }
            copyState.postArray.push(newPost)
            copyState.newPostText = '';
            return copyState;
        case UPDATE_NEW_POST_TEXT:
            copyState = {...state}
            copyState.newPostText = action.newPostText
            return copyState;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text})

export default profileReducer;