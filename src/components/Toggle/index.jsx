import { useState } from "react";
import styles from "./index.module.css";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => setIsOn((prev) => !prev);

  return (
    <div className={styles.Toggle}>
      <span className={styles["Toggle-info"]}>Useless toggle</span>
      <input
        type="checkbox"
        className={styles["Toggle-checkbox"]}
        checked={isOn}
        onChange={handleToggle}
        id="toggle-switch"
      />
      <label className={styles["Toggle-label"]} htmlFor="toggle-switch">
        <span className={styles["Toggle-switch"]} />
      </label>
    </div>
  );
};

export default Toggle;
