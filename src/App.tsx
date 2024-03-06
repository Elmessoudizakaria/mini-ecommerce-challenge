import { Home } from './containers/Home/Home';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './containers/Cart/Cart';

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Header />
          <div className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
