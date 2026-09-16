// @ts-nocheck
import React, { FunctionComponent } from "react";

export interface IconBaseProps {
  size?: string;
  viewBoxSize?: string;
  className?: string;
  color?: string;
  children?: React.ReactNode;
}

const IconBase: FunctionComponent<IconBaseProps> = ({
  color = "#6b6b6b",
  size = "16",
  viewBoxSize = "24",
  children,
  ...options
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      color={color}
      {...options}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
    >
      {children}
    </svg>
  );
};

export default IconBase;
