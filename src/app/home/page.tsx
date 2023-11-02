"use client";

import { useEffect, useState } from "react";
import Sample from "../../components/sample.component";

export default function Home() {
  const [tip, setTip] = useState("Osairo Island, Adventures Go!");

  useEffect(() => {
    console.log("test client render", tip);
  }, []);

  const onSetTip = async () => {
    setTip(`Osairo, My treasure!`);

    return Promise.resolve();
  };

  return (
    <>
      <h1>{tip}</h1>
      <br />
      <button onClick={onSetTip}>Click me!</button>
      <br />
      <Sample tip="Stone"></Sample>
    </>
  );
}
