const CarDetails = ({ brand, km, color }) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>Marca: {brand}</ul>
      <ul>KM: {km}</ul>
      <ul>Cor: {color}</ul>
    </div>
  );
};

export default CarDetails;
