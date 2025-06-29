import { useTheme } from "@mui/material";
import * as React from "react";

const IconePremiosEmDinheiro = ({
  color,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 400"
      fill="none"
      {...props}
    >
      <g>
        <path
          fill={color || theme.palette.primary.main}
          d="M255.3,165.8c-23.7-28.1-48.9-45-56-49.4,11.7-21.3,38.3-71.6,35.9-94.5-.3-2.3-1.3-4.7-3.4-6.2-1.8-1.6-4.4-2.3-6.8-2.1-.5,0-39.8,4.4-77.3-9.6C102.8-13,60.7,30.7,58.9,32.5c-3.1,3.1-3.4,8.1-.8,11.7l51.5,70c-2.3-.8-4.9-.5-7.3.8-1.3.8-33.3,20-61.2,54.9C3.4,216.8-8.6,269.6,6,322.7v.3c.5,1.8,15.4,47.4,63.8,68.7,12.8,5.7,35.4,8.3,69.7,8.3s33.6-.5,54.1-1.8c89.8-4.9,103.3-85.4,104.1-91.9,8.3-48.9-6.2-97.6-42.4-140.5ZM141.6,21.1c29.4,10.9,59.3,12,75,11.5-4.2,19.8-21.9,55.7-35.4,79.1l-52.1-1.8-51.5-69.7c11.2-9.6,38-28.6,64-19ZM279.6,303.4v.5c-.3,2.9-9.6,71.8-87.2,76-61.2,3.4-99.9,1.6-115.6-5.2-39.6-17.4-52.8-55.2-53.6-57.3-13-47.6-2.3-93.2,31.5-135.9,26-32.5,56.5-50.8,56.7-51,2.9-1.8,4.4-4.7,4.4-7.8l.8,1.3c1.6,2.3,4.2,3.6,7,3.6l61.9,2.1h1c.5.3.8.8,1.3,1,1.3.5,110.4,66.9,91.6,172.6Z"
        />
        <path
          fill={color || theme.palette.primary.main}
          d="M163,235.3l-7.8-2.9c-2.3-.8-5.5-2.3-7-3.9-1.6-1.6-2.1-3.4-2.1-4.9,0-2.3,1-3.9,2.3-4.9,2.1-2.1,5.7-2.9,9.1-2.9,7.5,0,13.8,3.9,16.9,6.5l10.2-19.5c-10.2-6-18-7.5-22.9-7.8v-16.7h-15.1v16.7c-7.3,1.3-14.1,4.9-18.5,10.2-4.4,4.9-7.5,12-7.5,21.3s1.6,12.5,6.5,17.7c2.3,2.3,7,6,16.7,9.4l8.8,3.1c3.1,1,5.2,2.1,6.8,3.1,2.1,1.6,3.1,3.4,3.1,5.7s-1,4.7-2.9,6.5c-2.3,2.3-5.7,3.4-9.9,3.4s-10.2-1.6-13.8-3.4c-3.4-1.6-7.3-4.7-10.4-7.8l-10.9,20.3c5.2,4.2,10.4,6.8,14.8,8.6,5.7,2.3,11.2,3.4,17.2,3.6v16.4h15.1v-17.2c6.8-1.6,13.8-5.2,18.2-9.9,3.4-3.4,8.6-10.7,8.6-22.9s-1.6-12.8-7.5-18.5c-6.2-5.5-12.5-7.5-18-9.4Z"
        />
      </g>
    </svg>
  );
};
export default IconePremiosEmDinheiro;
