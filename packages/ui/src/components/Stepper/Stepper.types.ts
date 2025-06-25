export type StepperStep = {
  label: string;
  editable?: boolean;
};

export type CustomStepperProps = {
  steps: StepperStep[];
  initialStep?: number;
  showConnector?: boolean;
  onFinish?: () => void;
};