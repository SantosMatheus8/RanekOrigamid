import React from "react";
import styles from "./css/Contato.module.css";
import imagem from "../img/contato.jpg";
import Tittlepag from "./Tittlepag";

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <Tittlepag titulo="Ranek | Contato" descricao="Página de contato" />
      <img src={imagem} alt="Máquina de escrever" className={styles.img} />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.informacoes}>
          <li>matheus.melo2008@hotmail.com</li>
          <li>(62)99999-9999</li>
          <li>Rua 239</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
