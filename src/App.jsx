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
import EditProfile from './pages/EditProfile/EditProfile';
import NotAllow from './pages/NotAllow/NotAllow';
import AuthProducts from './components/CreateProductsAuth/AuthProducts';
import UsersAuth from './components/UsersAuth/UsersAuth';
import EmployeeAuth from './components/EmployeeAuth/EmployeeAuth';
import DetailEmployee from './pages/DetailEmployee/DetailEmployee';

const App = () => {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register image1={profile} />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/products_DB" element={<Products />} />
        <Route path="/home" element={<Menu />} />
        <Route path="/generate_qr" element={<QR />} />
        <Route path="/readQrCode" element={<QrRead />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route
          path="/viewEmployee"
          element={(
            <UsersAuth roles="ADMIN">
              <NotAllow />
            </UsersAuth>
          )}
        />

        <Route
          path="/addEmployees"
          element={(
            <EmployeeAuth roles="ADMIN">
              <NotAllow />
            </EmployeeAuth>
          )}
        />

        <Route
          path="/notAllow"
          element={(
            <AuthProducts roles="ADMIN">
              <NotAllow />
            </AuthProducts>
          )}
        />
        <Route path="/employeeDetails/:userId" element={<DetailEmployee />} />
      </Routes>

    </div>
  );
};

export default App;
