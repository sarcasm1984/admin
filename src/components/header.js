import './header.css'

let Header = () => {
    
    const element = (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/#">SwipeMore</a>
                <button type="button" className="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header navbar-dark bg-dark">
                    <h5 className="offcanvas-title navbar-brand" id="offcanvasWithBothOptionsLabel">SwipeMore</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <a className="nav-link" href="/#"><i className="bi bi-house-fill"></i> Home</a>
                    <a className="nav-link" href="/#"><i className="bi bi-ui-checks"></i> Transactions</a>
                    <a className="nav-link" href="/#"><i className="bi bi-inboxes-fill"></i> Approvals</a>
                    <a className="nav-link" href="/#"><i className="bi bi-wallet-fill"></i> Invoices</a>
                    <a className="nav-link" href="/#"><i className="bi bi-person-check-fill"></i> Change Password</a>
                    <a className="nav-link" href="/#"><i className="bi bi-people-fill"></i> Permissions</a>
                    <a className="nav-link" href="/#"><i className="bi bi-box-arrow-right"></i> Logout</a>
                </div>
                </div>
            </div>
        </nav>
    );
    return element;
    
}

export default Header;