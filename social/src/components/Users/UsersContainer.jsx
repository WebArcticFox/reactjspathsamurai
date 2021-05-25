import React from "react";
import {
    follow,
    isFetchingChange,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unFollow
} from "../../redux/UserReducer";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Prealoader/Preloader";

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.isFetchingChange(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.isFetchingChange(false)
        })
    }

    onPageChange = (pageNumber) => {
        this.props.isFetchingChange(true);
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(response => {
            this.props.setUsers(response.data.items)
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
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps,{follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, isFetchingChange})(UsersContainer);