import { useTimer } from "../../utils/useTimer";

export const Timer = () => {
  const { lapse, running, handleClear, handleRunning } = useTimer();

  return (
    <>
      <h1>Time: {lapse}</h1>
      <button onClick={handleRunning}>{running ? "Stop" : "Start"}</button>
      <button onClick={handleClear}>Clear</button>
    </>
  );
};
