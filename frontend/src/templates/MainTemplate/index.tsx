import styles from './style.module.css';

type MainTemplateProps = {
  children: React.ReactNode
}

export function MainTemplate({ children }: MainTemplateProps) {

  return (
    <div className={styles.body}>
      {children}
    </div>
  );
}