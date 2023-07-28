import Header from "../components/Header";
import styles from "../styles/pages/home.module.css";
import croche from "../assets/croche.jpg";
import macrame from "../assets/macrame.jpg";
import home from "../assets/slogan.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header image={home} />

      <div className={styles.texthome}>
        <h6>Mulheres Artesãs</h6>
        <p>
          A valorização do artesanato tem um impacto gigantesco na vida das
          artesãs. É a partir dela que você incentiva a criação de produtos
          únicos, com a essência e singularidade típica de cada produtor. Além
          disso, você também contribui para um mercado mais justo e sustentável.
          Ter o trabalho manual reconhecido e ainda estimular novas formas de
          consumo é o intuito deste website. Por isso, para fazer parte desta
          equipe pasta clicar em Cadastre-se!
        </p>
      </div>
      <div className={styles.cardshome}>
        <div className={styles.cardhome}>
          <button>
            <Link to="/Croche">Crochê </Link>
          </button>
          <img className={styles.imghome} src={croche} alt="" />
        </div>

        <div className={styles.cardhome}>
          <button>
            <Link to="/Macrame">Macramê</Link>
          </button>
          <img className={styles.imghome} src={macrame} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
