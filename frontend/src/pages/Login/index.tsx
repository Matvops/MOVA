import styles from './style.module.css';
import { Heading } from "../../components/Heading";
import { useState } from 'react';
import { InputDefault } from '../../components/InputDefault';
import { ButtonDefault } from '../../components/ButtonDefault';

export function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <header className={styles.formHeader}>
          <Heading mode='dark'>Entrar</Heading>
          <p>Acesse com sua conta corporativa MOVA.</p>
        </header>

        <form className={styles.formBody} autoComplete="off">

          <div className={styles.inputs}>
            <InputDefault 
              value={email}
              handleValue={(e) => setEmail(e.target.value)}
              label='E-mail'
              type='email'
              placeholder='nome.sobrenome@mova.com.br'
              required
              autoComplete='off'
            />

            <InputDefault 
              value={password}
              handleValue={(e) => setPassword(e.target.value)}
              label='Senha'
              type='password'
              placeholder='•••••••'
              required
              autoComplete='new-password'
            />

            <ButtonDefault 
              text='Entrar'
              type='button'
            />
          </div>

        </form>

      </section>
    </div>
  );
}