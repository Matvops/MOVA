
import styles from './style.module.css';

type UserAvatarProps = {
  name: string
}

export function UserAvatar({ name }: UserAvatarProps) {

  const handleAcronym = () => {

      const names = name.toUpperCase().split(' ');
      const firstLetter = names[0].charAt(0);

      if(names.length < 2) {
        return firstLetter + names[0].charAt(1);
      }

      return firstLetter + names[names.length - 1].charAt(0)
    }

  return (
    <>
      <div className={styles.avatar}>
        {handleAcronym()}
      </div>
    </>
  );
}