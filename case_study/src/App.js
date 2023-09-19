import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import ForgotPassword from './pages/ForgotPassword';
import Order from './pages/Order';
import Show from './pages/Show';
import CheckOut from './pages/CheckOut';
import Category_home from './components/Category_home';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/product/:id" element={<Show />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/category" element={<Category_home />}></Route>
      </Routes>
  );
}

export default App;