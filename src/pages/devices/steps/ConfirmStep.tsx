import { Typography, Box, Button } from "@mui/material";

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
    <>
      <Typography variant="h5" mb={3}>
        Confirm & Launch
      </Typography>

      <Typography>Project: {project}</Typography>
      <Typography>Device: {device}</Typography>
      <Typography>
        CPU: {config?.cpu} | Memory: {config?.memory}
      </Typography>

      <Box mt={3} display="flex" gap={2}>
        <Button variant="outlined" onClick={onBack}>
          Back
        </Button>

        <Button variant="contained" color="success">
          Launch
        </Button>
      </Box>
    </>
  );
}
