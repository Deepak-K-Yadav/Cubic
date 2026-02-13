import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import LeftNavLayout from "./layout/LeftNavLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import AddDevice from "./pages/devices";
import ListDevice from "./pages/viewDevice"


import "./App.css";
import Admin from "./pages/LeftSidebarPages/Admin";
import Hardware from "./pages/LeftSidebarPages/Hardware";
import Lab from "./pages/LeftSidebarPages/Lab";
import Network from "./pages/LeftSidebarPages/Network";

export default function App() {
  return (
    <Routes>
      {/* First Layout */}
      {/* <Route path="/" element={<DashboardLayout />}> */}
      <Route path="/" element={<LeftNavLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="devices" element={<AddDevice />} />
            <Route path="admin" element={<Admin />} />
         <Route path="network" element={<Network />} />
         <Route path="hardware" element={<Hardware />} />
           <Route path="lab" element={<Lab />} /> 
      </Route>

      {/* Second Layout with Left Nav */}
      <Route path="/view" element={<LeftNavLayout />}>
        <Route index element={<ListDevice />} />
      </Route>
    </Routes>
  );
}
