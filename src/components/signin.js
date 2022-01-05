import './signin.css';

let Signin = () => {

    const passwordShowHide = () => {
        var x = document.getElementById("floatingPassword");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    const element = (
        <div className="page-wrap d-flex flex-row align-items-center">
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-6 gy-4">
                <div className="card mx-auto h-100">
                    <div className="card-header">
                        <h5 className="card-title">Sign In</h5>
                        <p className="card-text">Please enter you email address and password.</p>
                    </div>
                    <div className="card-body">
                        <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInputValue" placeholder="abc@example.com" value="test@example.com" />
                        <label for="floatingInputValue">Email Address</label>
                        </div>
                        <br />
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <br />
                        <div className="form-check" onClick={passwordShowHide}>
                        <input type="checkbox" value="showhide" id="showhide" className="form-check-input"/>
                        <label for="showhide" className="form-check-label">Show password</label>
                        </div>
                        <br />
                    </div>
                    <div className="card-footer">
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <a href="/signup">Not an user?</a>
                        <button type="button" className="btn btn-primary btn-sm">Sign In</button>
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
}

export default Signin;