import {createSelector} from "reselect";

//export const getUsersList = (state) => state.usersPage.users
export const getPageSize = (state) => state.usersPage.pageSize
export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount
export const getCurrentPage = (state) => state.usersPage.currentPage
export const getIsFetching = (state) => state.usersPage.isFetching
export const getFollowingInProgress = (state) => state.usersPage.followingInProgress

export const getUsersList = (state) => state.usersPage.users

export const getUsersListSelector = (state) => getUsersList(state).filter(user => true)

export const getUsersListSuperSelector = createSelector(getUsersList, (users) => {
    return users.filter(user=>true);
})