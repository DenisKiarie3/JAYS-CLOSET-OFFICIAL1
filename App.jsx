import Header from "./components/Header.jsx"
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx"; // ✅ Import Login page
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx"; // ✅ Import
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
export default function App() {
    return(
        <>
            <Header/>
            <Routes>
                <Route path="/login" element={<Login />} /> {/* ✅ Login Route */}
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password/:token" element={<ResetPassword />} />
                {/* ✅ Protected Route Example */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                        <Dashboard />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </>
    )
}