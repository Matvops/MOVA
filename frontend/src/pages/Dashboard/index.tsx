import { IoReorderThreeOutline } from 'react-icons/io5';
import styles from './style.module.css';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext/UserContext';
import { CiSearch } from 'react-icons/ci';
import { UserAvatar } from '../../components/UserAvatar';

export function Dashboard() {

  const { user } = useContext(UserContext);

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <div className={styles.headerNavigation}>
          <IoReorderThreeOutline className={styles.navDrawer} />
          <div className={styles.search}>
            <CiSearch className={styles.searchIcon} />
            <input type="text" className={styles.input} />
          </div>
        </div>
        <div className={styles.headerUserInfo}>
          <p className={styles.profile}>{user.profile}</p>
          <p>
            <UserAvatar name={user.name} />
          </p>
        </div>
      </header>
    </div>
  )
}