import "./styles.css";
import { useState } from "react";
export default function App() {
  const incre = () => {
    setcount(count + 1);
  };
  const [count, setcount] = useState(0);
  return (
    <div className="App">
      <p>count:{count}</p>
      <button onClick={incre}>+</button>
    </div>
  );
}
