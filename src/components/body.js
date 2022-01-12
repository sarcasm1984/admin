import Home from './home';
import Signin from './signin';
import Signup from './signup';
import Changepwd from './changepwd';
import Error from './error';
import Bookings from './bookings';
import Offerings from './offerings';
import Customers from './customers';
import Vendors from './vendors';
import NotLoggedIn from './notloggedin';
import {Route, Routes} from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { authStore } from '../store/authStore';
import {fetch} from '../store/actions';

let Body = () => {
    let auth = useContext(authStore);
    
    useEffect(() => {
      const {dispatch} = auth;
      dispatch({type:fetch});
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const element = (
        (auth.state.loggedIn === 'true') ?
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
            <Route path="/bookings" element={<NotLoggedIn />} />
            <Route path="/offerings" element={<NotLoggedIn />} />
            <Route path="/customers" element={<NotLoggedIn />} />
            <Route path="/vendors" element={<NotLoggedIn />} />
            <Route path="*" element = {<Error/>} />
          </Routes>
        </div>
        )
      );
    return element;
  }
  
  export default Body;