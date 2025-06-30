import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Tools from './pages/Tools'
import KnowledgeCenter from './pages/KnowledgeCenter'
import InvestorEducation from './pages/InvestorEducation'
import Products from  './pages/Products'
import Contact from './pages/Contact';
import Downloads from './pages/Downloads';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin'
import InvestorDashboard from './pages/InvestorDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import OTPVerify from './pages/OTPVerify';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedAdminRoute from './components/ProtectedAdminRoute';
import AddClient from './pages/AddClient';
import FAQ from './pages/FAQ';
import MutualFunds from './pages/MutualFunds';
import Insurance from './pages/Insurance';
import FDsAndBonds from './pages/FDsAndBonds';;

function App() {
  const isVerified = localStorage.getItem('isVerified') === 'true';
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/KnowledgeCenter/tools" element={<Tools />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/KnowledgeCenter" element={<KnowledgeCenter />} />
        <Route path="/KnowledgeCenter/investor-education" element={<InvestorEducation />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/downloads' element={<Downloads />} />
        <Route path="/products/mutual-funds" element={<MutualFunds />} />
        <Route path="/products/insurance" element={<Insurance />} />
        <Route path="/products/fdsandbonds" element={<FDsAndBonds />} />

        <Route
          path="/InvestorDashboard"
          element={
            <ProtectedRoute>
              <InvestorDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/add-client"
          element={
            <ProtectedAdminRoute>
              <AddClient />
            </ProtectedAdminRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

