import React from "react";
import { Box, IconButton, Tooltip, Avatar } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import WifiIcon from "@mui/icons-material/Wifi";
import MemoryIcon from "@mui/icons-material/Memory";
import ScienceIcon from "@mui/icons-material/Science";
import { NavLink } from "react-router-dom";

const navItems = [
  { icon: <LinkIcon />, path: "/admin" },
  { icon: <WifiIcon />, path: "/admin/network" },
  { icon: <MemoryIcon />, path: "/admin/hardware" },
  { icon: <ScienceIcon />, path: "/admin/lab" },
];

export default function LeftSidebar() {
  return (
    <Box
      sx={{
        width: 80,
        height: "100vh",
        backgroundColor: "#f4f7fb",
        borderRight: "1px solid #e0e6ed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 2,
      }}
    >
      {/* Logo / Avatar */}
      <Avatar
        sx={{
          bgcolor: "#0d3b66",
          width: 48,
          height: 48,
          mb: 4,
          fontWeight: 600,
        }}
      >
        D
      </Avatar>

      {/* Navigation Icons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          alignItems: "center",
        }}
      >
        {navItems.map((item, index) => (
          <Tooltip title={item.path} placement="right" key={index}>
            <IconButton
              component={NavLink}
              to={item.path}
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                color: "#475569",
                "&.active": {
                  backgroundColor: "#0d3b66",
                  color: "#fff",
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
