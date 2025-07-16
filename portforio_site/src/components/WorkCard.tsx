import Link from 'next/link';
import { Work } from '../data/works';

export default function WorkCard({ work }: { work: Work }) {
  return (
    <div style={{ border: '1px solid #eee', borderRadius: 8, padding: '1rem', width: 300 }}>
      <img src={work.image[0]} alt={work.title} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 4 }} />
      <h2 style={{ margin: '1rem 0 0.5rem' }}>{work.title}</h2>
      <p>{work.description}</p>
      <div style={{ margin: '0.5rem 0' }}>
        {work.techStack.map(tech => (
          <span key={tech} style={{ fontSize: 12, background: '#f0f0f0', borderRadius: 4, padding: '2px 6px', marginRight: 4 }}>{tech}</span>
        ))}
      </div>
      <Link href={`/works/${work.id}`} style={{ color: '#0070f3', textDecoration: 'underline' }}>詳細を見る</Link>
    </div>
  );
} 