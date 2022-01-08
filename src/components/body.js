import Home from './home';
import Signin from './signin';
import Signup from './signup';
import Changepwd from './changepwd';
import Error from './error';
import Bookings from './bookings';
import Offerings from './offerings';
import Customers from './customers';
import Vendors from './vendors';
import {Route, Routes} from 'react-router-dom';
// import { useContext } from 'react';
// import { authStore } from '../store/authStore';
// import {setState} from '../store/actions';
import LoginService from '../backend/loginservice';

let Body = () => {
    let state = LoginService.fetch();
    // let auth = useContext(authStore);
    // const {adispatch} = auth;
    // adispatch({type:setState, customstate:state});
    // console.log(auth.state);
    

    const element = (
        (state.loggedIn === 'true') ?
        (<div className="flex-grow-1 overflow-auto mb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/changepwd" element={<Changepwd />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="*" element = {<Error/>} />
          </Routes>
        </div>) :
        (<div className="flex-grow-1 overflow-auto mb-0">
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element = {<Error/>} />
          </Routes>
        </div>
        )
      );
    return element;
  }
  
  export default Body;