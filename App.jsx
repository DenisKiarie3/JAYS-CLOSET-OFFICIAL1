import Header from "./components/Header.jsx"
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx"; // ✅ Import Login page
import Signup from "./pages/Signup.jsx";
export default function App() {
    return(
        <>
            <Header/>
            <Routes>
                <Route path="/login" element={<Login />} /> {/* ✅ Login Route */}
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
    )
}