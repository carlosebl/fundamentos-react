import FamiliaMembro from "./FamiliaMembro";

const Familia = (props) => {
  return (
    <div>
      <FamiliaMembro nome="Carlos" sobrenome={props.sobrenome} />
      <FamiliaMembro nome="João" {...props} />
      <FamiliaMembro nome="Maria" sobrenome="Silva" />
    </div>
  );
};

export default Familia;
