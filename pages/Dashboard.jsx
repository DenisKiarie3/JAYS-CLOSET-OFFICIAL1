// pages/Dashboard.jsx
import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jays_token");

    fetch("https://jays-closet-official1-backend.onrender.com/api/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`, // ✅ Send token
      },
    })
      .then((res) => res.json())
      .then((data) => setDashboardData(data))
      .catch((err) => console.error("Error fetching dashboard:", err));
  }, []);

  return (
    <div className="p-4 text-xl font-bold text-green-700">
      {dashboardData ? (
        <>
          {dashboardData.message}
          <br />
          <span className="text-base text-gray-700">
            Logged in as: {dashboardData.user.name} ({dashboardData.user.email})
          </span>
        </>
      ) : (
        "Loading dashboard..."
      )}
    </div>
  );
}
