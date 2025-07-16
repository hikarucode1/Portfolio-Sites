import Link from 'next/link';
import { works } from '../data/works';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Hikaru's Portfolio</h1>
      <p style={{ marginBottom: '2rem' }}>
        Webアプリ・モバイルアプリ開発が得意なエンジニア「hikaru」のポートフォリオサイトです。
        <br />
        これまでに作成したアプリやウェブサイトを紹介しています。
      </p>
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>おすすめ作品</h2>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {works.slice(0, 2).map(work => (
            <div key={work.id} style={{ border: '1px solid #eee', borderRadius: 8, padding: '1rem', width: 300 }}>
              <img src={work.image[0]} alt={work.title} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 4 }} />
              <h3 style={{ margin: '1rem 0 0.5rem' }}>{work.title}</h3>
              <p>{work.description}</p>
              <Link href={`/works/${work.id}`} style={{ color: '#0070f3', textDecoration: 'underline' }}>詳細を見る</Link>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>ナビゲーション</h2>
        <ul>
          <li><Link href="/works">作品一覧を見る</Link></li>
          <li><Link href="/about">プロフィールを見る</Link></li>
          <li><Link href="/contact">お問い合わせ</Link></li>
        </ul>
      </section>
    </main>
  );
}
