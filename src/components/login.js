import './login.css';

let Login = () => {

    const element = (
        <div className="container">
        <div className="row row-cols-1 row-cols-md-2">
            <div className="col gy-4">
                <div className="card h-100">
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
                        <div className="row">
                            <div className="col-6 anchor-image">
                            <a href="/#"><h1><i className="bi bi-google"></i></h1></a>
                            </div>
                            <div className="col-6 anchor-image">
                            <a href="/#"><h1><i className="bi bi-facebook"></i></h1></a>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button type="button" className="btn btn-primary btn-sm">Sign In</button>
                        <button type="button" className="btn btn-outline-secondary btn-sm">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col gy-4">
                <div className="card h-100">
                    <div className="card-header">
                        <h5 className="card-title">Sign Up</h5>
                        <p className="card-text">Please enter the details asked below.</p>
                    </div>
                    <div class="card-body">
                        <div className="form-floating">
                        <textarea className="form-control" placeholder="Enter Full Name" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Full Name</label>
                        </div>
                        <br />
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
                        <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Re-Enter Password" />
                        <label for="floatingPassword">Re-Enter Password</label>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button type="button" className="btn btn-primary btn-sm">Sign Up</button>
                        <button type="button" className="btn btn-outline-secondary btn-sm">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );

    return element;
}

export default Login;