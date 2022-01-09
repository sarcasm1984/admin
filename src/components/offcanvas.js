import { faHome, faTasks, faUserFriends, faTruck, faHands, faUnlockAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from 'react';
import { authStore } from '../store/authStore';
import {logout} from '../store/actions';
import {Link} from "react-router-dom";

let OffCanvas = () => {
    let auth = useContext(authStore);
    const {dispatch} = auth;

    const signOut = () => {
        dispatch({type:logout});
        var btn = document.getElementById("btnClose");
        btn.click();
    }

    const closeCanvas = () => {
        var btn = document.getElementById("btnClose");
        btn.click();
    }

    const element = (
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div className="offcanvas-header navbar-dark bg-dark shadow">
                <h5 className="offcanvas-title navbar-brand" id="offcanvasWithBothOptionsLabel">BookOne</h5>
                <button type="button" id="btnClose" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <Link className="nav-link" to="/" onClick={closeCanvas}><FontAwesomeIcon icon={faHome} /> Home</Link>
                <Link className="nav-link" to="/bookings" onClick={closeCanvas}><FontAwesomeIcon icon={faTasks} /> Bookings</Link>
                <Link className="nav-link" to="/customers" onClick={closeCanvas}><FontAwesomeIcon icon={faUserFriends} /> Customers</Link>
                <Link className="nav-link" to="/vendors" onClick={closeCanvas}><FontAwesomeIcon icon={faTruck} /> Vendors</Link>
                <Link className="nav-link" to="/offerings" onClick={closeCanvas}><FontAwesomeIcon icon={faHands} /> Offerings</Link>
                <Link className="nav-link" to="/changepwd" onClick={closeCanvas}><FontAwesomeIcon icon={faUnlockAlt} /> Change Password</Link>
                <Link className="nav-link" to="/" onClick={signOut}><FontAwesomeIcon icon={faSignOutAlt} /> Sign Out</Link>
            </div>
        </div>
    );
    return element;
}

export default OffCanvas;