import Header from "../components/Header";
import Um from "../assets/um.jpg";
import Dois from "../assets/dois.jpg";
import Tres from "../assets/tres.jpg";
import Quatro from "../assets/quatro.jpg";
import Cinco from "../assets/cinco.jpg";
import imgcroche from "../assets/imgcroche.png";
import styles from "../styles/pages/croche.module.css";
import { Link } from "react-router-dom";

const Croche = () => {
  const teste = [
    {
      image: Um,
      produto: "Cropped Marrom",
      nome: "Artesã Sarlete",
      link: "",
    },

    {
      image: Dois,
      produto: "Caminhho de Mesa",
      nome: "Artesã Margarida",
      link: "",
    },

    {
      image: Tres,
      produto: "Conjunto Cozinha",
      nome: "Artesã Dandara",
      link: "",
    },

    {
      image: Quatro,
      produto: "Bolsa Bag",
      nome: "Artesã Jaciara",
      link: "https://web.facebook.com/jaciara.melo.121",
    },

    {
      image: Cinco,
      produto: "Tênis Feminino",
      nome: "Artesã Maria",
      link: "",
    },
  ];

  return (
    <>
      <Header image={imgcroche} />

      <div className={styles.container}>
        {teste.map((card) => (
          <div className={styles.card}>
            <img className={styles.imgcroche} src={card.image} alt="" />
            <h3>{card.produto}</h3>
            <h4>{card.nome}</h4>
            <Link to={card.link} target="_blank">
              <button className={styles.buttonvendas}>Mais informações</button>
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.buttonMacrame}>
        <button>
          <Link to="/Macrame">Macramê</Link>
        </button>
      </div>
    </>
  );
};

export default Croche;
