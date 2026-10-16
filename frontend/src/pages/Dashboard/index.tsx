import { useContext } from 'react';
import { MainTemplate } from '../../templates/MainTemplate';
import styles from './style.module.css';
import { UserContext } from '../../contexts/UserContext/UserContext';

export function Dashboard() {

  const { user } = useContext(UserContext);
  return (
    <MainTemplate>
      <div className={styles.content}>
        <header className={styles.contentHeader}>
          <span className={styles.now}>{new Date().toLocaleDateString('pt-BR')}</span>
          <p className={styles.title}>Olá, {user.name}</p>
        </header>

        <main className={styles.contentBody}>
          <section className={styles.cards}>
            <div className={styles.card}>
              <p className={styles.cardQuantity}>3</p>
              <p className={styles.cardDescription}>Locações em andamento</p>
            </div>

            <div className={styles.card}>
              <p className={styles.cardQuantity}>1</p>
              <p className={styles.cardDescription}>Devoluções previstas hoje</p>
            </div>


            <div className={styles.card}>
              <p className={styles.cardQuantity}>1</p>
              <p className={styles.cardDescription}>Veículos em manutenção</p>
            </div>

            <div className={styles.card}>
              <p className={styles.cardQuantity}>4</p>
              <p className={styles.cardDescription}>Veículos disponíveis</p>
            </div>

          </section>


        </main>
      </div>
    </MainTemplate>
  )
}