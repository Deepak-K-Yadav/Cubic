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
  onClick: () => void;
};

export default function ProjectCard({
  title,
  color,
  onClick,
}: Props) {
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
          xs={3}
        >
          <Box display="flex" alignItems="center" gap={2}>
            {/* Large Avatar */}
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
            <CapacityDonut />
            <Typography
              variant="caption"
              color="text.secondary"
              mt={1}
              display="block"
            >
              Unused Capacity
            </Typography>
          </Box>
        </Box>

        {/* Details */}
        <Box display="flex" flexDirection="column" gap={1.5}>
          <Box display="flex" alignItems="center" gap={1.5}>
            <DevicesIcon fontSize="small" sx={{ color: "#7a7a7a" }} />
            <Typography>23 Devices</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1.5}>
            <CpuIcon fontSize="small" sx={{ color: "#7a7a7a" }} />
            <Typography>33 CPU Cores</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1.5}>
            <NetworkIcon fontSize="small" sx={{ color: "#7a7a7a" }} />
            <Typography>Private Network</Typography>
          </Box>
        </Box>

        {/* Bottom Info Box */}
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
            33 unused CPU cores,
            <br />
            67 unused device slots
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
