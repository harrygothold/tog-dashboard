import { Viewing } from '@/lib/api/customerForce';
import { convertServerDateStringToReadableDate } from '@/utils/date';

import { FaChevronRight } from 'react-icons/fa';
import styles from './index.module.css';

export type ViewingItemProps = {
  viewing: Viewing;
};

const ViewingItem = ({ viewing }: ViewingItemProps) => {
  const dateString = convertServerDateStringToReadableDate(viewing.viewingDate);
  return (
    <div className={styles.viewingItem}>
      <div>
        <strong className={styles.companyName}>{viewing.companyName}</strong>
        <p>{dateString}</p>
      </div>
      <FaChevronRight className={styles.chevron} />
    </div>
  );
};
export default ViewingItem;
