import { useTheme } from "@mui/material";
import * as React from "react";

const IconeAtencaoDica = (props: React.SVGProps<SVGSVGElement>) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 392.7"
      fill="none"
      {...props}
    >
      <g>
        <path
          fill={props.color || theme.palette.primary.main}
          d="M322.8,0H76.8C34.4,0,0,34.4,0,76.8v167c0,42.5,34.4,76.8,76.8,76.8h63.5l25.5,58.6c3.2,7.7,10.5,12.9,19,13.3h.8c8.1,0,15.4-4.9,19-12.1l30.7-59.9h87.8c42.5,0,76.8-34.4,76.8-76.8V76.8C399.6,34.4,365.2,0,322.8,0ZM371.3,244.3c0,26.7-21.8,48.5-48.5,48.5h-96.3c-5.3,0-10.1,2.8-12.5,7.7l-28.3,54.6-23.5-53.8c-2.4-5.3-7.3-8.5-12.9-8.5h-72.8c-26.7,0-48.5-21.8-48.5-48.5V77.2c0-26.7,21.8-48.5,48.5-48.5h245.9c26.7,0,48.5,21.8,48.5,48.5v167h.4Z"
        />
        <rect
          fill={props.color || theme.palette.primary.main}
          x="176.7"
          y="70.4"
          width="40"
          height="106.8"
        />
        <path
          fill={props.color || theme.palette.primary.main}
          d="M197,197.4c-5.3,0-11.7,1.6-17.8,7.7-3.2,3.2-7.7,8.9-7.7,17.8s4.4,14.6,7.7,17.8c5.7,5.7,12.5,7.7,17.8,7.7s12.5-2.4,17.8-7.7,7.3-9.7,7.3-17.8-2.8-13.3-6.9-17.4c-5.3-5.7-12.1-8.1-18.2-8.1Z"
        />
      </g>
    </svg>
  );
};

export default IconeAtencaoDica;
