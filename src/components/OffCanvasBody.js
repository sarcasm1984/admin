let OffCanvasBody = () => {
    const element = (
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div className="offcanvas-header navbar-dark bg-dark shadow">
                <h5 className="offcanvas-title navbar-brand" id="offcanvasWithBothOptionsLabel">BookOne</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <a className="nav-link" href="/"><i className="bi bi-house-fill"></i> Home</a>
                <a className="nav-link" href="/#"><i className="bi bi-ui-checks"></i> Bookings</a>
                <a className="nav-link" href="/#"><i className="bi bi-people-fill"></i> Customers</a>
                <a className="nav-link" href="/#"><i className="bi bi-wallet-fill"></i> Vendors</a>
                <a className="nav-link" href="/changepwd"><i className="bi bi-person-check-fill"></i> Change Password</a>
                <a className="nav-link" href="/#"><i className="bi bi-box-arrow-right"></i> Logout</a>
            </div>
        </div>
    );
    return element;
}

export default OffCanvasBody;