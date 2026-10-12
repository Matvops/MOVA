import { MdKeyboardArrowLeft } from 'react-icons/md';
import styles from './style.module.css';

type NavBarProps = {
  visible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export function NavBar({ visible, setVisible }: NavBarProps) {

  return (
    <>
      {visible && (
        <div className={styles.nav}>
          <header className={styles.navHeader}>
            <h1>MOVA</h1>
            <MdKeyboardArrowLeft className={styles.returnIcon} onClick={() => setVisible(prevState => !prevState)} />
          </header>
        </div>
      )}
    </>
  );
}