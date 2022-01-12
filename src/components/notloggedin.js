import React from "react";
import {Link} from "react-router-dom";

let NotLoggedIn = () => {
    
    const element = (
        <div className="page-wrap d-flex flex-row align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <span className="display-1 d-block">You are not signed in!</span>
                        <div className="mb-4 lead">Please login with your credentials to view the page you requested for.</div>
                        <Link to="/">To sign in click here</Link>
                    </div>
                </div>
            </div>
        </div>
    )
    return element;

}

export default NotLoggedIn;

