import styles from './style.module.css';


type TabPanelProps = {
  activeIndex: number,
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>,
  children: React.ReactNode
}

export function TabPanel({ activeIndex, setActiveIndex, children }: TabPanelProps) {

  return (
    <div>
      <header className={styles.header}>
        <p
          className={`${styles.titleHeader} ${activeIndex === 0 ? styles.activeHeader : ''}`}
          onClick={() => setActiveIndex(0)}
        >
          Permissões
        </p>
        <p
          className={`${styles.titleHeader} ${activeIndex === 1 ? styles.activeHeader : ''}`}
          onClick={() => setActiveIndex(1)}
        >
          Usuários vinculados
        </p>
      </header>
      
      <main>
        {children}
      </main>

    </div>
  );
}