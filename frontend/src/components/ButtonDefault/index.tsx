import styles from './style.module.css';

type ButtonDefaultProps = {
  type: 'button' | 'submit'
  text: string
}

export function ButtonDefault({text, type = 'button'}: ButtonDefaultProps) {

  return (
    <button type={type} className={styles.button}>{text}</button>
  );
}