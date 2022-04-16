import './App.css'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Product/Products";
import NavigationBar from "./components/NavigationBar"
import ShoppingCart from "./components/ShoppingCart"
import Login from "./components/Login";
import ProductDetail from './components/Product/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavigationBar/>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
