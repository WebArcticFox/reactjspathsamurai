import React from "react";
import Profile from "../Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import Preloader from "../../common/Prealoader/Preloader";
import {isFetchingChange, setUserProfile} from "../../../redux/profileReducer";


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.isFetchingChange(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/1256`).then(response => {
            this.props.setUserProfile(response.data);
            this.props.isFetchingChange(false);
        })
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
        postArray: state.profilePage.postArray,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching
    }
}

export default connect(mapStateToProps,{setUserProfile,isFetchingChange})(ProfileContainer);