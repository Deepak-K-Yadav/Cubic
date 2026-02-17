import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Box } from "@mui/material";

import CustomStepper from "./components/CustomStepper";
import SelectProject from "./steps/SelectProject";
import SelectDevice from "./steps/SelectDevice";
import ConfigureStep from "./steps/ConfigureStep";
import ConfirmStep from "./steps/ConfirmStep";

import { Device, DeviceConfig } from "./types";

const MAX_STEP = 3;

export default function DeviceWizard() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [activeStep, setActiveStep] = useState(0);
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [configData, setConfigData] = useState<DeviceConfig | null>(null);

  /* --------------------------------------------------
     🔹 Restore from localStorage on first load
  -------------------------------------------------- */
  useEffect(() => {
    try {
      const savedDevice = localStorage.getItem("selectedDevice");
      const savedConfig = localStorage.getItem("configData");

      if (savedDevice) {
        setSelectedDevice(JSON.parse(savedDevice));
      }

      if (savedConfig) {
        setConfigData(JSON.parse(savedConfig));
      }
    } catch (err) {
      console.error("Failed to restore wizard state:", err);
      localStorage.removeItem("selectedDevice");
      localStorage.removeItem("configData");
    }
  }, []);

  /* --------------------------------------------------
     🔹 Sync URL → Step (deep link safe)
  -------------------------------------------------- */
  useEffect(() => {
    const step = Number(searchParams.get("step"));

    if (!isNaN(step) && step >= 0 && step <= MAX_STEP) {
      setActiveStep(step);
    } else {
      setActiveStep(0);
    }
  }, [searchParams]);

  /* --------------------------------------------------
     🔹 Sync Step → URL
  -------------------------------------------------- */
  useEffect(() => {
    setSearchParams({ step: activeStep.toString() });
  }, [activeStep, setSearchParams]);

  /* --------------------------------------------------
     🔹 Guard invalid navigation
  -------------------------------------------------- */
  useEffect(() => {
    if (activeStep >= 2 && !selectedDevice) {
      setActiveStep(1);
    }

    if (activeStep >= 3 && !configData) {
      setActiveStep(2);
    }
  }, [activeStep, selectedDevice, configData]);

  /* --------------------------------------------------
     🔹 Navigation
  -------------------------------------------------- */
  const next = () => setActiveStep((s) => Math.min(s + 1, MAX_STEP));
  const back = () => setActiveStep((s) => Math.max(s - 1, 0));

  /* --------------------------------------------------
     🔹 Step Handlers
  -------------------------------------------------- */
  const handleDeviceSelect = (device: Device) => {
    setSelectedDevice(device);
    localStorage.setItem("selectedDevice", JSON.stringify(device));
    next();
  };

  const handleConfigComplete = (config: DeviceConfig) => {
    setConfigData(config);
    localStorage.setItem("configData", JSON.stringify(config));
    next();
  };

  const handleReset = () => {
    localStorage.removeItem("selectedDevice");
    localStorage.removeItem("configData");
    setSelectedDevice(null);
    setConfigData(null);
    setActiveStep(0);
  };

  /* --------------------------------------------------
     🔹 Render
  -------------------------------------------------- */
  return (
    <Box sx={{ minHeight: "100vh", py: 6 }}>
      <CustomStepper activeStep={activeStep} />

      {activeStep === 0 && <SelectProject onSelect={next} />}

      {activeStep === 1 && (
        <SelectDevice
          onSelect={handleDeviceSelect}
          onBack={back}
        />
      )}

      {activeStep === 2 && selectedDevice && (
        <ConfigureStep
          device={selectedDevice} 
          onComplete={handleConfigComplete}
          onBack={back}
        />
      )}

      {activeStep === 3 && selectedDevice && configData && (
        <ConfirmStep
          device={selectedDevice}
          config={configData}
          onBack={back}
          onReset={handleReset}
        />
      )}
    </Box>
  );
}
