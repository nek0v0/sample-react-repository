import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello, React!</h1>
      <p>現在のカウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        カウントアップ
      </button>
    </div>
  );
}

export default App;
