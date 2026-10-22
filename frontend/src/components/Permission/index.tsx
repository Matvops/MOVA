import styles from './style.module.css';

type PermissionsProps = {
  title: string,
  description: string
}

export function Permission({ title, description }: PermissionsProps) {


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