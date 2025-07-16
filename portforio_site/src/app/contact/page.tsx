export default function ContactPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: 500, margin: '0 auto' }}>
      <h1>Contact</h1>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }} onSubmit={e => { e.preventDefault(); alert('送信されました（ダミー）'); }}>
        <label>
          お名前
          <input type="text" name="name" required style={{ width: '100%', padding: 8, marginTop: 4 }} />
        </label>
        <label>
          メールアドレス
          <input type="email" name="email" required style={{ width: '100%', padding: 8, marginTop: 4 }} />
        </label>
        <label>
          お問い合わせ内容
          <textarea name="message" required rows={5} style={{ width: '100%', padding: 8, marginTop: 4 }} />
        </label>
        <button type="submit" style={{ padding: '0.5rem 1.5rem', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 'bold' }}>送信</button>
      </form>
    </main>
  );
} 