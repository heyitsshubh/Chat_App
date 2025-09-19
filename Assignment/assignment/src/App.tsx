
import './App.css';
import { Routes, Route } from 'react-router-dom';
import WelcomeCard from './Components/start';
import Signup from './Components/signup';
import Login from './Components/login';
import AccountSettings from './Components/Account';
import { Toaster } from 'react-hot-toast';

function App() {


  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<WelcomeCard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<AccountSettings />} />
      </Routes>
    </>
  );
}

export default App
