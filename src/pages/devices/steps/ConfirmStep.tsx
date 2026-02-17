import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Checkbox,
  Button,
  Avatar,
} from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";

type DeviceType = {
  type?: string;
  name?: string;
  flavor?: string;
  description?: string;
  model?: string;
  peripherals?: any;
  quotas?: any;
} | null;

type Props = {
  project: string | null;
  device: DeviceType;
  config: any;
  onBack: () => void;
};

export default function ConfirmStep({
  project,
  device,
  config,
  onBack,
}: Props) {

  
  const [deviceName, setDeviceName] = useState(config?.deviceName || "");
  const [touched, setTouched] = useState(false);
  const [apiMessage, setApiMessage] = useState<string | null>(null);
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const BASE_URL = "https://judge.app.avh.corellium.com/api";
  const API_KEY = import.meta.env.VITE_CORELLIUM_API_KEY;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeviceName(e.target.value);
  };

  const handleCreate = async () => {
    debugger;
    if (!deviceName.trim() || !project || !device) return;

    setLoading(true);
    setApiMessage(null);

    try {
      const response = await fetch(`${BASE_URL}/v1/instances`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          project: project,
          name: deviceName.trim(),
          flavor: device?.flavor || "imx93",
          os: config?.os || "imx93",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setIsErrorMessage(true);
        setApiMessage(data?.error || "Failed to create device");
        return;
      }

      setIsErrorMessage(false);
      setApiMessage("Device created successfully 🎉");
      setTimeout(() => {
        navigate("/");
      }, 5000); // 5000ms = 5 seconds
    } catch (error: any) {
      setIsErrorMessage(true);
      setApiMessage(error.message || "Unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const isError = touched && !deviceName.trim();

  return (
    <Box display="flex" justifyContent="center">
      <Card
        sx={{
          width: "100%",
          maxWidth: "1000px",
          borderRadius: 3,
          boxShadow: "0px 10px 35px rgba(0,0,0,0.08)",
          backgroundColor: "#ffffff",
        }}
      >
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          {/* Header */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={4}
          >
            <Box display="flex" alignItems="center" gap={1.5}>
              <SettingsOutlinedIcon sx={{ color: "#2f6fdd", fontSize: 22 }} />
              <Typography variant="h6" fontWeight={600}>
                Device Configuration
              </Typography>
            </Box>

            <Avatar
              sx={{
                backgroundColor: "#4a76b8",
                width: 42,
                height: 42,
              }}
            >
              <CheckIcon />
            </Avatar>
          </Box>

          {/* ✅ API Message (Design Safe) */}
          {apiMessage && (
            <Typography
              mb={3}
              sx={{
                color: isErrorMessage ? "#d32f2f" : "#2e7d32",
                fontWeight: 500,
              }}
            >
              {apiMessage}
            </Typography>
          )}

          {/* Content */}
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="body2" color="text.secondary" mb={1}>
                Device name *
              </Typography>

              <TextField
                fullWidth
                size="small"
                value={deviceName}
                onChange={handleChange}
                onBlur={() => setTouched(true)}
                placeholder="Enter device name"
                error={isError}
                helperText={isError ? "Device name is required" : ""}
                sx={{
                  mb: 4,
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#f7f9fc",
                  },
                }}
              />

              <Typography variant="body2" color="text.secondary">
                Model
              </Typography>

              <Typography mt={1} mb={4}>
                {device?.name || device?.model}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Firmware type
              </Typography>

              <Typography mt={1}>
                {/* {config?.firmware || "Not selected"} */}
                Stock Example
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} sx={{ pl: { xs: 0, md: 6 } }}>
              <Typography variant="body2" color="text.secondary">
                Project
              </Typography>

              <Typography mt={1} mb={4}>
                {project}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Firmware name
              </Typography>

              <Typography mt={1}>{config?.firmware}</Typography>
            </Grid>
          </Grid>

          {/* Checkbox */}
          <Box mt={4} display="flex" alignItems="center">
            <Checkbox size="small" />
            <Typography variant="body2">
              Set advanced boot options before creating virtual device
            </Typography>
          </Box>

          {/* Create Button */}
          <Box mt={5} display="flex" justifyContent="center">
            <Button
              variant="contained"
              onClick={handleCreate}
              disabled={!deviceName.trim() || loading}
              sx={{
                backgroundColor: "#0b3d91",
                px: 5,
                py: 1,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "#082c66",
                },
              }}
            >
              {loading ? "Creating..." : "Create device"}
            </Button>
          </Box>

          {/* Back Button */}
          <Box mt={4} textAlign="center">
            <Button
              variant="text"
              onClick={onBack}
              sx={{
                textTransform: "none",
                color: "#444",
              }}
            >
              ← Back
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
