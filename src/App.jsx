import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./users/pages/Home";
import Books from "./users/pages/Books";
import Contact from "./users/pages/Contact";
import Profile from "./users/pages/Profile";
import View from "./users/pages/View";
import Auth from "./pages/Auth";
import Pnf from "./pages/Pnf";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminSettings from "./admin/pages/AdminSettings";
import AdminResources from "./admin/pages/AdminResources";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import PaymentSuccess from "./users/pages/PaymentSuccess";
import PaymentFail from "./users/pages/PaymentFail";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={isLoading ? <Preloader /> : <Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth insideRegisterRoute />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/books/:id" element={<View />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-fail" element={<PaymentFail />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/settings" element={<AdminSettings />} />
        <Route path="/resources" element={<AdminResources />} />

        <Route path="/*" element={<Pnf />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={2500} theme="colored" />
    </>
  );
}

export default App;
