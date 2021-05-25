import React from "react";
import {
    follow,
    isFetchingChange, isFollowingChange,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unFollow
} from "../../redux/UserReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Prealoader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.isFetchingChange(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
            this.props.isFetchingChange(false)
        })
    }

    onPageChange = (pageNumber) => {
        this.props.isFetchingChange(true);
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.isFetchingChange(false)
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : <Users
                    onPageChange={this.onPageChange}
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    isFollowingChange={this.props.isFollowingChange}
                    followingInProgress={this.props.followingInProgress}
                />}
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps,{follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, isFetchingChange, isFollowingChange})(UsersContainer);