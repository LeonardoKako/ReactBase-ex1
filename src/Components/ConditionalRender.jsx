import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("joao");

  return (
    <div>
      <h1>Isso sera exibido?</h1>
      {x && <p>Se x for true, sim</p>}
      {!x && <p>Se x for false, sim</p>}
      {name === "joao" ? (
        <div>
          <p>Nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
      <button onClick={() => setName("leleo")}>Clique</button>
    </div>
  );
};

export default ConditionalRender;
