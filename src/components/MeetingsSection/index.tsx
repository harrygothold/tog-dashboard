import { Meeting } from '@/types';
import MeetingItem from './MeetingItem';

import styles from './index.module.css';

export type MeetingsSectionProps = {
  meetings: Meeting[];
};

const MeetingsSection = ({ meetings }: MeetingsSectionProps) => {
  return (
    <div className="meetings-section">
      <h2>Meetings</h2>
      {!!meetings.length ? (
        <ul className={styles.meetingsList}>
          {meetings.map((meeting) => (
            <li key={meeting.id}>
              <MeetingItem meeting={meeting} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No meetings today!</p>
      )}
    </div>
  );
};

export default MeetingsSection;
