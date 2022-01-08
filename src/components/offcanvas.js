import { faHome, faTasks, faUserFriends, faTruck, faHands, faUnlockAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from 'react';
import { authStore } from '../store/authStore';
import {logout} from '../store/actions';
import LoginService from '../backend/loginservice';

let OffCanvas = () => {
    let auth = useContext(authStore);
    const {adispatch} = auth;

    const signOut = () => {
        adispatch({type:logout});
        LoginService.Logout();
    }

    const element = (
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div className="offcanvas-header navbar-dark bg-dark shadow">
                <h5 className="offcanvas-title navbar-brand" id="offcanvasWithBothOptionsLabel">BookOne</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <a className="nav-link" href="/"><FontAwesomeIcon icon={faHome} /> Home</a>
                <a className="nav-link" href="/bookings"><FontAwesomeIcon icon={faTasks} /> Bookings</a>
                <a className="nav-link" href="/customers"><FontAwesomeIcon icon={faUserFriends} /> Customers</a>
                <a className="nav-link" href="/vendors"><FontAwesomeIcon icon={faTruck} /> Vendors</a>
                <a className="nav-link" href="/offerings"><FontAwesomeIcon icon={faHands} /> Offerings</a>
                <a className="nav-link" href="/changepwd"><FontAwesomeIcon icon={faUnlockAlt} /> Change Password</a>
                <a className="nav-link" href="/" onClick={signOut}><FontAwesomeIcon icon={faSignOutAlt} /> Sign Out</a>
            </div>
        </div>
    );
    return element;
}

export default OffCanvas;