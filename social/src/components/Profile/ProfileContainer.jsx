import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import Preloader from "../common/Prealoader/Preloader";
import {getProfile, getStatus, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId? this.props.match.params.userId: this.props.currentUserId
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render () {
        return (
            <>
            {this.props.isFetching ? <Preloader /> : <Profile {...this.props} />}
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
    connect(mapStateToProps,{getProfile,getStatus,updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);