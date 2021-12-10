import OffcanvasOutlineSmallport from './OffcanvasOutlineSmallport';
import OffcanvasOutlineLargeport from './OffcanvasOutlineLargeport';
import './header.css';

let Header = () => {
    
    let vp_width = window.innerWidth;

    const element = (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div className="container">
                <a className="navbar-brand" href="/#">SwipeMore</a>
                <button type="button" className="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                     <span className="navbar-toggler-icon"></span>
                </button>
                {(vp_width > 600) ? (<OffcanvasOutlineLargeport />) : (<OffcanvasOutlineSmallport />)}
            </div>
        </nav>
    );
    return element;
    
}

export default Header;