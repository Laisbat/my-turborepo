export type StepperStep = {
  label: string;
}

export type CustomStepperProps = {
  steps: StepperStep[];
  initialStep?: number;
  onFinish?: () => void;
}