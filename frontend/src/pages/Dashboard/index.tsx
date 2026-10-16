import { useContext } from 'react';
import { MainTemplate } from '../../templates/MainTemplate';
import styles from './style.module.css';
import { UserContext } from '../../contexts/UserContext/UserContext';

export function Dashboard() {

  const { user } = useContext(UserContext);
  return (
    <MainTemplate>
      <div>
        <header>
          <span className={styles.now}>{new Date().toISOString()}</span>
          <p className={styles.now}>Olá, {user.name}</p>
          <p className={styles.now}>Perfil: {user.profile}</p>
        </header>
      </div>
    </MainTemplate>
  )
}