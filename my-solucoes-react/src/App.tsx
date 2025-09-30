
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainSite from './components/MainSite';
import Admin from './components/Admin/Admin';
import AdminHome from './components/Admin/AdminHome';
import UserManagement from './components/Admin/UserManagement';
import CustomerRegistration from './components/Admin/CustomerRegistration';
import Nfse from './components/Admin/Nfse';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminHome />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="customer-registration" element={<CustomerRegistration />} />
          <Route path="nfse" element={<Nfse />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
