import Header from '../src/components/header';
import Body from '../src/components/body';
import Footer from '../src/components/footer';

let App = () => {
  const element = (
    <div className="d-flex flex-column overflow-hidden min-vh-100 vh-100">
      <Header/>
      <Body />
      <Footer/>
    </div>
  );
  return element;
}

export default App;
