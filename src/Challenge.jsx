const Challenge = () => {
  let a = 5;
  let b = 10;
  const handleSoma = () => {
    let soma = a + b;
    console.log(soma);
  };
  return (
    <div>
      <h1>Valores:</h1>
      <p>
        {a} e {b}
      </p>
      <button onClick={handleSoma}>Somar no Console</button>
    </div>
  );
};

export default Challenge;
