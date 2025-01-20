import { useState } from "react";

const Challenge = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [soma, setSoma] = useState(0);

  const handleSoma = () => {
    setSoma(a + b);
    console.log(a + b);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Digite um Número"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Digite um Número"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />
      <h1>Valores:</h1>
      <p>
        {a} e {b}
      </p>
      <button onClick={handleSoma}>Somar no Console</button>
      {soma !== 0 && <p>{soma}</p>}
    </div>
  );
};

export default Challenge;
