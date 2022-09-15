import { useEffect, useState } from "react";


const StopWatch = () => {
  const [count, setCount] = useState(360000);
  const [isStopped, setIsStopped] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isStopped) setCount((c) => c + 10);
    }, 10);
    return () => clearInterval(interval);
  }, [isStopped]);

  const onClickReset = () => {
    setCount(0);
  };

  const onClickStartOrStop = () => {
    setIsStopped((s) => !s);
  };

  
  const min = ("0" + Math.floor((count / 60000) % 60)).slice(-2);
  const second = ("0" + Math.floor((count / 1000) % 60)).slice(-2);
  const mili = ("0" + ((count / 10) % 100)).slice(-2);
  return (
    <div>
      <h1>
        {min}:{second}:{mili}
      </h1>
      <br></br>
      <button style={{ margin: 10, padding: 10 }} onClick={onClickReset}>
        RESET
      </button>
      <button onClick={onClickStartOrStop} style={{ margin: 10, padding: 10 }}>
        {isStopped ? "START" : "STOP"}
      </button>
    </div>
  );
};

export default StopWatch;
