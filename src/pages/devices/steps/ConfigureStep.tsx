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
          "radial-gradient(circle at 20% 20%, #f3f6fb, #e6ebf5 40%, #dde3f2 100%)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        {/* TITLE */}
        <Typography
          variant="h5"
          fontWeight={600}
          textAlign="center"
          mb={8}
        >
          Configure your device
        </Typography>

        <Grid container spacing={6} alignItems="flex-start">
          {/* LEFT SECTION */}
          <Grid item xs={12} md={5}>
            <Typography fontWeight={600} mb={4}>
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
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  backgroundColor: "#f4f6fa",
                },
              }}
            >
              <MenuItem value="yocto">
                Yocto Linux (full) (2.2.1)
              </MenuItem>
            </TextField>

            <Link
              underline="hover"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                mb: 5,
                fontSize: 14,
                color: "#3b5ccc",
                cursor: "pointer",
              }}
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
              sx={{
                mb: 5,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  backgroundColor: "#f4f6fa",
                },
              }}
            >
              <MenuItem value={2}>2 GB RAM</MenuItem>
              <MenuItem value={4}>4 GB RAM</MenuItem>
              <MenuItem value={8}>8 GB RAM</MenuItem>
            </TextField>

            <Button
              variant="contained"
              sx={{
                px: 5,
                py: 1.2,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 500,
                backgroundColor: "#1f4e79",
                "&:hover": {
                  backgroundColor: "#163a5a",
                },
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
                backgroundColor: "#eef2f7",
                px: 2,
                fontSize: 14,
                color: "text.secondary",
              }}
            >
              Or
            </Typography>
          </Grid>

          {/* RIGHT SECTION */}
          <Grid item xs={12} md={5}>
            <Typography fontWeight={600} mb={4}>
              Upload your own firmware
            </Typography>

            <Paper
              variant="outlined"
              sx={{
                p: 6,
                textAlign: "center",
                borderStyle: "dashed",
                borderWidth: 2,
                borderColor: "#c8cfdd",
                backgroundColor: "rgba(255,255,255,0.65)",
                backdropFilter: "blur(6px)",
                borderRadius: 3,
                mb: 3,
                transition: "0.2s",
                "&:hover": {
                  borderColor: "#3b5ccc",
                  backgroundColor: "rgba(255,255,255,0.8)",
                },
              }}
            >
              <UploadIcon
                sx={{ fontSize: 42, mb: 2, color: "#2c3e50" }}
              />

              <Typography fontWeight={500}>
                Drag file here or{" "}
                <Box
                  component="span"
                  sx={{ color: "#3b5ccc", fontWeight: 600 }}
                >
                  browse
                </Box>{" "}
                to upload
              </Typography>

              <Typography
                variant="caption"
                display="block"
                mt={2}
                color="text.secondary"
              >
                .zip file, raw binary, ELF executable, kernel loaded into RAM
              </Typography>
            </Paper>

            <Typography
              variant="body2"
              color="text.secondary"
              mb={4}
            >
              You can upload a firmware package or firmware binary.{" "}
              <Link underline="hover" sx={{ cursor: "pointer" }}>
                Learn more
              </Link>{" "}
              about what these are and how to create them.
            </Typography>

            <Button
              variant="contained"
              disabled
              sx={{
                px: 5,
                py: 1.2,
                borderRadius: 2,
                textTransform: "none",
                backgroundColor: "#c7ccd8",
                color: "#fff",
              }}
            >
              Next
            </Button>
          </Grid>
        </Grid>

        {/* BACK BUTTON */}
        <Box textAlign="center" mt={10}>
          <Button
            onClick={onBack}
            startIcon={<ArrowBackIcon />}
            sx={{
              textTransform: "none",
              color: "text.secondary",
            }}
          >
            Back
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
