import Viewings from '@/components/Viewings';
import styles from './page.module.css';
import { getViewings } from '@/lib/api/availabilityForce';

export default async function Home() {
  const [viewings] = await Promise.all([getViewings()]);
  return (
    <main className={styles.main}>
      <h1>Hello World</h1>
      <Viewings viewings={viewings} />
    </main>
  );
}
