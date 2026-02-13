import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Box } from "@mui/material";

import CustomStepper from "./components/CustomStepper";
import SelectProject from "./steps/SelectProject";
import SelectDevice from "./steps/SelectDevice";
import ConfigureStep from "./steps/ConfigureStep";
import ConfirmStep from "./steps/ConfirmStep";

export default function DeviceWizard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const stepFromUrl = Number(searchParams.get("step")) || 0;

  const [activeStep, setActiveStep] = useState(stepFromUrl);
  const [config, setConfig] = useState<any>(null);
  const [project, setProject] = useState<string | null>(null);
const [device, setDevice] = useState<string | null>(null);

  useEffect(() => {
    setSearchParams({ step: activeStep.toString() });
  }, [activeStep]);

  const next = () => setActiveStep((s) => s + 1);
  const back = () => setActiveStep((s) => s - 1);

  const handleConfigureComplete = (data: any) => {
    setConfig(data);   // store config
    next();            // move to next step
  };
  

  return (
    <Box
      sx={{
        minHeight: "100vh",

        py: 6,
      }}
    >
      <CustomStepper activeStep={activeStep} />

      {activeStep === 0 && <SelectProject onSelect={next} />}
      {activeStep === 1 && <SelectDevice onSelect={next} onBack={back} />}
      {activeStep === 2 && <ConfigureStep onComplete={handleConfigureComplete} onBack={back} />}
      {activeStep === 3 && <ConfirmStep project={project} device={device} config={config} onBack={back} />}
    </Box>
  );
}
