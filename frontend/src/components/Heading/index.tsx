import styles from './style.module.css';

type HeadingProps = {
  children: string,
  mode?: 'light' | 'dark'
} 

export function Heading({ children, mode = 'light' }: HeadingProps) {

  return (
    <h1 className={`${styles.header} ${mode === 'light' ? styles.light : styles.dark}`}>{children}</h1>
  );
}