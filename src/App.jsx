import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import profile from './assets/profile1.jpg';
import LogIn from './pages/LogIn/LogIn';
import Products from './pages/Products/Products';
import Menu from './pages/Menu/Menu';
import QR from './pages/Qr/Qr';
import QrRead from './components/QrRead/QrRead';
// import Filter from './components/Filter/Filter';

const App = () => {
  return (
    <div className="App">
      {/* <Filter /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register image={profile} />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/products_DB" element={<Products />} />
        <Route path="/home" element={<Menu />} />
        <Route path="/generate_qr" element={<QR />} />
        <Route path="/readQrCode" element={<QrRead />} />
      </Routes>

    </div>
  );
};

export default App;
