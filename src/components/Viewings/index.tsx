import { Viewing } from '@/types';
import ViewingItem from '../ViewingItem';

import styles from './index.module.css';

export type ViewingsProps = {
  viewings: Viewing[];
};

const Viewings = ({ viewings }: ViewingsProps) => {
  return (
    <div className="viewings">
      <h2>Viewings</h2>
      {!!viewings.length ? (
        <ul className={styles.viewingsList}>
          {viewings.map((viewing) => (
            <li key={viewing.id}>
              <ViewingItem viewing={viewing} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No viewings available</p>
      )}
    </div>
  );
};

export default Viewings;
