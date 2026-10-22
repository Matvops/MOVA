import styles from './style.module.css';

type PermissionsProps = {
  title: string,
  children: React.ReactNode
}

export function Permissions({ title, children }: PermissionsProps) {

  return (
    <section className={styles.permissions}>
      <header className={styles.permissionHeader}>
        <h2 className={styles.permissionHeaderTitle}>{title}</h2>
        <button className={styles.permissionHeaderCheckAll}>Marcar todas</button>
      </header>
      <div>
        <ul className={styles.listPermissions}>
          {children}
        </ul>
      </div>
    </section>
  );
}