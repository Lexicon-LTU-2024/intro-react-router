import { ReactElement, ReactNode } from "react";
import { TButtonType, TButtonVariant } from "../interfaces";

interface IButtonProps {
  children: ReactNode;
  type?: TButtonType;
  variant?: TButtonVariant;
}

export function Button(props: IButtonProps): ReactElement {
  const classes: string[] = ["btn"];

  if (props.variant) {
    classes.push(getVariantClass(props.variant));
  }

  return (
    <button type={props.type} className={classes.join(" ")}>
      {props.children}
    </button>
  );
}

// ########## Utility functions to Button ##########

function getVariantClass(variant: TButtonVariant): string {
  switch (variant) {
    case "primary":
      return "primary";
    case "secondary":
      return "secondary";
  }
}
