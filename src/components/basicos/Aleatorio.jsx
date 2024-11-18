const Aleatorio = (props) => {
  const { min, max } = props;

  const aleatorio = parseInt(Math.random() * (max - min)) + min;

  return (
    <div>
      <h2>Número Aleatório</h2>
      <p>Mínimo: {min}</p>
      <p>Máximo: {max}</p>
      <p>
        O número sorteado é: <strong>{aleatorio}</strong>
      </p>
    </div>
  );
};

export default Aleatorio;
