import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/Produtos.module.css";
import Tittlepag from "./Tittlepag";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto").then((response) =>
      response.json().then((json) => setProdutos(json))
    );
  }, []);

  if (produtos === null) return null;

  return (
    <section className={styles.produtos + " animeLeft"}>
      <Tittlepag titulo="Ranek | Home" descricao="Página inicial de produtos" />
      {produtos.map((produto) => (
        <Link to={`produtos/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <p className={styles.nome}>{produto.nome}</p>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
