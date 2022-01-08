import Header from '../src/components/header';
import Body from '../src/components/body';
import Footer from '../src/components/footer';
import {AuthProvider} from '../src/store/authStore';

let App = () => {
  const element = (
    <AuthProvider>
      <div className="d-flex flex-column overflow-hidden min-vh-100 vh-100">
        <Header/>
        <Body />
        <Footer/>
      </div>
    </AuthProvider>
  );
  return element;
}

export default App;
