import OffCanvas from './offcanvas';
import './header.css';
// import { useContext } from 'react';
// import { authStore } from '../store/authStore';
// import {setState} from '../store/actions';
import LoginService from '../backend/loginservice';

let Header = () => {
    let state = LoginService.fetch();
    // let auth = useContext(authStore);
    // const {adispatch} = auth;
    // adispatch({type:setState, customstate:state});
    // console.log(auth.state);

    const element = (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div className="container">
                <a className="navbar-brand" href="/">BookOne</a>
                {(state.loggedIn === 'true') && (<><button type="button" className="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <OffCanvas/></>)}
            </div>
        </nav>
    );
    return element;
    
}

export default Header;