import { IoReorderThreeOutline } from 'react-icons/io5';
import styles from './style.module.css';
import { CiSearch } from 'react-icons/ci';
import { UserAvatar } from '../UserAvatar';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext/UserContext';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { AnimatePresence, motion } from "motion/react";


export function MainHeader() {

  const { user } = useContext(UserContext);
  const [navVisible, setNavVisible] = useState(false);

  return (
    <div className={styles.fixed}>
      <AnimatePresence initial={false}>
        {navVisible && (
          <motion.div
            initial={{ x: "-100vw", opacity: 1, scale: 1 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: "-100vw", opacity: 0, scale: 1 }}
            transition={{type: 'tween', duration: 0.1}}
            key={'nav'}
            className={styles.nav}
          >
            <header className={styles.navHeader}>
              <h1>MOVA</h1>
              <MdKeyboardArrowLeft className={styles.returnIcon} onClick={() => setNavVisible(prevState => !prevState)} />
            </header>
          </motion.div>
        )}
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