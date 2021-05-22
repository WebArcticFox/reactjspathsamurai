let initialState = {
    friends: [
        {
            userId: 1,
            userImage: 'https://st.fl.ru/users/na/nadezhdaNade/foto/f_1455b7479a7e07ac.jpg',
            userName: 'Diana'
        },
        {
            userId: 2,
            userImage: 'https://st.fl.ru/users/ka/kate-seo/foto/f_3726045b60cd904f.jpeg',
            userName: 'Julia'
        },
        {
            userId: 3,
            userImage: 'https://st.fl.ru/users/Mi/Mihail_Kachan/foto/f_8095d9e1685c17b9.jpg',
            userName: 'Michail'
        }
    ]
}

const sideBarReducer = (state = initialState, action) => {
    return state
}

export default sideBarReducer;