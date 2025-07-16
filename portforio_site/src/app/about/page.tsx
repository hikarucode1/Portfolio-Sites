export default function AboutPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: 700, margin: '0 auto' }}>
      <h1>About</h1>
      <section style={{ marginBottom: '2rem' }}>
        <h2>自己紹介</h2>
        <p>こんにちは、hikaruです。Webアプリ・モバイルアプリの開発が得意なエンジニアです。ユーザー体験を重視した設計・実装を心がけています。</p>
      </section>
      <section style={{ marginBottom: '2rem' }}>
        <h2>スキル</h2>
        <ul>
          <li>TypeScript / JavaScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>Firebase / Supabase</li>
          <li>Python / Django</li>
        </ul>
      </section>
      <section>
        <h2>リンク</h2>
        <ul>
          <li><a href="https://github.com/hikarucode1" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </section>
    </main>
  );
} 