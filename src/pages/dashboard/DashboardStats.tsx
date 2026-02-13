import * as React from "react";
import { Box, Typography, Paper, Avatar, Grid } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DevicesIcon from "@mui/icons-material/Devices";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

type StatCardProps = {
  title: string;
  value: string;
  subtitle?: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
};

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  iconBg,
  iconColor,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 2,
        height: "100%",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: `
      inset 0px 0px 87px #d2efff,
      0px 0px 6px rgba(0, 0, 0, 0.13)
    `,
        borderRadius: "10px",
       
      }}
    >
      <Avatar
        sx={{
          width: 48,
          height: 48,
          bgcolor: iconBg,
          color: iconColor,
        }}
      >
        {icon}
      </Avatar>

      <Box>
        <Typography variant="H4" fontWeight={600}>
          {title}
        </Typography>

        <Typography variant="body2" fontWeight={500}>
          {value}
        </Typography>

        {subtitle && (
          <Typography variant="caption" color="text.secondary">
            {subtitle}
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default function DashboardStats() {
  return (
    <Box sx={{ width: "100%", mt: 4, px: 3 }}>
      <Grid container spacing={3}>
        <Grid size={3}>
          <StatCard
            title="Projects"
            value="165 projects"
            icon={<FolderIcon />}
            iconBg="#E0F2FE"
            iconColor="#2563EB"
          />
        </Grid>

        <Grid size={3}>
          <StatCard
            title="Devices"
            value="6"
            subtitle="Running out of 165 Devices"
            icon={<DevicesIcon />}
            iconBg="#DCFCE7"
            iconColor="#16A34A"
          />
        </Grid>

        <Grid size={3}>
          <StatCard
            title="31 / 80 Cores"
            value="Core Usage"
            icon={<DonutLargeIcon />}
            iconBg="#DBEAFE"
            iconColor="#3B82F6"
          />
        </Grid>

        <Grid size={3}>
          <StatCard
            title="$1.98 / hr"
            value="Core Trend"
            icon={<TrendingUpIcon />}
            iconBg="#FEF3C7"
            iconColor="#F59E0B"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
