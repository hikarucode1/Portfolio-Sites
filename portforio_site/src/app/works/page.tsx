import { works } from '../../data/works';
import WorkCard from '../../components/WorkCard';

export default function WorksPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Works</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {works.map(work => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </main>
  );
} 