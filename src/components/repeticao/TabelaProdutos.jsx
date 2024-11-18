import "./TabelaProdutos.css";
import "../../data/produtos";
import produtos from "../../data/produtos";

const TabelaProdutos = (props) => {
  function getProdutos() {
    return produtos.map((produto, i) => {
      return (
        <tr key={produto.id} className={i % 2 === 0 ? "Par" : "Impar"}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>R$ {produto.preco},90</td>
        </tr>
      );
    });
  }

  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Produto</th>
            <th scope="col">Preço</th>
          </tr>
        </thead>
        <tbody>{getProdutos()}</tbody>
      </table>
    </div>
  );
};

export default TabelaProdutos;
