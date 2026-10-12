import { IoReorderThreeOutline } from 'react-icons/io5';
import styles from './style.module.css';
import { CiSearch } from 'react-icons/ci';
import { UserAvatar } from '../UserAvatar';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext/UserContext';
import { AnimatePresence } from "motion/react";
import { NavBar } from '../NavBar';


export function MainHeader() {

  const { user } = useContext(UserContext);
  const [navVisible, setNavVisible] = useState(false);

  return (
    <div className={styles.fixed}>
      <AnimatePresence initial={false}>
        <NavBar 
          visible={navVisible} 
          setVisible={setNavVisible} 
        />
      </AnimatePresence>
      <header className={styles.header}>

        <div className={styles.headerNavigation}>
          {!navVisible && (
            <div onClick={() => setNavVisible(prevState => !prevState)}>
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
    </div>
  )
}