import Link from 'next/link';
import { Work } from '../data/works';

export default function WorkCard({ work }: { work: Work }) {
  return (
    <div className="card">
      <img src={work.image[0]} alt={work.title} />
      <h2 style={{ margin: '1rem 0 0.5rem' }}>{work.title}</h2>
      <p>{work.description}</p>
      <div style={{ margin: '0.5rem 0' }}>
        {work.techStack.map(tech => (
          <span key={tech} className="tech">{tech}</span>
        ))}
      </div>
      <Link href={`/works/${work.id}`} style={{ color: '#0070f3', textDecoration: 'underline' }}>詳細を見る</Link>
    </div>
  );
} 