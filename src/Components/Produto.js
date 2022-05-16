import React from "react";
import { useParams } from "react-router-dom";
import styles from "./css/Produto.module.css";
import Tittlepag from "./Tittlepag";

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [carregando, setCarregando] = React.useState(false);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setCarregando(true);
        const responte = await fetch(url);
        const json = await responte.json();
        setProduto(json);
      } catch (err) {
        console.log("Ocorreu um erro");
      } finally {
        setCarregando(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}
    `);
  }, [id]);

  if (carregando) return <div className="carregando"></div>;
  if (produto === null) return null;
  return (
    <section className={styles.produto + " animeLeft"}>
      <Tittlepag
        titulo={`Ranek | ${produto.nome}`}
        descricao="Página do produto"
      />

      <div>
        {produto.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
