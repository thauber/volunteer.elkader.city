import { useState } from "react";

export default function Home() {
  const [reactiveVariable, setReactiveVarible] = useState(0);

  function handleClick() {
    setReactiveVarible(reactiveVariable+1);
  }

  return (
    <div>
      <button onClick={handleClick}>CLICK ME</button>
      <p>CLICKED {reactiveVariable} TIMES</p>
    </div>
  )
}
