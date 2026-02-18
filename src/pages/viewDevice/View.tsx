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
import DownloadIcon from "@mui/icons-material/Download";

export default function View() {
  return (
    <Box
    // sx={{
    //   minHeight: "100vh",
    //   background:
    //     "linear-gradient(135deg, #eaf1fb 0%, #f6f8fc 50%, #eef2fa 100%)",
    //   p: { xs: 2, md: 4 },
    // }}
    >
      {/* Breadcrumb */}
      {/* <Typography variant="body2" sx={{ color: "#5f6b7a", mb: 2 }}>
        Devices / Auto Cloud
      </Typography> */}

      {/* Top Action Bar */}
      <Card
        sx={{
          mb: 3,
          borderRadius: 1,
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
            <Typography fontWeight={600}>Connect to Cubic Corp</Typography>
            <Typography variant="body2" color="text.secondary">
              <Box
                component="span"
                sx={{
                  width: 8,
                  height: 8,
                  backgroundColor: "#22c55e",
                  borderRadius: "50%",
                  display: "inline-block",
                  mr: 1,
                }}
              />
              Online | 9 hours remaining | Device remaining
            </Typography>
          </Box>

          {/* <Box display="flex" gap={1} flexWrap="wrap">
            <Button variant="outlined">Open Console</Button>
            <Button variant="outlined">Snapshot</Button>
            <Button variant="contained" startIcon={<PlayArrowIcon />}>
              Start
            </Button>
            <Button variant="outlined" startIcon={<RestartAltIcon />}>
              Restart
            </Button>
            <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
              Delete
            </Button>
            <IconButton>
              <PowerSettingsNewIcon />
            </IconButton>
          </Box> */}
        </CardContent>
      </Card>

      {/* Main Section */}
      <Grid container spacing={3}>
        {/* LEFT SECTION */}
        <Grid size={{ xs: 12, md: 12 }}>
          <Card
            sx={{ borderRadius: 1, boxShadow: "0px 8px 25px rgba(0,0,0,0.05)" }}
          >
            <CardContent>
              {/* Quick SSH */}
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <BoltIcon color="primary" />
                <Typography fontWeight={600}>Quick SSH Access</Typography>
              </Box>

              <Typography variant="body2" color="text.secondary" mb={2}>
                Connect to SSH on yourvirtual device via an SSH tunnel without
                VPN.
              </Typography>

              {/* SSH Command */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#f3f4f6",
                  borderRadius: 1,
                  border: "1px solid #e5e7eb",
                  overflow: "hidden",
                  mb: 2,
                }}
              >
                <TextField
                  fullWidth
                  size="small"
                  value="ssh -J 09950a8e-c304-4afc-a3f4-4f38967dd697@proxy.app.avh.corellium.com root@10.11.0.4"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    sx: { px: 2, py: 1 },
                  }}
                />
                <IconButton sx={{ borderLeft: "1px solid #e5e7eb" }}>
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Box>

              {/* Inline Warning */}
              <Box
                sx={{
                  display: "none",
                  alignItems: "center",
                  gap: 1,
                  p: 1,
                  borderRadius: 1,
                  border: "1px solid #fecaca",
                  backgroundColor: "#fef2f2",
                  mb: 3,
                }}
              >
                <WarningAmberIcon color="error" fontSize="small" />
                <Typography variant="body2" color="error">
                  You do not have an SSH key in your active project. You can add
                  an SSH key to your account using our API.
                </Typography>
              </Box>

              {/* OR Divider */}
              <Box display="flex" alignItems="center" my={3}>
                <Divider sx={{ flex: 1 }} />
                <Typography sx={{ mx: 2 }} variant="body2">
                  OR
                </Typography>
                <Divider sx={{ flex: 1 }} />
              </Box>

              {/* Connect via VPN */}
              <Typography fontWeight={600} mb={1}>
                Connect via VPN
              </Typography>

              <Typography variant="body2" color="text.secondary" mb={2}>
                To use gdb, ssh, or serial console you must first connect to
                VPN.
              </Typography>

              <Typography variant="body2" mb={1}>
                1. Download the VPN configuration file to connect.
              </Typography>

              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                sx={{ mb: 3 }}
              >
                Download OVPN File
              </Button>

              <Typography variant="body2" mb={1}>
                2. Choose a connection method below.
              </Typography>

              <Typography variant="body2" color="text.secondary" mb={1}>
                &gt; _SSH <br /> Connect to SSH on your virtual device.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#f3f4f6",
                  borderRadius: 1,
                  border: "1px solid #e5e7eb",
                  overflow: "hidden",
                }}
              >
                <TextField
                  fullWidth
                  size="small"
                  value="ssh pi@10.11.0.1"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    sx: { px: 2, py: 1 },
                  }}
                />
                <IconButton sx={{ borderLeft: "1px solid #e5e7eb" }}>
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Box>

              <Typography
                variant="caption"
                color="text.secondary"
                mt={1}
                display="block"
              >
                The default password is raspberry
              </Typography>

              {/* DO NOT TOUCH - COMMENTED BLOCK */}
              {/* <Box
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
              </Box> */}
            </CardContent>
          </Card>
        </Grid>

        {/* RIGHT SECTION */}
        {/* <Grid size={{ xs: 12, md: 4 }}>
          <Card
            sx={{ borderRadius: 1, boxShadow: "0px 8px 25px rgba(0,0,0,0.05)" }}
          >
            <CardContent>
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography fontWeight={600}>Live Device Preview</Typography>
                <Box display="flex" alignItems="center" gap={1}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      backgroundColor: "#22c55e",
                      borderRadius: "50%",
                    }}
                  />
                  <Typography variant="body2">Online</Typography>
                </Box>
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
        </Grid> */}
      </Grid>
    </Box>
  );
}
