import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import LeftNavLayout from "./layout/LeftNavLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import AddDevice from "./pages/devices";
import ListDevice from "./pages/viewDevice";

import "./App.css";

export default function App() {
  return (
    <Routes>
      {/* First Layout */}
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="devices" element={<AddDevice />} />
      </Route>

      {/* Second Layout with Left Nav */}
      <Route path="/view" element={<LeftNavLayout />}>
        <Route path="/view" index element={<ListDevice />} />

      </Route>
    </Routes>
  );
}
