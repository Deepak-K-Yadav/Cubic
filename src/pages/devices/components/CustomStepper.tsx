import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  stepConnectorClasses,
  styled,
  Typography,
  Box,
} from "@mui/material";

const BlueConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 14,
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#dbe6f6",
    borderRadius: 2,
  },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    background: "linear-gradient(90deg,#337DD6,#1970D0)",
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    background: "linear-gradient(90deg,#337DD6,#1970D0)",
  },
}));

const steps = [
  { label: "Select Project", sub: "Project & Resource Scope" },
  { label: "Select Device", sub: "Hardware Board & OS" },
  { label: "Configure", sub: "Resources & Configuration" },
  { label: "Confirm", sub: "Review & Launch" },
];

export default function CustomStepper({ activeStep }: any) {
  return (
    <Box sx={{ maxWidth: 1000, mx: "auto", mb: 6 }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<BlueConnector />}
      >
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel>
              <Typography fontWeight={600}>{step.label}</Typography>
              <Typography variant="caption" color="text.secondary">
                {step.sub}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
