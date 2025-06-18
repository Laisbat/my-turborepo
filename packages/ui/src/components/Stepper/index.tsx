import Check from "@mui/icons-material/Check";
import {
  Box,
  Button,
  Stepper as MuiStepper,
  Step,
  StepConnector,
  type StepIconProps,
  StepLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import type { CustomStepperProps } from "./stepper.types";

const CustomStepIcon = (props: StepIconProps) => {
  const { active, completed, icon } = props;

  return (
    <Box
      sx={{
        display: "flex",
        width: 24,
        height: 24,
        borderRadius: "50%",
        backgroundColor: completed
          ? "primary.main"
          : active
            ? "primary.main"
            : "grey.400",
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 14,
      }}
    >
      {completed ? <Check fontSize="small" /> : icon}
    </Box>
  );
};

const Stepper: React.FC<CustomStepperProps> = ({
  steps,
  initialStep = 0,
  onFinish,
}) => {
  const [activeStep, setActiveStep] = useState(initialStep);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else if (onFinish) {
      onFinish();
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <Box>
      <MuiStepper
        activeStep={activeStep}
        alternativeLabel
        connector={<StepConnector />}
      >
        {steps.map((step, index) => (
          <Step key={index} completed={index < activeStep}>
            <StepLabel StepIconComponent={CustomStepIcon}>
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </MuiStepper>

      <Box mt={4} display="flex" justifyContent="center" gap={2}>
        <Button
          variant="outlined"
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Voltar
        </Button>
        <Button variant="contained" onClick={handleNext}>
          {activeStep === steps.length - 1 ? "Finalizar" : "Próximo"}
        </Button>
      </Box>

      <Box mt={2} textAlign="center">
        <Typography variant="body2">
          Etapa {activeStep + 1} de {steps.length}
        </Typography>
      </Box>
    </Box>
  );
};

export default Stepper;
