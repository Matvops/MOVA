import styles from './style.module.css';
import { useState } from 'react';
import { NavBar } from '../NavBar';
import { Header } from '../Header';


export function MainHeader() {

  const [navVisible, setNavVisible] = useState(false);

  return (
    <div className={styles.fixed}>
      <NavBar
        visible={navVisible}
        setVisible={setNavVisible}
      />

      <Header
        navbarVisible={navVisible}
        setNavbarVisible={setNavVisible}
      />
    </div>
  )
}