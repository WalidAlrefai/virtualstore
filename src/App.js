import './App.scss';
import { Routes, Route } from "react-router-dom";
import Header from './components/header';
import Store from './components/store';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Store />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
