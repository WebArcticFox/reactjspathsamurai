import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import Preloader from "../common/Prealoader/Preloader";
import {getProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId? this.props.match.params.userId: this.props.currentUserId
        this.props.getProfile(userId)
    }

    render () {
        return (
            <>
            {this.props.isFetching ? <Preloader /> : <Profile {...this.props} profile={this.props.profile} />}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        currentUserId: state.auth.id
    }
}



export default connect(mapStateToProps,{getProfile})(withRouter(ProfileContainer));