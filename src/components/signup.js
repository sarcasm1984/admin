import {Link} from "react-router-dom";

let Signup = () => {
    const element = (
    <div className="page-wrap d-flex flex-row align-items-center">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-8 gy-4">
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
                        <input type="text" className="form-control" id="floatingPassword" placeholder="Re-Enter Password" />
                        <label for="floatingPassword">Re-Enter Password</label>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                        <span className="card-text">Already have an account? <Link to="/">Sign In</Link></span>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button type="button" className="btn btn-primary btn-sm">Sign Up</button>
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

export default Signup;