import styles from "./Avatar.module.css";

import React from "react";

export default function Avatar(src) {
  return (
    <div className={styles.avatar}>
      <img src={src.src} alt="avatar img" />
      {console.log(src)}
    </div>
  );
}
