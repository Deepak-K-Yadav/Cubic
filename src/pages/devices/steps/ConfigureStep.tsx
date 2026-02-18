import {
  Typography,
  Box,
  Button,
  Grid,
  Divider,
  TextField,
  MenuItem,
  Container,
  Paper,
  Link,
  CircularProgress,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState, useRef, useEffect } from "react";
import type { Device } from "../types";
type Props = {
  device: Device;
  onComplete: (config: any) => void;
  onBack: () => void;
};

export default function ConfigureStep({ device, onComplete, onBack }: Props) {
  const BASE_URL = import.meta.env.VITE_CORELLIUM_BASE;
  const API_KEY = import.meta.env.VITE_CORELLIUM_API_KEY;

  const [firmwareList, setFirmwareList] = useState<any[]>([]);
  const [firmware, setFirmware] = useState<string>("");
  const [loadingFirmware, setLoadingFirmware] = useState(true);

  const [ram, setRam] = useState(4);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [os, setOs] = useState("");

  /* --------------------------------------------
     🔹 Fetch Firmware List
  -------------------------------------------- */
  useEffect(() => {
    const fetchFirmware = async () => {
      try {
        const response = await fetch(`${BASE_URL}/v1/models/imx93/software`, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) throw new Error("Failed to fetch firmware list");

        const data = await response.json();
        setFirmwareList(data || []);

        setOs(data[0]?.version || "Unknown OS");

        console.log(data[0]?.version, "Firmware List API Response");

        if (data && data.length > 0) {
          setFirmware(data[0].filename);
        }
      } catch (error) {
        console.error("Firmware API Error:", error);
      } finally {
        setLoadingFirmware(false);
      }
    };

    fetchFirmware();
  }, []);

  /* --------------------------------------------
     🔹 File Upload Handlers
  -------------------------------------------- */
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedFile(event.target.files[0]);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => setDragging(false);

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setDragging(false);
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setUploadedFile(event.dataTransfer.files[0]);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h5" fontWeight={700} textAlign="center" mb={8}>
          Configure your device
        </Typography>

        <Grid container spacing={6} alignItems="flex-start">
          {/* LEFT SIDE */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography fontWeight={600} mb={3}>
              Select available firmware
            </Typography>

            <Typography variant="body2" mb={1}>
              Firmware version
            </Typography>

            <TextField
              select
              fullWidth
              value={firmware}
              onChange={(e) => setFirmware(e.target.value)}
              sx={{
                mb: 3,
                backgroundColor: "rgba(255,255,255,0.7)",
                borderRadius: 2,
                maxWidth: 400,
                minWidth: 400,
              }}
            >
              {loadingFirmware ? (
                <MenuItem value="">
                  <CircularProgress size={18} />
                </MenuItem>
              ) : firmwareList.length === 0 ? (
                <MenuItem disabled>No firmware available</MenuItem>
              ) : (
                firmwareList.map((item: any) => (
                  <MenuItem key={item.filename} value={item.filename}>
                    {item.name} ({item.filename})
                  </MenuItem>
                ))
              )}
            </TextField>

            {/* <Link underline="hover" sx={{ mb: 4, display: "inline-block" }}>
              🔗 Source Image
            </Link> */}

            <Typography variant="body2" mb={1}>
              RAM
            </Typography>

            <TextField
              select
              fullWidth
              value={ram}
              onChange={(e) => setRam(Number(e.target.value))}
              sx={{
                mb: 4,
                backgroundColor: "rgba(255,255,255,0.7)",
                borderRadius: 2,
              }}
            >
              <MenuItem value={2}>2 GB RAM</MenuItem>
              <MenuItem value={4}>4 GB RAM</MenuItem>
              <MenuItem value={8}>8 GB RAM</MenuItem>
            </TextField>

            <Button
              variant="contained"
              disabled={!firmware}
              sx={{
                px: 5,
                py: 1.2,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 600,
              }}
              onClick={() => onComplete({ firmware, ram, os })}
            >
              Select
            </Button>
          </Grid>

          {/* Divider */}
          <Grid
            size={{ md: 2 }}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "rgba(0,0,0,0.15)" }}
            />
            <Typography
              sx={{
                position: "absolute",
                background: "rgba(255,255,255,0.6)",
                px: 2,
                fontWeight: 500,
                color: "text.secondary",
              }}
            >
              Or
            </Typography>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography fontWeight={600} mb={3}>
              Upload your own firmware
            </Typography>

            <input
              type="file"
              hidden
              ref={fileInputRef}
              onChange={handleFileChange}
            />

            <Paper
              elevation={0}
              variant="outlined"
              onClick={() => fileInputRef.current?.click()}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              sx={{
                p: 6,
                textAlign: "center",
                borderStyle: "dashed",
                borderWidth: 2,
                borderColor: dragging ? "#1976d2" : "rgba(0,0,0,0.2)",
                backgroundColor: dragging
                  ? "rgba(25,118,210,0.08)"
                  : "rgba(255,255,255,0.5)",
                borderRadius: 3,
                cursor: "pointer",
                transition: "all 0.2s ease",
                mb: 2,
                //cursor: "pointer",
                //transition: "all 0.2s ease",
              }}
            >
              <UploadIcon sx={{ fontSize: 42, mb: 2 }} />
              <Typography>
                Drag file here or <b>browse</b> to upload
              </Typography>

              {uploadedFile && (
                <Typography mt={2} fontWeight={500}>
                  Selected: {uploadedFile.name}
                </Typography>
              )}
            </Paper>

            <Button
              variant="contained"
              disabled={!uploadedFile}
              sx={{
                px: 4,
                py: 1.2,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 600,
              }}
              onClick={() => onComplete({ uploadedFile })}
            >
              Next
            </Button>
          </Grid>
        </Grid>

        {/* BACK BUTTON */}
        <Box textAlign="center" mt={8}>
          <Button
            onClick={onBack}
            startIcon={<ArrowBackIcon />}
            sx={{ textTransform: "none" }}
          >
            Back
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
