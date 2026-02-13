import {
  Typography,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type Props = {
  project: string | null;
  device: string | null;
  config: any;
  onBack: () => void;
};

export default function ConfirmStep({
  project,
  device,
  config,
  onBack,
}: Props) {
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
        {/* HEADER */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h5" fontWeight={600}>
            Confirm details
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Review and finalize your configuration
          </Typography>
        </Box>

        {/* CARD */}
        <Paper
          elevation={0}
          sx={{
            p: 6,
            borderRadius: 3,
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.6)",
            position: "relative",
          }}
        >
          {/* Check badge */}
          <IconButton
            sx={{
              position: "absolute",
              top: 24,
              right: 24,
              backgroundColor: "#3b6fb6",
              color: "#fff",
              width: 44,
              height: 44,
              "&:hover": {
                backgroundColor: "#2f5c99",
              },
            }}
          >
            <CheckIcon />
          </IconButton>

          <Typography fontWeight={600} mb={4}>
            Device Configuration
          </Typography>

          <Grid container spacing={6}>
            {/* LEFT COLUMN */}
            <Grid item xs={12} md={6}>
              <Typography variant="body2" mb={1}>
                Device name
              </Typography>

              <TextField
                fullWidth
                defaultValue="lively-deer"
                sx={{
                  mb: 4,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    backgroundColor: "#f4f6fa",
                  },
                }}
              />

              <Typography variant="body2" fontWeight={500}>
                Model
              </Typography>
              <Typography mb={3} color="text.secondary">
                {device || "i.MX 8M Plus"}
              </Typography>

              <Typography variant="body2" fontWeight={500}>
                Firmware type
              </Typography>
              <Typography color="text.secondary" mb={3}>
                Stock example
              </Typography>

              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Set advanced boot options before creating virtual device"
              />
            </Grid>

            {/* RIGHT COLUMN */}
            <Grid item xs={12} md={6}>
              <Typography variant="body2" fontWeight={500}>
                Project
              </Typography>
              <Typography mb={3} color="text.secondary">
                {project || "Default Project"}
              </Typography>

              <Typography variant="body2" fontWeight={500}>
                Firmware name
              </Typography>
              <Typography color="text.secondary">
                {config?.firmware || "Yocto Linux (full) (2.2.1)"}
              </Typography>
            </Grid>
          </Grid>

          {/* BUTTON */}
          <Box textAlign="center" mt={6}>
            <Button
              variant="contained"
              sx={{
                px: 6,
                py: 1.2,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 500,
                backgroundColor: "#1f4e79",
                "&:hover": {
                  backgroundColor: "#163a5a",
                },
              }}
            >
              Create device
            </Button>
          </Box>
        </Paper>

        {/* BACK */}
        <Box textAlign="center" mt={4}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={onBack}
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
