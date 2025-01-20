const UserDetails = ({ name, age, job }) => {
  return (
    <>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      <p>Profissão: {job}</p>
      {age >= 18 ? (
        <p>Pode tirar a Carteira de Habilitação.</p>
      ) : (
        <p>Não pode tirar a Carteira de Habilitação, muito novo!</p>
      )}
    </>
  );
};

export default UserDetails;
