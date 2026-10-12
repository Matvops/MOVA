import { MdKeyboardArrowLeft } from 'react-icons/md';
import styles from './style.module.css';
import { motion } from 'motion/react';

type NavBarProps = {
  visible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export function NavBar({ visible, setVisible }: NavBarProps) {

  return (
    <>
      {visible && (
        <motion.div
          initial={{ x: "-100vw", opacity: 1, scale: 1 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: "-100vw", opacity: 0, scale: 1 }}
          transition={{ type: 'tween', duration: 0.1 }}
          key={'nav'}
          className={styles.nav}
        >
          <header className={styles.navHeader}>
            <h1>MOVA</h1>
            <MdKeyboardArrowLeft className={styles.returnIcon} onClick={() => setVisible(prevState => !prevState)} />
          </header>
        </motion.div>
      )}
    </>
  );
}