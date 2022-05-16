import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/Produtos.module.css";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto").then((response) =>
      response.json().then((json) => setProdutos(json))
    );
  }, []);
  if (produtos === null) return null;
  console.log(produtos);
  return (
    <section className={styles.produtos + " animeLeft"}>
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <p className={styles.nome}>{produto.nome}</p>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
