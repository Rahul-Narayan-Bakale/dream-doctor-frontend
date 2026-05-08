import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// Import our pages
import Home from './pages/Home';
import AllUniversities from './pages/AllUniversities';
import UniversityDetails from './pages/UniversityDetails';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Apply from './pages/Apply';
import FreeConsultancy from './pages/FreeConsultancy';

function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      {/* If you have a Navbar, put it here so it shows on EVERY page */}
      
      <Routes>
        {/* If the URL is '/', show the Home page */}
        <Route path="/" element={<Home />} />
        
        {/* If the URL is '/universities', show the All Universities grid */}
        <Route path="/universities" element={<AllUniversities />} />
        
        {/* If the URL is '/university/12345', show that specific university */}
        <Route path="/university/:id" element={<UniversityDetails />} />

        {/* If the URL is '/admin', show the Admin Dashboard */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* If the URL is '/login', show the Login page */}
        <Route path="/login" element={<Login />} />

        {/* If the URL is '/apply', show the Application Form page */}
        <Route path="/apply" element={<Apply />} />

        {/* If the URL is '/free-consultancy', show the Free Consultancy page */}
        <Route path="/free-consultancy" element={<FreeConsultancy />} /> 
      </Routes>

      {/* If you have a Footer, put it here so it shows on EVERY page */}
    </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;