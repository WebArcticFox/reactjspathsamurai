import React from "react";
import Sidebar from "./Sidebar";
import StoreContext from "../../storeContext";

const SidebarContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    return (
                        <Sidebar friendList={state.sideBar.friends} />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default SidebarContainer;