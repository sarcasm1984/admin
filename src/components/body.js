import Home from '../components/home';
import {Route, Routes} from 'react-router-dom';

let Body = () => {
    const element = (
      <div className="flex-grow-1 overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    );
    return element;
  }
  
  export default Body;