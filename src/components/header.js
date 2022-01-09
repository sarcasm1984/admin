import OffCanvas from './offcanvas';
import './header.css';
import { useContext, useEffect } from 'react';
import { authStore } from '../store/authStore';
import {fetch} from '../store/actions';
import {Link} from "react-router-dom";

let Header = () => {
    let auth = useContext(authStore);

    useEffect(() => {
        const {dispatch} = auth;
        dispatch({type:fetch});
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const element = (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div className="container">
                <Link className="navbar-brand" to="/">BookOne</Link>
                {(auth.state.loggedIn === 'true') && (<><button type="button" className="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <OffCanvas/></>)}
            </div>
        </nav>
    );
    return element;
    
}

export default Header;