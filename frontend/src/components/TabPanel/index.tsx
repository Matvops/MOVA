import { Children, isValidElement } from 'react';
import styles from './style.module.css';


type TabPanelProps = {
  activeIndex: number,
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>,
  children: React.ReactNode
}

export function TabPanel({ activeIndex, setActiveIndex, children }: TabPanelProps) {

  const childs = Children?.toArray(children);

  function returnHeaderOptions() {
    return Children.map(children, (child, i) => {
      if (isValidElement(child)) {

        const element = child as React.ReactElement<any>;

        return (
          <>
            <p
              className={`${styles.titleHeader} ${activeIndex === i ? styles.activeHeader : ''}`}
              onClick={() => setActiveIndex(i)}
              key={i}
            >
              {element.props.title}
            </p>
          </>
        )
      }
      return child;
    });
  }

  return (
    <div>
      <header className={styles.header}>
        {returnHeaderOptions()}
      </header>

      <main>
        {childs[activeIndex]}
      </main>

    </div>
  );
}