import styles from './style.module.css';

type PermissionsProps = {
  title: string,
  children: React.ReactNode,
  handleAll: () => void,
  isAddAll: boolean
}

export function Permissions({ title, children, handleAll, isAddAll }: PermissionsProps) {

  const actionButton = isAddAll ? 'Marcar Todas' : 'Limpar grupo';

  return (
    <section className={styles.permissions}>
      <header className={styles.permissionHeader}>
        <h2 className={styles.permissionHeaderTitle}>{title}</h2>
        <button className={styles.permissionHeaderCheckAll} type='button' onClick={handleAll}>{actionButton}</button>
      </header>
      <div>
        <ul className={styles.listPermissions}>
          {children}
        </ul>
      </div>
    </section>
  );
}