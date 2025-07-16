export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Test Dynamic Route</h1>
      <p>slug: {params.slug}</p>
    </main>
  );
} 