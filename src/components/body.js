import Home from '../components/home';
import Signin from '../components/signin';
import Signup from '../components/signup';
import {Route, Routes} from 'react-router-dom';

let Body = () => {
    const element = (
      <div className="flex-grow-1 overflow-auto mb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    );
    return element;
  }
  
  export default Body;