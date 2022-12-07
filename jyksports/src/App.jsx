import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import profile from './assets/profile1.jpg';
import LogIn from './components/LogIn/LogIn';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Register image={profile} />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>

    </div>
  );
};

export default App;
