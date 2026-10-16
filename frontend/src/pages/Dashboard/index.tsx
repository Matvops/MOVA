import { useContext } from 'react';
import { MainTemplate } from '../../templates/MainTemplate';
import styles from './style.module.css';
import { UserContext } from '../../contexts/UserContext/UserContext';

export function Dashboard() {

  const { user } = useContext(UserContext);
  return (
    <MainTemplate>
      <div className={styles.body}>
        <header className={styles.contentHeader}>
          <span className={styles.now}>{new Date().toLocaleDateString('pt-BR')}</span>
          <p className={styles.title}>Olá, {user.name}</p>
        </header>
      </div>
    </MainTemplate>
  )
}