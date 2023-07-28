import Header from "../components/Header";
import mUm from "../assets/mUm.jpg";
import mdois from "../assets/mdois.jpg";
import mtres from "../assets/mtres.jpg";
import mquatro from "../assets/mquatro.jpg";
import mcinco from "../assets/mcinco.jpg";
import imgmacrame from "../assets/imgmacrame.png";
import styles from "../styles/pages/macrame.module.css";
import { Link } from "react-router-dom";

const Macrame = () => {
  const teste = [
    {
      image: mUm,
      produto: "Vestido Curto",
      nome: "Artesã Debora",
      link: "",
    },

    {
      image: mdois,
      produto: "Cropped Chale",
      nome: "Artesã Maiara",
      link: "",
    },

    {
      image: mtres,
      produto: "Bolsa de Lado",
      nome: "Artesã Jaciara",
      link: "https://web.facebook.com/jaciara.melo.121",
    },

    {
      image: mquatro,
      produto: "Suporte para plantas",
      nome: "Artesã Debora",
      link: "",
    },

    {
      image: mcinco,
      produto: "Cortina",
      nome: "Artesã Dandara",
      link: "",
    },
  ];

  return (
    <>
      <Header image={imgmacrame} />

      <div className={styles.container}>
        {teste.map((card) => (
          <div className={styles.card}>
            <img className={styles.imgmacrame} src={card.image} alt="" />
            <h3>{card.produto}</h3>
            <h4>{card.nome}</h4>
            <Link to={card.link} target="_blank">
              <button className={styles.buttonvendas}>Mais informações</button>
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.buttonCroche}>
        <button>
          <Link to="/Croche">Crochê </Link>
        </button>
      </div>
    </>
  );
};

export default Macrame;
