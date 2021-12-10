let OffCanvasBody = () => {
    const element = (
        <div>
            <div className="offcanvas-header navbar-dark bg-dark shadow">
                <h5 className="offcanvas-title navbar-brand" id="offcanvasWithBothOptionsLabel">SwipeMore</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <a className="nav-link" href="/"><i className="bi bi-house-fill"></i> Home</a>
                <a className="nav-link" href="/#"><i className="bi bi-ui-checks"></i> Transactions</a>
                <a className="nav-link" href="/#"><i className="bi bi-inboxes-fill"></i> Approvals</a>
                <a className="nav-link" href="/#"><i className="bi bi-wallet-fill"></i> Invoices</a>
                <a className="nav-link" href="/#"><i className="bi bi-person-check-fill"></i> Change Password</a>
                <a className="nav-link" href="/#"><i className="bi bi-people-fill"></i> Permissions</a>
                <a className="nav-link" href="/#"><i className="bi bi-box-arrow-right"></i> Logout</a>
            </div>
        </div>
    );
    return element;
}

export default OffCanvasBody;