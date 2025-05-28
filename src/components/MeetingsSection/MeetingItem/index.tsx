import { Meeting } from '@/types';

import styles from './index.module.css';
import { FaQrcode } from 'react-icons/fa';

export type MeetingItemProps = {
  meeting: Meeting;
};

const MeetingItem = ({ meeting }: MeetingItemProps) => {
  return (
    <div className={styles.meetingItem}>
      <div>
        <h3 className={styles.meetingName}>{meeting.meetingName}</h3>
        <p>
          {meeting.meetingStart} - {meeting.meetingEnd}
        </p>
      </div>
      <FaQrcode className={styles.qr} />
    </div>
  );
};

export default MeetingItem;
