import MeetingRoomItem from '@/components/MeetingRoomItem';
import { MeetingRoom } from '@/types';

import styles from './index.module.css';

export type MeetingRoomListProps = {
  meetingRooms: MeetingRoom[];
};

const MeetingRoomList = ({ meetingRooms }: MeetingRoomListProps) => (
  <ul className={styles.meetingRoomList}>
    {meetingRooms
      .filter((meetingRoom) => meetingRoom.isAvailable)
      .map((meetingRoom) => (
        <li key={meetingRoom.id}>
          <MeetingRoomItem meetingRoom={meetingRoom} />
        </li>
      ))}
  </ul>
);

export default MeetingRoomList;
