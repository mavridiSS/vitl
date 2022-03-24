import React from "react";
import styles from "./Container.module.css";

interface Props {
  header: string;
  children: React.ReactNode;
}

export default function Container({ header, children }: Props) {
  return (
    <div>
      <h2>{header}</h2>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
