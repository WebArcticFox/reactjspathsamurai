import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import Preloader from "../common/Prealoader/Preloader";
import {getProfile, getStatus, savePhoto, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    refreshProfile () {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.currentUserId
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }


    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.userId!==this.props.match.params.userId) {
            this.refreshProfile()
        }
    }

    render () {
        return (
            <>
            {this.props.isFetching ? <Preloader /> : <Profile {...this.props} savePhoto={this.props.savePhoto} isOwner={!this.props.match.params.userId} />}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        currentUserId: state.auth.id,
        status: state.profilePage.status
    }
}


export default compose(
    connect(mapStateToProps,{getProfile,getStatus,updateStatus,savePhoto}),
    withRouter
)(ProfileContainer);