import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Chip,
} from "@mui/material";
import DevicesIcon from "@mui/icons-material/DeveloperBoard";
import CpuIcon from "@mui/icons-material/Memory";
import NetworkIcon from "@mui/icons-material/Public";

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

  return (
    <Card
      onClick={onClick}
      sx={{
        borderRadius: 1,
        cursor: "pointer",
        transition: "all 0.25s ease",
        backgroundColor: "#fff",
        border: "1px solid #eef2f7",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 14px 40px rgba(0,0,0,0.08)",
        },
      }}
    >
      <CardContent sx={{ p: 2 }}>
        {/* Header */}
        <Box display="flex" alignItems="center" gap={2} mb={3}>
          <Avatar
            sx={{
              width: 56,
              height: 56,
              borderRadius: 2,
              bgcolor: color,
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            {title.charAt(0)}
          </Avatar>

          <Box>
            <Typography variant="h6" fontWeight={600}>
              {title}
            </Typography>

            <Chip
              size="small"
              label={internet ? "Internet Enabled" : "Private Network"}
              sx={{
                mt: 1,
                backgroundColor: internet ? "#e3f2fd" : "#f1f3f5",
                color: internet ? "#1565c0" : "#555",
                fontWeight: 500,
              }}
            />
          </Box>
        </Box>

        {/* Resource Info */}
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex" alignItems="center" gap={1.5}>
            <DevicesIcon fontSize="small" sx={{ color: "#7a7a7a" }} />
            <Typography fontSize={14}>
              <strong>{instancesUsed}</strong> / {instancesTotal} Devices
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1.5}>
            <CpuIcon fontSize="small" sx={{ color: "#7a7a7a" }} />
            <Typography fontSize={14}>
              <strong>{coresUsed}</strong> / {coresTotal} CPU Cores
            </Typography>
          </Box>
        </Box>

        {/* Bottom Capacity Info */}
        <Box
          mt={3}
          p={2}
          sx={{
            backgroundColor: "#f8fafc",
            borderRadius: 2,
            border: "1px solid #eef2f7",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {unusedCores} unused CPU cores • {unusedInstances} unused device
            slots
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
