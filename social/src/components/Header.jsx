import React from "react";

const Header = () => {
    return (
        <header className="header" id="site-header">
            <div className="container">
                <div className="page-title">
                    <h6>Profile Page</h6>
                </div>


                <div className="author-page author vcard inline-items more">
                    <a href="/profile" className="author-name fn">
                        <div className="author-title">
                            Alex
                        </div>
                        <span className="author-subtitle">REACT COWBOY</span>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;