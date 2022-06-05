import './App.scss';
import { Routes, Route } from "react-router-dom";
import {connect} from 'react-redux'
import Header from './components/header';
import Store from './components/store';
import Footer from './components/footer';
import SimpleCart from './components/cart/simpleCart';
import Cart from './components/cart/cart';
import {useEffect} from 'react'
import {getCatagories} from './store/action'

function App(props) {
  useEffect(() => {
    props.getCatagories();
    // eslint-disable-next-line
  },[]
)
  return (
    <div className="App">
      {/* {props.getCatagories()} */}
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
const mapStateToProps = (state) => {
  return {
    products: state.products,
    // activeCategory: state.activeCategory,
  };
}
let mapDispatchToProps={
  getCatagories,
}

export default connect(mapStateToProps,mapDispatchToProps)(App);