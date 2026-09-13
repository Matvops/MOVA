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

        <footer className={styles.footer}>
          <a 
            href="https://www.google.com/maps?client=ubuntu-sn&hs=2Ca&sca_esv=8d8a095dd594124b&channel=fs&output=search&q=parque+barigui+maps&source=lnms&fbs=ABfTbFVGaQeaqnsRPI5sOMG32KszjzN4g3YOmrBeWW1F-m8tPgnzKxLxr3nZIcZpr1Oa9JyMX7dTJh6X9MktrFyyA-CZCL8bNOmdCvMjTZCAApo4DGcDfFV6MxE9vwLh6lP2Gyo4JGVy4d8sLtbIDXWcovwwA4mc3LmX8QKRPqPIkumUQOTNCmdq2-NxeSphaebaBeY_Jev0D1-V817s0Dit--t6JRSIgA&entry=mc&ved=1t:200715&ictx=111" 
            target='_blank'
          >
            MOVA Locações · Curitiba, PR
          </a>
        </footer>
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