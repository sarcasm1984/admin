import Home from '../components/home';
import Login from '../components/login';
import {Route, Routes} from 'react-router-dom';

let Body = () => {
    const element = (
      <div className="flex-grow-1 overflow-auto mb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    );
    return element;
  }
  
  export default Body;