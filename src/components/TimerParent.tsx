import { useState } from "react";
import { Timer } from "./Timer";

export const TimerParent = () => {
  const [milliseconds, setMilliseconds] = useState(1000);

  return (
    <>
      <span className="mt-5">Milisegundos 1000</span>
      <br />
      <button
        className="btn btn-outline-success"
        onClick={() => setMilliseconds(1000)}
      >
        1000
      </button>
      <button
        className="btn btn-outline-success"
        onClick={() => setMilliseconds(2000)}
      >
        2000
      </button>
      <br />
      <Timer milliseconds={milliseconds} />
    </>
  );
};
