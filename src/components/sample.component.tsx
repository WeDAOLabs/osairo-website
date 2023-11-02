"use client";

import { useEffect, useState } from "react";

export default function Sample(props: any) {
  const [mineItem, setMineItem] = useState(props.tip);
  const [tip, setTip] = useState(`Mine: ${mineItem}`);
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("render mine component", mineItem);
  }, []);

  const onMineClicked = async () => {
    if (count === 2) {
      setMineItem(`${mineItem}s`);
    }
    setTip(`I've got ${count} ${mineItem}.`);
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={onMineClicked}>{tip}</button>
    </>
  );
}
