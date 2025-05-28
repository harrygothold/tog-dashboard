import Viewings from '@/components/Viewings';
import styles from './page.module.css';
import { getMeetings, getViewings } from '@/lib/api/availabilityForce';
import MeetingsSection from '@/components/MeetingsSection';

export default async function Home() {
  const [viewings, meetings] = await Promise.all([
    getViewings(),
    getMeetings(),
  ]);
  return (
    <main className={styles.main}>
      <MeetingsSection meetings={meetings} />
      <Viewings viewings={viewings} />
    </main>
  );
}
