import Check from "@mui/icons-material/Check";
import Edit from "@mui/icons-material/Edit";
import {
  Box,
  Stepper as MuiStepper,
  Step,
  StepConnector,
  StepLabel,
  type StepIconProps,
} from "@mui/material";
import React, { useState } from "react";
import type { CustomStepperProps } from "./Stepper.types";
import Button from "../Button";

const Stepper: React.FC<CustomStepperProps> = ({
  steps,
  initialStep = 0,
  showConnector = false,
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

  const CustomStepIcon =
    (stepIndex: number, editable?: boolean) => (props: StepIconProps) => {
      const { active, completed, icon } = props;

      const isEditableStep = editable && completed && stepIndex !== activeStep;

      return (
        <Box
          sx={{
            display: "flex",
            width: 22,
            height: 22,
            padding: 2,
            borderRadius: "50%",
            backgroundColor:
              completed || active ? "primary.main" : "grey.200",
            color: "#fff",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
          }}
        >
          {isEditableStep ? (
            <Edit fontSize="small" />
          ) : completed ? (
            <Check fontSize="small" />
          ) : (
            icon
          )}
        </Box>
      );
    };

  return (
    <div style={{
      width: "100%", display: "flex",
      flexDirection: "column",
    }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          flexDirection: { xs: "column", sm: "row", },
          justifyContent: "space-between",
          alignItems: {
            xs: "flex-start",
            sm: "center",
          },
        }}
      >
        <MuiStepper
          activeStep={activeStep}
          connector={showConnector ? <StepConnector /> : null}
          sx={{
            width: "100%",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          {steps.map((step, index) => {
            const isEditable = step.editable;
            return (
              <Step
                key={index}
                completed={index < activeStep}
                onClick={() => {
                  if (isEditable && index < activeStep) {
                    setActiveStep(index);
                  }
                }}
                sx={{
                  flex: 1,
                  cursor: isEditable && index < activeStep ? "pointer" : "default",
                  minWidth: {
                    xs: "100%",
                    sm: 0,
                  },
                }}
              >
                <StepLabel
                  StepIconComponent={CustomStepIcon(index, isEditable)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    whiteSpace: "nowrap",
                  }}
                >
                  {step.label}
                </StepLabel>
              </Step>
            );
          })}
        </MuiStepper>
      </Box>
      <Box sx={{ mt: 1, mb: 1, }} p={1} boxShadow={2} gap={2}>
        <h3 style={{ fontSize: '24px' }} className="font-semibold">{steps[activeStep]?.label}</h3>
        <Box mt={4} display="flex" justifyContent="start" gap={2}>
          <Button variant="outlined" disabled={activeStep === 0} onClick={handleBack}>
            Voltar
          </Button>
          <Button variant="contained" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finalizar" : "Próximo"}
          </Button>
        </Box>
      </Box>


      {/* <Box mt={2} textAlign="center">
        <Typography variant="body2">
          Etapa {activeStep + 1} de {steps.length}
        </Typography>
      </Box> */}
    </div>
  );
};

export default Stepper;
