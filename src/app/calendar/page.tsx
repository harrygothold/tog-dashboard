import { getMeetingRooms } from '@/lib/api/availabilityForce';
import { Suspense } from 'react';
import MeetingRoomList from './MeetingRoomList';
import styles from './page.module.css';

const CalendarPage = async () => {
  const [meetingRooms] = await Promise.all([getMeetingRooms()]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className={styles.main}>
        <h1>Meeting Room Bookings</h1>
        <h3>Live Availability</h3>
        {!!meetingRooms.length ? (
          <MeetingRoomList meetingRooms={meetingRooms} />
        ) : (
          <p>No meeting rooms available</p>
        )}
      </main>
    </Suspense>
  );
};

export default CalendarPage;
