import type { Profile } from '../../interfaces/Profile';
import styles from './style.module.css';

type ProfileCardsType = {
  profiles: Profile[],
  totalQuantityAbilities: number
}

export function ProfileCards({ profiles, totalQuantityAbilities }: ProfileCardsType) {

  const listProfiles = () => {

    return profiles?.map(profile => {

      const name = profile.name.charAt(0) + profile.name.slice(1).toLowerCase();
      
      return (
        <div className={styles.cardProfile}>
          <div className={styles.cardProfileContent}>
            <h2 className={styles.profile}>{name}</h2>
            <p className={styles.profileAbilities}>
              {profile.abilities?.length} de {totalQuantityAbilities} permissões
            </p>
          </div>
          <p className={styles.usersPeerProfile}>{profile.users?.length} Usuários</p>
        </div>
      );
    });

  }

  return (
    <div className={styles.cardsProfile}>
      {listProfiles()}
    </div>
  );
}