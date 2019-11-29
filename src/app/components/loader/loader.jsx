import React from "react";

import styles from "./loader.module.scss";

const Loader = () => (
  <div className={styles.center}>
    <div className={styles["lds-facebook"]}>
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Loader;
