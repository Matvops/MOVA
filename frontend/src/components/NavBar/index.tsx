import { MdKeyboardArrowLeft, MdOutlineLogout } from 'react-icons/md';
import styles from './style.module.css';
import { LuHouse, LuUserRoundCog } from 'react-icons/lu';
import { LiaCarSideSolid } from 'react-icons/lia';
import { FiUsers } from 'react-icons/fi';
import { GrDocumentText } from 'react-icons/gr';
import { BsWrenchAdjustableCircle } from 'react-icons/bs';
import { AuthService } from '../../services/auth/AuthService';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext/UserContext';
import { initialUserValue } from '../../contexts/UserContext/initialUserValue';
import { useNavigate } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';

type NavBarProps = {
  visible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export function NavBar({ visible, setVisible }: NavBarProps) {

  const service = new AuthService;
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function logout() {
    

    const response = await service.logout(user.user);

    if(response.status === false) {
      alert(response.message);
      return;
    }

    sessionStorage.removeItem('token');
    setUser(initialUserValue);
    navigate('/');  
  }

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
              {user.can('read:automobiles') && <li><LiaCarSideSolid className={styles.icon} /> Frota</li>}
              {user.can('read:clients') && <li><FiUsers className={styles.icon} /> Clientes</li>}
              {user.can('read:rentals') && <li><GrDocumentText className={styles.icon} /> Locações</li>}
              {user.can('read:maintenances') && <li><BsWrenchAdjustableCircle className={styles.icon} /> Manutenção</li>}
              {user.can('read:users') && <li><FaRegUser className={styles.icon} /> Usuários</li>}
              {user.can('read:profiles') && <li><LuUserRoundCog className={styles.icon} /> Perfis</li>}
            </ul>
          </main>

          <footer className={styles.footer} onClick={logout}>
              <MdOutlineLogout />
              <p>Sair</p>
          </footer>
        </div>
      )}
    </>
  );
}