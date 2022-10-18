import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import {Route , Routes} from 'react-router-dom';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Alert from "./components/Alert";

function App() {
  
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/about" element= {<About/>} />
        </Routes>
      </div>
      <Alert/>
      <Footer/>
    </div>
  );
}

export default App;
