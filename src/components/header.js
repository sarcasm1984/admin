import './header.css'

let Header = () => {
    
    const element = (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">SwipeMore</a>
                <button type="button" class="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">SwipeMore</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <a class="nav-link" href="/#"><i class="bi bi-house-fill"></i> Home</a>
                    <a class="nav-link" href="/#"><i class="bi bi-ui-checks"></i> Transactions</a>
                    <a class="nav-link" href="/#"><i class="bi bi-inboxes-fill"></i> Approvals</a>
                    <a class="nav-link" href="/#"><i class="bi bi-wallet-fill"></i> Invoices</a>
                    <a class="nav-link" href="/#"><i class="bi bi-person-check-fill"></i> Change Password</a>
                    <a class="nav-link" href="/#"><i class="bi bi-people-fill"></i> Permissions</a>
                    <a class="nav-link" href="/#"><i class="bi bi-box-arrow-right"></i> Logout</a>
                </div>
                </div>
            </div>
        </nav>
    );
    return element;
    
}

export default Header;