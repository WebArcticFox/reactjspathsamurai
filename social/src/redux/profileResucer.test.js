import profileReducer, {addPost, deletePost} from "./profileReducer";
import React from "react";

it('new post add', () =>{
    let action = addPost({postText:'Heeey'});

    let state = {
        profile: null,
        isFetching: false,
        postArray: [
            {
                postId: 1,
                postH1: 'My travel story',
                postText: 'Hi',
                likeCount: '28'
            },
            {
                postId: 2,
                postH1: 'My workout in Belarus',
                postText: 'It\'s my first post',
                likeCount: '13'
            }
        ],
        status: ''
    }
    // Action
    let newState = profileReducer(state,action);

    // Test
    expect(newState.postArray.length).toBe(3)
});


it('Test post test', () =>{
    let action = addPost({postText:'Heeey'});

    let state = {
        profile: null,
        isFetching: false,
        postArray: [
            {
                postId: 1,
                postH1: 'My travel story',
                postText: 'Hi',
                likeCount: '28'
            },
            {
                postId: 2,
                postH1: 'My workout in Belarus',
                postText: 'It\'s my first post',
                likeCount: '13'
            }
        ],
        status: ''
    }
    // Action
    let newState = profileReducer(state,action);

    // Test
    expect(newState.postArray[2].postText).toBe('Heeey')
});

it('After deleting length of message decrement', () => {
    let action = deletePost(1);

    let state = {
        profile: null,
        isFetching: false,
        postArray: [
            {
                postId: 1,
                postH1: 'My travel story',
                postText: 'Hi',
                likeCount: '28'
            },
            {
                postId: 2,
                postH1: 'My workout in Belarus',
                postText: 'It\'s my first post',
                likeCount: '13'
            }
        ],
        status: ''
    }
    // Action
    let newState = profileReducer(state,action);

    // Test
    expect(newState.postArray.length).toBe(1)
})

it('Don\' delete incorrect postId', () => {
    let action = deletePost(1000);

    let state = {
        profile: null,
        isFetching: false,
        postArray: [
            {
                postId: 1,
                postH1: 'My travel story',
                postText: 'Hi',
                likeCount: '28'
            },
            {
                postId: 2,
                postH1: 'My workout in Belarus',
                postText: 'It\'s my first post',
                likeCount: '13'
            }
        ],
        status: ''
    }
    // Action
    let newState = profileReducer(state,action);

    // Test
    expect(newState.postArray.length).toBe(2)
})