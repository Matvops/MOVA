import { IoReorderThreeOutline } from 'react-icons/io5';
import styles from './style.module.css';
import { CiSearch } from 'react-icons/ci';
import { UserAvatar } from '../UserAvatar';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext/UserContext';

type HeaderProps = {
  navbarVisible: boolean,
  setNavbarVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export function Header({ navbarVisible, setNavbarVisible }: HeaderProps) {

  const { user } = useContext(UserContext);

  return (
    <header className={`${styles.header} ${navbarVisible === true ? styles.navDrawerHidden : ''}`}>
      <div className={styles.headerNavigation}>
        {!navbarVisible && (
          <div onClick={() => setNavbarVisible(prevState => !prevState)}>
            <IoReorderThreeOutline className={styles.navDrawer} />
          </div>
        )}
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
  );
}