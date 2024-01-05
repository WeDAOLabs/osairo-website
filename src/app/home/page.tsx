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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: 26,
            color: "green",
            marginTop: 200,
          }}
        >
          {tip}
        </h1>
        <br />
        <button onClick={onSetTip}>Click me!</button>
        <br />
        <Sample tip="Stone"></Sample>
      </div>
    </>
  );
}
