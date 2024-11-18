import "./App.css";

import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";
import Familia from "./components/basicos/Familia";

const App = () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#04 - Componentes com Filhos" color="#00C8F8">
        <Familia sobrenome="Leite" />
      </Card>
      <Card titulo="#03 - Desafio Aleatório" color="#FA6900">
        <Aleatorio min={0} max={60} />
      </Card>
      <Card titulo="#02 - Com Parâmetro" color="#E94C6F">
        <ComParametro
          titulo="Segundo Componente"
          subtitulo="Com parâmetros"
          paragrafo="Com propriedades."
        />
      </Card>
      <Card titulo="#01 - Primeiro Componente" color="#E8B71A">
        <Primeiro />
      </Card>
    </div>
  </div>
);

export default App;
