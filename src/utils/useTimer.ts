import { useEffect, useRef, useState } from "react";

export const useTimer = () => {
  const [lapse, setLapse] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<number | undefined>();

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleRunning = () => {
    if (running) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - lapse;

      intervalRef.current = setInterval(() => {
        setLapse(Date.now() - startTime);
      }, 0);
    }
    setRunning((prev) => !prev);
  };

  const handleClear = () => {
    clearInterval(intervalRef.current);
    setLapse(0);
    setRunning(false);
  };
  return { lapse, running, handleRunning, handleClear };
};
