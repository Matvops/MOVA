import { FiPlus } from 'react-icons/fi';
import styles from './style.module.css';

type PageHeaderProps = {
  title: string,
  description?: string,
  buttonContent?: string
}

export function PageHeader({ title, description, buttonContent }: PageHeaderProps) {

  return (
    <header className={styles.contentHeader}>
      <div>
        {description &&  <span className={styles.desc}>{description}</span>}
        <p className={styles.title}>{title}</p>
      </div>

      {buttonContent && (
        <button className={styles.button} type="button">
          <FiPlus className={styles.plusIcon} /> {buttonContent}
        </button>
      )}
    </header>
  );
}