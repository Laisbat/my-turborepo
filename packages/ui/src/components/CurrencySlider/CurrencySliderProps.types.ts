export type CurrencySliderProps = {
  value: number;
  valueFormat: 'money' | 'percentage';
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}