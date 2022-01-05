let Changepwd = () => {

    const element = (
        <div className="page-wrap d-flex flex-row align-items-center">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-6 gy-4">
                <div className="card h-100">
                    <div className="card-header">
                        <h5 className="card-title">John Defoe</h5>
                        <p className="card-text">Please enter the details to change password</p>
                    </div>
                    <div class="card-body">
                        <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Old Password</label>
                        </div>
                        <br />
                        <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">New Password</label>
                        </div>
                        <br />
                        <div className="form-floating">
                        <input type="text" className="form-control" id="floatingPassword" placeholder="Re-Enter Password" />
                        <label for="floatingPassword">Re-Enter New Password</label>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button type="button" className="btn btn-primary btn-sm">Submit Changes</button>
                        <button type="button" className="btn btn-outline-secondary btn-sm">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );

    return element;
};

export default Changepwd;