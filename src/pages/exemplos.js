import { styles } from "ansi-colors";
import { useRouter } from "next/router";

export default function Exemplos() {
  const router = useRouter();
  const darkMode = router.query.darkMode;
  return (
    <div className={styles.all}>
      <h1>Veja alguns exemplos:</h1>
      <div className={styles.info}>
        <img
          src="/pages.png"
          alt="Exemplos de sites com seus respectivos designs em Mobile"
        />
        <div className={styles.text}>
          <h1>
            Lembrando que tudo pode ser escolhido por você, as cores e imagens
            de fundo são meramente ilustrativas.
          </h1>
          <h2>
            Cada design é acompanhado de sua versão mobile (responsividade)
          </h2>
          <p>
            Ordem dos exemplos:
            <br />
            Vitrine, Landing Page, Site Pessoal.
          </p>
        </div>
      </div>
    </div>
  );
}
