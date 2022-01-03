import OffCanvasBody from "./OffCanvasBody";

let OffcanvasOutlineLargeport = () => {
    const element = (
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <OffCanvasBody/>
        </div>
    );

    return element;
}

export default OffcanvasOutlineLargeport;