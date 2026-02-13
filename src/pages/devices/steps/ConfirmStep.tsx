
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
        display: "flex",
        justifyContent: "center",
        px: { xs: 2, md: 4 },
        py: { xs: 4, md: 6 },
      }}
    >
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
              <SettingsOutlinedIcon
                sx={{ color: "#2f6fdd", fontSize: 22 }}
              />
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

          {/* Content */}
          <Grid container spacing={6}>
            {/* LEFT SIDE */}
            {/* <Grid item xs={12} md={6}> */}
             <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="body2"
                color="text.secondary"
                mb={1}
              >
                Device name
              </Typography>

              <TextField
                fullWidth
                size="small"
                value={config?.deviceName || "lively-deer"}
                disabled
                sx={{
                  mb: 4,
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#f7f9fc",
                  },
                }}
              />

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Model
              </Typography>
              <Typography mt={1} mb={4}>
                {device || "i.MX 8M Plus"}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Firmware type
              </Typography>
              <Typography mt={1}>
                Stock example
              </Typography>
            </Grid>
            {/* <Grid item xs={12} md={6} sx={{
      pl: { xs: 0, md: 6 }, 
    }}> */}
      <Grid size={{ xs: 12, md: 6 }} sx={{ pl: { xs: 0, md: 6 } }}>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                Project
              </Typography>
              <Typography mt={1} mb={4}>
                {project || "Default Project"}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Firmware name
              </Typography>
              <Typography mt={1}>
                Yocto Linux (full) (2.2.1)
              </Typography>
            </Grid>
          </Grid>

          {/* Checkbox */}
          <Box mt={4} display="flex" alignItems="center">
            <Checkbox size="small" />
            <Typography variant="body2">
              Set advanced boot options before creating virtual device
            </Typography>
          </Box>

          {/* Button */}
          <Box
            mt={5}
            display="flex"
            justifyContent="center"
          >
            <Button
              variant="contained"
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
              Create device
            </Button>
          </Box>
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

