import { useState } from "react";

function App() {
  const [son, setSon] = useState(10);
  return (
    <div>
      <h1>demo abdukarim</h1>
      <h1>hello app</h1>
      <h1>Islom</h1>
      <h1>Otabek</h1>
      <h1>Durbek</h1>
      <h1>{son}</h1>
      <button onClick={() => setSon(son + 1)}>enter</button>
    </div>
  );
}

export default App;
