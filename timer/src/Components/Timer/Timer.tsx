import { useState } from "react";
import styles from "./Timer.module.css";

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout>();

  const onClickStart = () => {
    const intervalId = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    setTimerId(intervalId);
  };

  const onClickStop = () => {
    if (timerId) {
      clearInterval(timerId);
    }
  };

  const onClickReset = () => {
    setTime(0);
    onClickStop();
  };

  return (
    <>
      <div className={styles.time}>{time}</div>
      <button className={styles.buttons} onClick={onClickStart}>
        Start
      </button>
      <button className={styles.buttons} onClick={onClickStop}>
        Stop
      </button>
      <button className={styles.buttons} onClick={onClickReset}>
        Reset
      </button>
    </>
  );
};
