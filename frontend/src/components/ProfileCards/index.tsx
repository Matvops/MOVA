import styles from './style.module.css';

export function ProfileCards() {

  return (
    <div className={styles.cardsProfile}>
      <div className={styles.cardProfile}>
        <div className={styles.cardProfileContent}>
          <h2 className={styles.profile}>Atendente</h2>
          <p className={styles.profileAbilities}>8 de 17 permissões</p>
        </div>
        <p className={styles.usersPeerProfile}>3 Usuários</p>
      </div>
      <div className={styles.cardProfile}>
        <div className={styles.cardProfileContent}>
          <h2 className={styles.profile}>Gestor</h2>
          <p className={styles.profileAbilities}>8 de 17 permissões</p>
        </div>
        <p className={styles.usersPeerProfile}>2 Usuários</p>
      </div>
      <div className={styles.cardProfile}>
        <div className={styles.cardProfileContent}>
          <h2 className={styles.profile}>Administrador</h2>
          <p className={styles.profileAbilities}>8 de 17 permissões</p>
        </div>
        <p className={styles.usersPeerProfile}>1 Usuários</p>
      </div>
    </div>
  );
}