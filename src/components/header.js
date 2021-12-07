let Header = () => {
    
    const element = (
        <nav className="navbar navbar-light bg-light static-top">
            <div className="container">
            <a className="navbar-brand mb-0 h1" href="/">SwipeMore</a>
            <ul className="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-coreui-toggle="dropdown" aria-expanded="false">
                    <i className="h5 bi bi-person-circle"></i>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/">Details</a>
                    <a class="dropdown-item" href="/">Change Password</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="/">Logout</a>
                </div>
                </li>
            </ul>
            </div>
        </nav>
    );
    return element;
    
}

export default Header;