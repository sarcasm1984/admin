import OffCanvasBody from "./OffCanvasBody";

let OffcanvasOutlineSmallport = () => {
    const element = (
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <OffCanvasBody/>
        </div>
    );

    return element;
}

export default OffcanvasOutlineSmallport;