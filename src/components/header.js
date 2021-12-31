import OffcanvasOutlineSmallport from './OffcanvasOutlineSmallport';
import OffcanvasOutlineLargeport from './OffcanvasOutlineLargeport';
import useWindowSize from '../common/useWindowSize';
import './header.css';

let Header = () => {
    
    const [vp_width] = useWindowSize();

    const element = (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div className="container">
                {(vp_width > 800) ? (
                    <>
                    <button type="button" className="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="/#">SwipeMore</a>
                    <OffcanvasOutlineLargeport />
                    </>
                    ) : (
                    <>
                    <a className="navbar-brand" href="/#">SwipeMore</a>
                    <button type="button" className="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <OffcanvasOutlineSmallport />
                    </>
                )}
            </div>
        </nav>
    );
    return element;
    
}

export default Header;