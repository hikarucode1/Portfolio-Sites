import { works } from '../../../data/works';
import { notFound } from 'next/navigation';

export default function WorkDetailPage({ params }: { params: { id: string } }) {
  const work = works.find(w => w.id === params.id);
  if (!work) return notFound();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{work.title}</h1>
      <img src={work.image[0]} alt={work.title} style={{ width: 400, height: 240, objectFit: 'cover', borderRadius: 8 }} />
      <p style={{ margin: '1rem 0' }}>{work.description}</p>
      <div style={{ margin: '0.5rem 0' }}>
        {work.techStack.map(tech => (
          <span key={tech} style={{ fontSize: 12, background: '#f0f0f0', borderRadius: 4, padding: '2px 6px', marginRight: 4 }}>{tech}</span>
        ))}
      </div>
      {work.githubUrl && <a href={work.githubUrl} target="_blank" rel="noopener noreferrer" style={{ marginRight: 16 }}>GitHub</a>}
      {work.demoUrl && <a href={work.demoUrl} target="_blank" rel="noopener noreferrer">デモサイト</a>}
      <div style={{ marginTop: 16, fontSize: 14, color: '#666' }}>
        <div>制作時期: {work.period}</div>
        <div>担当範囲: {work.role}</div>
      </div>
    </main>
  );
} 