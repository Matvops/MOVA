import { MdKeyboardArrowLeft } from 'react-icons/md';
import styles from './style.module.css';
import { LuHouse } from 'react-icons/lu';
import { LiaCarSideSolid } from 'react-icons/lia';
import { FiUsers } from 'react-icons/fi';
import { GrDocumentText } from 'react-icons/gr';
import { BsWrenchAdjustableCircle } from 'react-icons/bs';

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

          <main className={styles.content}>
            <span className={styles.titleContent}>Navegação</span>
            <ul className={styles.sections}>
              <li><LuHouse className={styles.icon} /> Operação</li>
              <li><LiaCarSideSolid className={styles.icon} /> Frota</li>
              <li><FiUsers className={styles.icon} /> Clientes</li>
              <li><GrDocumentText className={styles.icon} /> Locações</li>
              <li><BsWrenchAdjustableCircle className={styles.icon} /> Manutenção</li>
            </ul>
          </main>
        </div>
      )}
    </>
  );
}