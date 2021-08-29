import { useEffect, useState } from "react";

import styles from "../styles/exemplos.module.scss";
import "aos/dist/aos.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Exemplos({darkMode,newDarkMode}) {
  
  
  return (
    <div className={darkMode ? styles.alldark : styles.all}>
      <div className={styles.nightMode}>
        <button
          onClick={newDarkMode}
          className={darkMode ? styles.not : styles.btSelect}
        >
          <img src="/on.svg" />
        </button>
        <button
          onClick={newDarkMode}
          className={!darkMode ? styles.not : styles.btSelect}
        >
          <img className={styles.black} src="/off.svg" />
        </button>
      </div>
      <h1 className={styles.title}>Veja alguns exemplos:</h1>
      <div className={styles.info}>
        <img
          src="/pages.png"
          alt="Exemplos de sites com seus respectivos designs em Mobile"
          className={styles.img}
          data-aos="slide-right"
          data-aos-duration="1000"
        />
        <div className={styles.text}>
          <h1 data-aos="slide-up" data-aos-duration="1000">
            Lembrando que tudo pode ser escolhido por você, as cores e imagens
            de fundo são meramente ilustrativas.
          </h1>
          <h2  data-aos="slide-up" data-aos-duration="1250">
            Cada design é acompanhado de sua versão mobile (responsividade)
          </h2>
          <p  data-aos="slide-up"data-aos-duration="1500">
            Ordem dos exemplos:
            <br />
            Vitrine, Landing Page, Site Pessoal.
          </p>
          <div className={styles.buttons}>
            <Link href="/">
              <a className={styles.bt}>Tela Inicial</a>
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=5521979395510">
              <a target="_blank">
                <img src="/WhatsApp.svg" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
