import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import DevicesIcon from "@mui/icons-material/DeveloperBoard";
import CpuIcon from "@mui/icons-material/Memory";
import NetworkIcon from "@mui/icons-material/Public";
import CapacityDonut from "./CapacityDonut";

type Props = {
  title: string;
  color: string;
  instancesUsed: number;
  instancesTotal: number;
  coresUsed: number;
  coresTotal: number;
  internet: boolean;
  onClick: () => void;
};

export default function ProjectCard({
  title,
  color,
  instancesUsed,
  instancesTotal,
  coresUsed,
  coresTotal,
  internet,
  onClick,
}: Props) {
  const unusedCores = coresTotal - coresUsed;
  const unusedInstances = instancesTotal - instancesUsed;

  const cpuUsagePercent =
    coresTotal > 0 ? (coresUsed / coresTotal) * 100 : 0;

  return (
    <Card
      onClick={onClick}
      sx={{
        borderRadius: 3,
        cursor: "pointer",
        transition: "all 0.25s ease",
        backgroundColor: "#fff",
        boxShadow: "0 6px 24px rgba(0,0,0,0.05)",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 14px 40px rgba(0,0,0,0.08)",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {/* Top Row */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar
              sx={{
                width: 64,
                height: 64,
                borderRadius: 2,
                bgcolor: color,
                fontSize: 28,
                fontWeight: 600,
              }}
            >
              {title.charAt(0)}
            </Avatar>

            <Typography variant="h6" fontWeight={600}>
              {title}
            </Typography>
          </Box>

          {/* Donut */}
          <Box textAlign="center">
            <CapacityDonut value={cpuUsagePercent} />
            <Typography
              variant="caption"
              color="text.secondary"
              mt={1}
              display="block"
            >
              CPU Usage
            </Typography>
          </Box>
        </Box>

        {/* Details */}
        <Box display="flex" flexDirection="column" gap={1.5}>
          <Box display="flex" alignItems="center" gap={1.5}>
            <DevicesIcon fontSize="small" sx={{ color: "#7a7a7a" }} />
            <Typography>
              {instancesUsed} / {instancesTotal} Devices
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1.5}>
            <CpuIcon fontSize="small" sx={{ color: "#7a7a7a" }} />
            <Typography>
              {coresUsed} / {coresTotal} CPU Cores
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1.5}>
            <NetworkIcon fontSize="small" sx={{ color: "#7a7a7a" }} />
            <Typography>
              {internet ? "Internet Enabled" : "Private Network"}
            </Typography>
          </Box>
        </Box>

        {/* Bottom Info */}
        <Box
          mt={3}
          p={2}
          sx={{
            backgroundColor: "#f4f7fb",
            borderRadius: 2,
            border: "1px solid #e6edf7",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {unusedCores} unused CPU cores,
            <br />
            {unusedInstances} unused device slots
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
