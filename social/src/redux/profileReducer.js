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
    let stateCopy = {}
    switch(action.type) {
        case ADD_POST:
            stateCopy = {
                ...state,
                postArray: [...state.postArray]
            }
            let newPost = {
                postId: 5,
                postH1: 'Test',
                postText: state.newPostText,
                likeCount: 0
            }
            stateCopy.postArray.push(newPost)
            stateCopy.newPostText = '';
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            stateCopy = {...state}
            stateCopy.newPostText = action.newPostText
            return stateCopy;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text})

export default profileReducer;