import OffCanvas from './offcanvas';
import './header.css';

let Header = () => {

    const element = (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div className="container">
                <a className="navbar-brand" href="/">BookOne</a>
                <button type="button" className="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <OffCanvas/>
            </div>
        </nav>
    );
    return element;
    
}

export default Header;