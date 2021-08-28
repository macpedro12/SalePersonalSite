import styles from "../styles/index.module.scss";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import { useState } from "react";

const siteTypes = [
  {
    name: "Vitrine",
    img: "/Shop.svg",
    description:
      "Tipo de site para aqueles que querem expor seus produtos online de uma forma adequada.",
  },
  {
    name: "Landing Page",
    img: "/Web Design.svg",
    description:
      "Tipo de site para aqueles que querem atrair clientes para seu negócio, utilizando frases e botões que estimulem o clique. ",
  },
  {
    name: "Site pessoal",
    img: "/Portfolio.svg",
    description:
      "Tipo de site para aqueles que querem um meio de exibir os seus trabalhos, atividades e projetos pessoais.",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? styles.alldark : styles.all}>
      <div className={styles.nightMode}>
        <button onClick={()=>setDarkMode(false)} className={darkMode ? styles.not : styles.btSelect}>
          <img src="/on.svg" />
        </button>
        <button onClick={()=>setDarkMode(true)} className={!darkMode ? styles.not : styles.btSelect}>
          <img className={styles.black} src="/off.svg" />
        </button>
      </div>
      <div className={styles.banner}>
        <h1 data-aos="zoom-in">
          Quer um site <u className={styles.colorChange}>barato</u> e que atenda
          suas necessidades?
        </h1>

        <button data-aos="fade-right">
          <Link href="https://api.whatsapp.com/send?phone=5521979395510">
            <a target="_blank">Peça já seu orçamento!!</a>
          </Link>
        </button>
      </div>
      <div className={styles.info}>
        <div className={styles.sites}>
          <h2 data-aos="fade-right">Sites:</h2>

          <div className={styles.allTypes}>
            {siteTypes.map((site) => (
              <div
                data-aos="slide-right"
                className={styles.singleType}
                key={site.name}
              >
                <img src={site.img} />
                <h1>{site.name}</h1>
                <p>{site.description}</p>
              </div>
            ))}
          </div>
          <Link href={{pathname:"/exemplos", query:{darkMode}}}><button className={styles.bt}>Exemplos...</button></Link>
        </div>
        <div className={styles.responsive}>
          <div className={styles.text}>
            <div className={styles.title} data-aos="fade-down">
              <h1>
                Garantido design responsivo{" "}
                <strong>
                  <i>para qualquer tipo de dispositivo</i>
                </strong>
              </h1>
              <img src="/!.svg" />
            </div>

            <h2 data-aos="fade-down">
              Por que essa garantia é de extrema importância?
            </h2>
            <p data-aos="fade-down">
              Simples, a responsividade deixa o seu site moderno e adaptado para
              qualquer dispositivo, assim aumentando o público que pode
              acessá-lo, pois fornece sempre um site acessível e bem-apresentado
              seja no Desktop ou Mobile.
            </p>
          </div>
          <img
            data-aos="fade-up"
            className={styles.multiple}
            src="/Multiple Devices.svg"
          />
        </div>
        <div className={styles.contrato} data-aos="slide-right">
          <h2>Por que contratar?</h2>
          <p>
            Aqui o foco é a satisfação do cliente, ou seja, você estará
            participando no desenvolvimento do seu site. Você poderá escolher
            cada estilo do seu site, desde a escolha de cores ao modelo de cada
            componente.
          </p>
        </div>
        <div className={styles.desenvolvido} data-aos="zoom-in">
          <h2>O que é desenvolvido?</h2>
          <img src="/Arrow 1.svg" />
          <p>
            O foco é o desenvolvimento de sites estáticos, que são perfeitos
            para quem deseja criar uma vitrine para seus produtos ou projetos
            pessoais.
          </p>
        </div>
      </div>
      <div className={styles.contato}>
        <div className={styles.ctitle}>
          <h1 data-aos="fade-down">Quer atingir um público maior?</h1>
          <h1 data-aos="fade-down">Pare de perder tempo!!</h1>
          <h1 data-aos="fade-down">E consulte a tabela de preço.</h1>
        </div>
        <div className={styles.contato2} data-aos="slide-right">
          <h2>Mande mensagem para o Whatsapp:</h2>
          <div className={styles.contato3}>
            <Link href="https://api.whatsapp.com/send?phone=5521979395510">
              <a target="_blank">
                <img src="/WhatsApp.svg" />
              </a>
            </Link>

            <p>(21) 97939 - 5510</p>
          </div>
        </div>
        <div className={styles.contato2} data-aos="slide-right">
          <h2>Ou para o e-mail:</h2>
          <div className={styles.contato3}>
            <img src="/Email.svg" />
            <p>dev.pedromacedo@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
