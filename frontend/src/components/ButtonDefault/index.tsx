import styles from './style.module.css';

type ButtonDefaultProps = {
  type: 'button' | 'submit'
  text: string,
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export function ButtonDefault({text, type = 'button', onClick}: ButtonDefaultProps) {

  return (
    <button type={type} className={styles.button} onClick={onClick}>{text}</button>
  );
}