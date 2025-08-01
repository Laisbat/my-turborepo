import { useTheme } from "@mui/material";
import * as React from "react";

const IconeCobertura = (props: React.SVGProps<SVGSVGElement>) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 394.9 400"
      fill="none"
      {...props}
    >
      <g>
        <path
          fill={props.color || theme.palette.primary.main}
          d="M394.9,218.6c0-98.5-88.5-178.4-197.5-178.4S0,120.2,0,218.6h.5v.8h18.8c0-16.9,27.9-28.4,52.9-28.4s52.9,11.8,52.9,28.4h19.6c0-16.9,27.9-28.4,52.9-28.4s52.9,11.8,52.9,28.4h19.6c0-16.9,27.9-28.4,52.9-28.4s52.9,11.8,52.9,28.4h18.8c.5-.3.5-.5.5-.8h0ZM323.3,172c-27.4,0-50.4,9.7-62.8,24.1-12.1-14.5-35.4-24.1-62.8-24.1s-50.4,9.7-62.8,24.1c-12.1-14.5-35.4-24.1-62.8-24.1s-36.8,4.8-49.4,12.9C40.2,112.9,111.9,59,197.5,59s156.9,53.7,174.4,125.3c-12.6-7.8-29.5-12.3-48.6-12.3Z"
        />
        <path
          fill={props.color || theme.palette.primary.main}
          d="M197.5,18.8c5.6,0,9.9,4.6,9.9,9.9h18.8c0-15.8-12.9-28.7-28.7-28.7s-28.7,12.9-28.7,28.7h18.8c0-5.4,4.6-9.9,9.9-9.9Z"
        />
        <path
          fill={props.color || theme.palette.primary.main}
          d="M186.2,338.8c0,23.3-19,42.4-42.4,42.4s-42.4-19-42.4-42.4h-18.8c0,33.8,27.4,61.2,61.2,61.2s61.2-27.4,61.2-61.2v-127.4h-18.8v127.4Z"
        />
      </g>
    </svg>
  );
};
export default IconeCobertura;
