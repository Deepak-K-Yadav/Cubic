
import {
  Box,
  IconButton,
  Tooltip,
  Avatar,
  //Typography,
  Divider,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import WifiIcon from "@mui/icons-material/Wifi";
import MemoryIcon from "@mui/icons-material/Memory";
import ScienceIcon from "@mui/icons-material/Science";
import { NavLink } from "react-router-dom";

const navItems = [
   {
    label: "Admin",
    icon: <LinkIcon />,
    path: "/admin",
    end: true, // exact match
  },
  {
    label: "Network",
    icon: <WifiIcon />,
    path: "/network",
  },
  {
    label: "Hardware",
    icon: <MemoryIcon />,
    path: "/hardware",
  },
  {
    label: "Lab",
    icon: <ScienceIcon />,
    path: "/lab",
  },
];

export default function LeftSidebar() {
  return (
    <Box
      sx={{
        width: 80,
        height: "100vh",
        backgroundColor: "#ffffff",
        borderRight: "1px solid #e2e8f0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 2,
        position: "sticky",
        top: 0,
      }}
    >
      {/* ==============================
            Dashboard Avatar (Clickable)
         ============================== */}
      <Tooltip title="Dashboard" placement="right" arrow>
        <Avatar
          component={NavLink}
          to="/"
          end
          sx={{
            width: 48,
            height: 48,
            mb: 4,
            fontWeight: 600,
            textDecoration: "none",
            bgcolor: "#0f172a",
            cursor: "pointer",
            transition: "all 0.2s ease",

            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            },

            "&.active": {
              outline: "3px solid #3b82f6",
            },
          }}
        >
          D
        </Avatar>
      </Tooltip>

      <Divider sx={{ width: "60%", mb: 3 }} />

      {/* ==============================
            Navigation Icons
         ============================== */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        {navItems.map((item) => (
          <Tooltip
            title={item.label}
            placement="right"
            arrow
            key={item.path}
          >
            <IconButton
              component={NavLink}
              to={item.path}
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                color: "#64748b",
                transition: "all 0.2s ease-in-out",

                "&:hover": {
                  backgroundColor: "#f1f5f9",
                  transform: "translateY(-2px)",
                },

                "&.active": {
                  backgroundColor: "#0f172a",
                  color: "#ffffff",
                  boxShadow: "0 4px 12px rgba(15,23,42,0.2)",
                },
              }}
            >
              {item.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
}

