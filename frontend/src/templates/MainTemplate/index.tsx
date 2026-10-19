import { useState } from 'react';
import { NavBar } from '../../components/NavBar';
import styles from './style.module.css';
import { Header } from '../../components/Header';

type MainTemplateProps = {
  children: React.ReactNode
}

export function MainTemplate({ children }: MainTemplateProps) {

  const [navVisible, setNavVisible] = useState(true);

  return (
    <div className={styles.template}>

      <Header
        navbarVisible={navVisible}
        setNavbarVisible={setNavVisible}
      />

      <NavBar
        visible={navVisible}
        setVisible={setNavVisible}
      />

      <div className={styles.body}>
        {children}
      </div>
    </div>
  );
}