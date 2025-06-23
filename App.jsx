import Header from "./components/Header.jsx"
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx"; // ✅ Import Login page
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx"; // ✅ Import
export default function App() {
    return(
        <>
            <Header/>
            <Routes>
                <Route path="/login" element={<Login />} /> {/* ✅ Login Route */}
                <Route path="/signup" element={<Signup />} />
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