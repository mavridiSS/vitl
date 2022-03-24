import React from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

export type Variant = "primary" | "secondary";

interface OwnProps {
  label: string;
  variant?: Variant;
}

type Props = OwnProps &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;

export default function Button({
  label,
  variant = "primary",
  ...other
}: Props) {
  return (
    <button className={clsx(styles.base, styles[variant])} {...other}>
      {label}
    </button>
  );
}
