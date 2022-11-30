import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import POSPage from './pages/POSPage';
import ProductInput from './pages/product/productInput';
import ProductList from './pages/productList/productList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/pos" element={<POSPage/>} />
        <Route path="/productinput" element={<ProductInput/>} />
        <Route path='/productlist' element={<ProductList/>} />
      </Routes>
    </Router>
  );
}

export default App;