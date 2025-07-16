import Link from 'next/link';

export default function Header() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #eee', marginBottom: '2rem' }}>
      <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link href="/works" style={{ marginRight: '1rem' }}>Works</Link>
      <Link href="/about" style={{ marginRight: '1rem' }}>About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
} 