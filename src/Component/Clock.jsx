import { useState } from "react";

export default function Clock() {
  const [clock, setClock] = useState(0);
  let clTime;

  const handleClock = () => {
    let time = new Date();
    clTime = time.toLocaleTimeString();
  };

  setTimeout(() => {
    setClock(clTime);
  }, 1000);

  handleClock();

  return (
    <>
      <div style={{ padding: "10px" }}></div>
      <div>{clock}</div>
      <div style={{ padding: "10px" }}></div>
    </>
  );
}
