
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Stack,
  Paper,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";

type Props = {
  onSelect: (device: string) => void;
  onBack: () => void;
};

const devices = [
  {
    name: "Generic Android",
    subtitle: "Requires 2 CPU cores",
    image:
      "https://images.unsplash.com/photo-1764557207226-bc72ae09ca43?q=80&w=764&auto=format&fit=crop",
  },
  {
    name: "Raspberry Pi",
    subtitle: "Requires 4 CPU cores",
    image:
      "https://images.unsplash.com/photo-1764557207226-bc72ae09ca43?q=80&w=764&auto=format&fit=crop",
  },
  {
    name: "Jetson Nano",
    subtitle: "Requires 4 CPU cores",
    image:
      "https://images.unsplash.com/photo-1764557207226-bc72ae09ca43?q=80&w=764&auto=format&fit=crop",
  },
  {
    name: "ARM Board",
    subtitle: "Requires 2 CPU cores",
    image:
      "https://images.unsplash.com/photo-1764557207226-bc72ae09ca43?q=80&w=764&auto=format&fit=crop",
  },
];

export default function SelectDevice({ onSelect, onBack }: Props) {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [showBanner, setShowBanner] = useState(true);

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          
          {/* Back Button */}
          {/* <Grid size={12}>
            <Typography
              sx={{
                cursor: "pointer",
                color: "primary.main",
                fontWeight: 500,
                width: "fit-content",
              }}
              onClick={onBack}
            >
              ← Back
            </Typography>
          </Grid> */}

          {/* ===== Highlighted Section ===== */}
          <Grid size={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", md: "center" },
                flexDirection: { xs: "column", md: "row" },
                gap: 3,
              }}
            >
              {/* Title */}
              <Box>
                <Typography variant="h5" fontWeight={700}>
                  Select Device
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  * Includes Rapid Start
                </Typography>
              </Box>

              {/* Search + Filter */}
              <Stack direction="row" spacing={2} alignItems="center">
                <TextField
                  size="small"
                  placeholder="Search Devices"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  sx={{
                    width: 240,
                    background: "#fff",
                    borderRadius: 2,
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />

                <Stack
                  direction="row"
                  sx={{
                    background: "#f3f4f6",
                    borderRadius: 2,
                    p: 0.5,
                  }}
                >
                  {["All", "Android", "IoT"].map((item) => (
                    <Button
                      key={item}
                      size="small"
                      onClick={() => setFilter(item)}
                      sx={{
                        minWidth: 70,
                        textTransform: "none",
                        fontWeight: 600,
                        borderRadius: 2,
                        background:
                          filter === item
                            ? "primary.main"
                            : "transparent",
                        color:
                          filter === item
                            ? "#fff"
                            : "text.primary",
                        "&:hover": {
                          background:
                            filter === item
                              ? "primary.dark"
                              : "rgba(0,0,0,0.05)",
                        },
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                </Stack>
              </Stack>
            </Box>
          </Grid>

          {/* Info Banner */}
          {showBanner && (
            <Grid size={12}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  background:
                    "linear-gradient(135deg, #f5f7fb 0%, #eef2f7 100%)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Box sx={{ display: "flex", gap: 2 }}>
                  <InfoOutlinedIcon color="action" />

                  <Box>
                    <Typography fontWeight={600}>
                      Need a device not listed here?
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5 }}
                    >
                      Contact your sales person for pricing and availability.
                    </Typography>

                    <Button
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        mt: 1.5,
                        p: 0,
                        textTransform: "none",
                        fontWeight: 600,
                      }}
                    >
                      Request a device
                    </Button>
                  </Box>
                </Box>

                <IconButton
                  size="small"
                  onClick={() => setShowBanner(false)}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Paper>
            </Grid>
          )}

          {/* ===== Device Cards ===== */}
          <Grid size={12}>
            <Grid container spacing={4}>
              {devices.map((device) => (
                <Grid key={device.name} size={{ xs: 12, sm: 6, md: 3 }}>
                  <Card
                    onClick={() => onSelect(device.name)}
                    sx={{
                      height: "100%",
                      cursor: "pointer",
                      borderRadius: 3,
                      p: 3,
                      textAlign: "center",
                      background: "#f5f5f7",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
                      transition: "all 0.3s ease",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow:
                          "0 20px 50px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      <Box
                        component="img"
                        src={device.image}
                        alt={device.name}
                        sx={{
                          width: "100%",
                          height: 200,
                          objectFit: "cover",
                          borderRadius: 2,
                          mb: 3,
                        }}
                      />

                      <Typography variant="h6" fontWeight={600}>
                        {device.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1 }}
                      >
                        {device.subtitle}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          {/* Bottom Back Button */}
<Grid size={12}>
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      mt: 4,
    }}
  >
    <Typography
      sx={{
        cursor: "pointer",
        fontWeight: 500,
        display: "flex",
        alignItems: "center",
        gap: 1,
        "&:hover": {
          color: "primary.main",
        },
      }}
      onClick={onBack}
    >
      ← Back
    </Typography>
  </Box>
</Grid>

        </Grid>
      </Container>
    </Box>
  );
}

