import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Chip,
  TextField,
  IconButton,
  Divider,
} from "@mui/material";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import BoltIcon from "@mui/icons-material/Bolt";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

export default function View() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #eaf1fb 0%, #f6f8fc 50%, #eef2fa 100%)",
        p: { xs: 2, md: 4 },
      }}
    >
      {/* Breadcrumb */}
      <Typography
        variant="body2"
        sx={{ color: "#5f6b7a", mb: 2 }}
      >
        Devices / Auto Cloud
      </Typography>

      {/* Top Action Bar */}
      <Card
        sx={{
          mb: 3,
          borderRadius: 0.5,
          boxShadow: "0px 8px 25px rgba(0,0,0,0.05)",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography fontWeight={600}>
              Connect to AutoCloud
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Box
                component="span"
                sx={{
                  width: 8,
                  height: 8,
                  backgroundColor: "green",
                  borderRadius: "50%",
                  display: "inline-block",
                  mr: 1,
                }}
              />
              Online | 9 hours remaining | Device remaining
            </Typography>
          </Box>

          <Box display="flex" gap={1} flexWrap="wrap">
            <Button variant="outlined" >Open Console</Button>
            <Button variant="outlined">Snapshot</Button>
            <Button
              variant="contained"
              startIcon={<PlayArrowIcon />}
            >
              Start
            </Button>
            <Button
              variant="outlined"
              startIcon={<RestartAltIcon />}
            >
              Restart
            </Button>
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <IconButton>
              <PowerSettingsNewIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>

      {/* Main Section */}
      <Grid container spacing={3}>
        {/* LEFT SECTION */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Card
            sx={{
              borderRadius: 0.5,
              boxShadow: "0px 8px 25px rgba(0,0,0,0.05)",
            }}
          >
            <CardContent>
              {/* SSH Header */}
              <Box display="flex" alignItems="center" gap={1} mb={2}>
                <BoltIcon color="primary" />
                <Typography fontWeight={600}>
                  Quick SSH Access
                </Typography>
              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
                mb={2}
              >
                Connect via secure SSH tunnel without VPN.
              </Typography>

              {/* SSH Command */}
              <Box display="flex" gap={1} mb={3}>
                <TextField
                  fullWidth
                  size="small"
                  value="ssh -J user@proxy.avh.com pi@10.11.0.1"
                />
                <IconButton color="primary">
                  <ContentCopyIcon />
                </IconButton>
              </Box>

              <Divider sx={{ mb: 3 }} />

              {/* SSH Warning */}
              <Box
                sx={{
                  p: 2,
                  borderRadius: 1,
                  backgroundColor: "#fff7ed",
                  border: "1px solid #fcd34d",
                }}
              >
                <Box display="flex" gap={1} alignItems="center" mb={1}>
                  <WarningAmberIcon color="warning" />
                  <Typography fontWeight={600}>
                    SSH key not configured
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  mb={2}
                >
                  An SSH key is required for SSH access.
                </Typography>

                <Button variant="contained">
                  Add SSH Key
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* RIGHT SECTION */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              borderRadius: 0.5,
              boxShadow: "0px 8px 25px rgba(0,0,0,0.05)",
            }}
          >
            <CardContent>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Typography fontWeight={600}>
                  Live Device Preview
                </Typography>
                <Chip
                  label="Online"
                  size="small"
                  color="success"
                />
              </Box>

              <Box
                sx={{
                  height: 220,
                  borderRadius: 1,
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <Typography
                variant="caption"
                color="text.secondary"
                mt={2}
                display="block"
              >
                • One user per device at a time
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
