import styles from './style.module.css';

type InputDefaultProps = {
  label: string,
  value: string|number,
  handleValue: React.ChangeEventHandler<HTMLInputElement, HTMLInputElement> | undefined,
  type: 'text' | 'number' | 'date' | 'email' | 'password',
  required?: boolean,
  autoComplete?: 'off' | 'on' | 'new-password',
  placeholder?: string,
} 

export function InputDefault({ label, value, handleValue, type, required = false, autoComplete = 'on', placeholder = '' }: InputDefaultProps) {

  return (
    <label className={styles.label}>
      <span>{label} {required && '*'}</span>
      <input 
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete} 
        className={styles.input} 
        value={value}
        onChange={handleValue}
      />
    </label>
  );
}