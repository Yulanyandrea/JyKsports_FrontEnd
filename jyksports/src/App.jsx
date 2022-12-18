import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import profile from './assets/profile1.jpg';
import LogIn from './pages/LogIn/LogIn';
import Products from './pages/Products/Products';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register image={profile} />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/products" element={<Products />} />
      </Routes>

    </div>
  );
};

export default App;
