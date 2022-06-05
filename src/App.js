import './App.scss';
import { Routes, Route } from "react-router-dom";
import Header from './components/header';
import Store from './components/store';
import Footer from './components/footer';
import SimpleCart from './components/cart/simpleCart';
import Cart from './components/cart/cart';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="simpleCart">
        <SimpleCart />
      </div>
      <div className="content">
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/Cart" element={<Cart/>} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
