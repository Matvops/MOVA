import styles from './style.module.css';

type PermissionsProps = {
  title: string,
  description: string,
  permission: string
}

export function Permission({ title, description, permission }: PermissionsProps) {


  return (
    <li className={styles.permission}>
      <input type='checkbox' className={styles.permissionCheck} />
      <div className={styles.permissionContent}>
        <h3 className={styles.permissionTitle}>{title}</h3>
        <p className={styles.permissionDescription}>
          {description}
        </p>
      </div>
    </li>
  );
}