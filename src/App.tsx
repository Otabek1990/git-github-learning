import { useState } from "react";

function App() {
  const [son, setSon] = useState(10);
  return (
    <div>
      <h1>demo abdukarim</h1>
      <h1>hello app</h1>
      <h1>Islom</h1>
      <h1>Otabek</h1>
      <h1>Demo Mansur</h1>
      <h1>Durbek</h1>
      <h1>{son}</h1>
      <button onClick={() => setSon(son + 1)}>enter</button>
      <h1>Mansur</h1>
    </div>
  );
}

export default App;
