import Header from "../components/Header"
import style from '../styles/pages/quemsomos.module.css'
import quemsomoscroche from '../assets/quemsomoscroche.jpg'
import quemsomosmacrame from '../assets/quemsomosmacrame.jpg'
import quemsomosnaira from '../assets/quemsomosnaira.jpeg'
import quemsomosimg from '../assets/quemsomosimg.png'

const Quemsomos = () => {
  return (
    <>
      <Header 
        image={quemsomosimg}
      />

      <main>

        <div className={style.cardUm}>
          <img className={style.quemSomosCroche} src={quemsomoscroche} />
          <p className={style.texto}>A origem do Crochê é incerta, algumas pesquisas apontam que ele surge na 
          pré-história, outras acreditam que foi 1500 anos antes de Cristo. O crochê como conhecemos hoje, 
          tem origem no século XVI, de acordo com alguns pesquisadores, começou na Arábia, no Oriente Médio, 
          chegando ao mundo todo através das rotas do Mediterrâneo. Em outra teoria sua origem se dar na China, 
          pois os chineses faziam bonecas com essa técnica e, ao que tudo indica, antes de existir indícios da prática 
          no Oriente Médio. </p>
        </div>

        <div className={style.cardDois}>
          <p className={style.texto}>A ideia de trançar, amarrar e dar nós em fibras vem lá da pré-história, quando 
          nossos antepassados precisavam criar coberturas de proteção e vestimentas com o que houvesse disponível. Este tipo 
          de tecelagem manual foi sendo aprimorado ao longo dos anos e há registros antigos sobre ele na Turquia, China e 
          Egito, com grande destaque entre os árabes.  Segundo algumas teorias, macramê tem origem na palavra turca 
          “migramach”, que significa tecido com franjas ou tramas ornamentais. Já aqui no Brasil, acredita-se que o macramê 
          veio junto com os portugueses na época da colonização.   </p>
          <img className={style.quemSomosMacrame} src={quemsomosmacrame} />
        </div>

        <div className={style.cardTres}>
          <img className={style.quemSomosNaira} src={quemsomosnaira} />
          <p className={style.texto}>Sou Náira Nogueira, tenho 28 anos, sou formada em Língua Portuguesa pela 
            Universidade do Estado da Bahia, oriunda de uma pequena cidade do interior da Bahia, chamada Governador Mangabeira, 
            conheci a Reprograma através 
            de uma amiga que já tinha feito o curso de Front-End. Buscando estabilidade financeira e um novo objetivo de vida, 
            entrei no mundo da Tecnologia sem nunca ter tido contato com o mais simples desenvolvimento de códigos, 
            hoje tenho conhecimentos básicos sobre html, css, JS, React, Git Bash e Github. Criei esse site com o intuito de 
            ajudar mulheres negras e/ou pobres que trabalhem com o artesanato e estejam precisando impussionar as suas vendas, 
            este website é desenvolvido para divulgar esses trabalhos de forma totalmente gratuita.</p>
        </div>

      </main>

      <div className={style.title}>
      <h1>Entre em contato conosco:</h1>
      </div>
      
      <div className={style.nairaRedes}>
        <button>
          <a href="https://www.linkedin.com/in/n%C3%A1ira-nogueira-ba6257174/" target="_blank">Linkedin</a>    
        </button>
        <button>
          <a href="https://www.facebook.com/naira.nogueira.140" target="_blank">Facebook</a>
        </button>
        <button>
          <a href="https://github.com/Nairanogueira" target="_blank">GitHub</a>
        </button>
        <button>
          <a href="https://www.instagram.com/naira.nog/" target="_blank">Instagram</a>
        </button>
      </div>
        </>
  )
}

export default Quemsomos