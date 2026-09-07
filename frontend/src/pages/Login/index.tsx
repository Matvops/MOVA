import styles from './style.module.css';
import { Heading } from "../../components/Heading";

export function Login() {

  return (
    <div className={styles.body}>
      <section className={styles.banner}>
        <header>
          <Heading>MOVA</Heading>
        </header>

        <main className={styles.bannerMain}>
          <h1>Toda a operação da frota, em um só lugar.</h1>
          <p>Cadastros, locações, devoluções e manutenção — organizados para quem atende o cliente na linha de frente todos os dias.</p>
        </main>

        <footer className={styles.footer}>MOVA Locações · Curitiba, PR</footer>
      </section>

      <section className={styles.form}>
        <Heading mode='dark'>Entrar</Heading>
      </section>
    </div>
  );
}