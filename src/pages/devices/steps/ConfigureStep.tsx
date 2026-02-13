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
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";

type Props = {
  onComplete: (config: any) => void;
  onBack: () => void;
};

export default function ConfigureStep({ onComplete, onBack }: Props) {
  const [firmware, setFirmware] = useState("yocto");
  const [ram, setRam] = useState(4);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #eef2f7 0%, #e3e8f4 40%, #dde3f2 100%)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          fontWeight={600}
          textAlign="center"
          mb={6}
        >
          Configure your device
        </Typography>

        <Grid container spacing={6} alignItems="flex-start">
          {/* LEFT SIDE */}
          <Grid item xs={12} md={5}>
            <Typography fontWeight={600} mb={3}>
              Select available firmware
            </Typography>

            {/* Firmware */}
            <Typography variant="body2" mb={1}>
              Firmware version
            </Typography>

            <TextField
              select
              fullWidth
              value={firmware}
              onChange={(e) => setFirmware(e.target.value)}
              sx={{ mb: 2 }}
            >
              <MenuItem value="yocto">
                Yocto Linux (full) (2.2.1)
              </MenuItem>
            </TextField>

            <Link
              underline="hover"
              sx={{ display: "inline-flex", alignItems: "center", mb: 4 }}
            >
              🔗 Source Image
            </Link>

            {/* RAM */}
            <Typography variant="body2" mb={1}>
              RAM
            </Typography>

            <TextField
              select
              fullWidth
              value={ram}
              onChange={(e) => setRam(Number(e.target.value))}
              sx={{ mb: 4 }}
            >
              <MenuItem value={2}>2 GB RAM</MenuItem>
              <MenuItem value={4}>4 GB RAM</MenuItem>
              <MenuItem value={8}>8 GB RAM</MenuItem>
            </TextField>

            <Button
              variant="contained"
              sx={{
                px: 5,
                borderRadius: 2,
                textTransform: "none",
              }}
              onClick={() => onComplete({ firmware, ram })}
            >
              Select
            </Button>
          </Grid>

          {/* CENTER DIVIDER */}
          <Grid
            item
            md={2}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Divider orientation="vertical" flexItem />
            <Typography
              sx={{
                position: "absolute",
                bgcolor: "#e9edf6",
                px: 2,
                fontSize: 14,
              }}
            >
              Or
            </Typography>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid item xs={12} md={5}>
            <Typography fontWeight={600} mb={3}>
              Upload your own firmware
            </Typography>

            <Paper
              variant="outlined"
              sx={{
                p: 5,
                textAlign: "center",
                borderStyle: "dashed",
                borderColor: "#c5c9d6",
                backgroundColor: "rgba(255,255,255,0.6)",
                borderRadius: 2,
                mb: 2,
              }}
            >
              <UploadIcon sx={{ fontSize: 40, mb: 2 }} />

              <Typography>
                Drag file here or <b>browse</b> to upload
              </Typography>

              <Typography variant="caption" display="block" mt={2}>
                .zip file, raw binary, ELF executable, kernel loaded into RAM
              </Typography>
            </Paper>

            <Typography
              variant="body2"
              color="text.secondary"
              mb={4}
            >
              You can upload a firmware package or firmware binary.
              <br />
              Learn more about what these are and how to create them.
            </Typography>

            <Button
              variant="contained"
              disabled
              sx={{
                borderRadius: 2,
                textTransform: "none",
              }}
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
