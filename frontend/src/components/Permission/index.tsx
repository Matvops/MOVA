import styles from './style.module.css';

type PermissionsProps = {
  title: string,
  description: string,
  handlePermission: () => void
  checked: boolean,
}

export function Permission({ title, description, handlePermission, checked }: PermissionsProps) {


  return (
    <li className={styles.permission}>
      <input type='checkbox' className={styles.permissionCheck} onChange={handlePermission} checked={checked} />
      <div className={styles.permissionContent}>
        <h3 className={styles.permissionTitle}>{title}</h3>
        <p className={styles.permissionDescription}>
          {description}
        </p>
      </div>
    </li>
  );
}