import MeetingsSection from '@/components/MeetingsSection';
import Viewings from '@/components/Viewings';
import { getMeetings, getViewings } from '@/lib/api/customerForce';
import { Suspense } from 'react';
import styles from './page.module.css';

export default async function Home() {
  const [viewings, meetings] = await Promise.all([
    getViewings(),
    getMeetings(),
  ]);
  return (
    <main className={styles.main}>
      <Suspense fallback={<div>Loading...</div>}>
        <MeetingsSection meetings={meetings} />
        <Viewings viewings={viewings} />
      </Suspense>
    </main>
  );
}
