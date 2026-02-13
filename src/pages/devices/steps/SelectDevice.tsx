import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";

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
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          
          {/* Header Row */}
          <Grid size={12}>
            <Typography
              sx={{
                cursor: "pointer",
                color: "primary.main",
                fontWeight: 500,
                mb: 1,
                width: "fit-content",
              }}
              onClick={onBack}
            >
              ← Back
            </Typography>

            <Typography variant="h5" fontWeight={600}>
              Select Device
            </Typography>
          </Grid>

          {/* Cards Row */}
          <Grid size={12}>
            <Grid container spacing={4}>
              {devices.map((device) => (
                <Grid
                  key={device.name}
                  size={{ xs: 12, sm: 6, md: 3 }}
                >
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
                        boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
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

        </Grid>
      </Container>
    </Box>
  );
}
