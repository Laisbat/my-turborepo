import * as React from "react";

interface SvgIconProps {
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  color?: string;
  size?: number | string;
  testid?: string;
}

const SvgIcon = ({
  icon,
  color = "currentColor",
  size = 24,
  testid = "svg-icon",
}: SvgIconProps) => {
  return React.cloneElement(icon, {
    ["data-testid"]: testid,
    width: size,
    height: size,
    fill: color,
  } as React.SVGProps<SVGSVGElement>);
};

export default SvgIcon;
