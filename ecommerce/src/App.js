import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Counter from './pages/Counter';
import Calculator from './pages/calculator';
import { BrowserRouter, Routes,Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/navbar/Header';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <BrowserRouter className="App">
      <Header/>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<AboutUs/>}/>
      </Routes>
     {/* <Dashboard /> */}
     {/* <Calculator /> */}
    </BrowserRouter>
  );
}

export default App;
