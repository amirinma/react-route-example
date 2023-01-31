import './App.css';
import {Link, Route, Routes} from "react-router-dom"
import Home from './Home';
import Product from './Product';
import About from './About';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/product'>Products</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
