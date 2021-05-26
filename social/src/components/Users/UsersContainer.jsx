import React from "react";
import {followUser, getUsers, isFollowingChange, unFollowUser} from "../../redux/UserReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Prealoader/Preloader";

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : <Users
                    onPageChange={this.onPageChange}
                    users={this.props.users}
                    followUser={this.props.followUser}
                    unFollowUser={this.props.unFollowUser}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
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

export default connect(mapStateToProps,{followUser, unFollowUser, isFollowingChange, getUsers})(UsersContainer);