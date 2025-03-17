import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import { Toaster } from "sonner"; // Toast notifications

import "./index.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import SignIn from "./Pages/Authentication/SignIn/SignIn";
import SignUp from "./Pages/Authentication/SignUp/SignUp";
import Menu from "./Pages/Menu/Menu";
import ReservationForm from "./Pages/Reservations/ReservationForm";
import Summary from "./Pages/Summary/Summary";
import Contact from "./Pages/Contact/Contact";
import Receipt from "./Pages/Reservations/Receipt";
import DashBoard from "./Pages/Authentication/Admin/DashBoard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Toaster position="top-right" richColors />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />

          {/* Protected Routes for authenticated users */}
          <Route
            path="/menu"
            element={
              <ProtectedRoute allowedRoles={["user", "admin"]}>
                <Menu />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reservation"
            element={
              <ProtectedRoute allowedRoles={["user", "admin"]}>
                <ReservationForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/summary"
            element={
              <ProtectedRoute allowedRoles={["user", "admin"]}>
                <Summary />
              </ProtectedRoute>
            }
          />
          <Route
            path="/receipt/:paymentId"
            element={
              <ProtectedRoute allowedRoles={["user", "admin"]}>
                <Receipt />
              </ProtectedRoute>
            }
          />

          {/* Protected Admin Route */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <DashBoard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
