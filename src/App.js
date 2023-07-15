import './app.scss';
import {Navbar, Footer} from "./layout";
import {Home, ContactUs, Shop} from "./module";


function App() {
  return (
    <div>
      <Navbar/>
      {/* <ContactUs/> */}
      <Shop/>
      <Footer/>
    </div>
  );
}

export default App;
