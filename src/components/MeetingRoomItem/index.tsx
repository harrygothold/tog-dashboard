import { MeetingRoom } from '@/types';
import Image from 'next/image';
import type { IconType } from 'react-icons';
import { FaPoundSign } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';

import styles from './index.module.css';

export type MeetingRoomItemProps = {
  meetingRoom: MeetingRoom;
};

const MeetingRoomItem = ({ meetingRoom }: MeetingRoomItemProps) => (
  <div className={styles.meetingRoomItem}>
    <Image
      src={meetingRoom.imageUrl}
      alt={meetingRoom.meetingRoomName}
      width={120}
      height={120}
      className={styles.meetingRoomImage}
    />
    <strong className={styles.meetingRoomName}>
      {meetingRoom.meetingRoomName}
    </strong>
    <IconWithNumber number={meetingRoom.capacity} Icon={FaPeopleGroup} />
    <IconWithNumber number={meetingRoom.price} Icon={FaPoundSign} />
  </div>
);

export default MeetingRoomItem;

type IconWithNumberProps = {
  number: number;
  Icon: IconType;
};

const IconWithNumber = ({ number, Icon }: IconWithNumberProps) => (
  <div className={styles.iconWithNumber}>
    <Icon />
    <span>{number}</span>
  </div>
);
