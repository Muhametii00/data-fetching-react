import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const reset = () => setCount(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  useEffect(() => {
    setTimeout(increment, 1000);
  }, [count]);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};
