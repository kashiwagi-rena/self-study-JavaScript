import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <LinkButton/>
    </>
  );
}

function LinkButton() {
  const [count, setCount] = useState(999);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <span className="linkButton" onClick={handleClick}>
      ❤︎ {count}
    </span>
  );
}

export default App;
