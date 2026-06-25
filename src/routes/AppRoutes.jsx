import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ResidentLayout from "../layouts/ResidentLayout";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Maintenance from "../pages/Maintenance";
import Visitors from "../pages/Visitors";
import Documents from "../pages/Documents";
import Complaints from "../pages/Complaints";
import Notifications from "../pages/Notifications";
import Amenities from "../pages/Amenities";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Redirect root URL to Dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Resident Layout */}
        <Route element={<ResidentLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/visitors" element={<Visitors />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/settings" element={<Settings />} />

        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;